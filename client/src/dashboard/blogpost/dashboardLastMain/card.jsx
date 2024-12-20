import React, { useState, useEffect } from 'react';
import { db } from '../../../firebase'; 
import { collection, getDocs, query, orderBy } from 'firebase/firestore';
import './Card.css';

const Card = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const postsCollection = collection(db, 'posts');
        const q = query(postsCollection, orderBy('timestamp', 'desc'));
        const querySnapshot = await getDocs(q);

        const postsData = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        setPosts(postsData);
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div className="card-container">
      {posts.map((post) => (
        <div key={post.id} className="card">
          <h3>{post.title}</h3>
          <p>{post.description}</p>
          <p>{post.fullDescription}</p>
          {post.image && <p>Image Uploaded: {post.image}</p>}
          <p>Posted by: {post.account}</p>
          <p>Time: {new Date(post.timestamp?.toDate()).toLocaleString()}</p>
        </div>
      ))}
    </div>
  );
};

export default Card;
