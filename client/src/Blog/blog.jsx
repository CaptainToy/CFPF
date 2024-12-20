import React, { useState, useEffect } from "react";
import StarRating from "./rate";
import "./blog.css";
import img1 from "../assets/img1/2.jpg";
import img2 from "../assets/img1/7.jpg";
import img3 from "../assets/img1/9.jpg";
import img4 from "../assets/punch.jpg";

// Simulate fetching from database (replace with actual API call in real-world)
const fetchLikeCount = async (postId) => {
  // Example API fetch to get like count
  const response = await fetch(`/api/likes/${postId}`);
  const data = await response.json();
  return data.likes;
};

const updateLikeCount = async (postId, newCount) => {
  // Example API call to update like count in the database
  await fetch(`/api/likes/${postId}`, {
    method: "POST",
    body: JSON.stringify({ likes: newCount }),
    headers: {
      "Content-Type": "application/json",
    },
  });
};

const Blog = () => {
  const brandingData = [
    {
      id: 1,
      title: "A Day with One of the Founders of the Celebrity Food Pantry Foundation",
      description: "Spending a day with one of the founders of the Celebrity Food Pantry Foundation reveals ther. . .",
      fullDescription: "Spending a day with one of the founders of the Celebrity Food Pantry Foundation reveals the genuine dedication behind the organization’s mission...",
      imageUrl: img1,
      authorImage: img1,  
      author: "Abdulsalam Korede",
      date: "June 22nd, 2024",
    },
    {
      id: 2,
      title: "Celebrity Food Pantry Feeds Underprivileged",
      description: "We strive to create a world where vulnerable communiti . . .",
      fullDescription: "Dele Oduyemi, a United States-based auto dealer, is passionate about positively impacting the lives of the underprivileged...",
      imageUrl: img4,
      authorImage: img4,  
      author: "Shadrack Akinola",
      date: "Dec 17th, 2023",
    },
    {
      id: 3,
      title: "One of the Children Getting a Back-to-School Resumption Gift from One of Our Sponsors",
      description: "Mr. Otunba Akindeji, a generous sponsor of the Celebrity Food Pantry Home Foundation, provided a special back-to-sch. . .",
      fullDescription: "The beginning of a new school year is filled with excitement... thanks to the generosity of our dedicated sponsor, Mr. Otunba Akindeji.",
      imageUrl: img3,
      authorImage: img3,  
      author: "Abdulsalam Korede",
      date: "Sep 7th, 2024",
    },
  ];





  const data =[
    {
      id: 3,
      title: "One of the Children Getting a Back-to-School Resumption Gift from One of Our Sponsors",
      description: "Mr. Otunba Akindeji, a generous sponsor of the Celebrity Food Pantry Home Foundation, provided a special back-to-sch. . .",
      fullDescription: "The beginning of a new school year is filled with excitement... thanks to the generosity of our dedicated sponsor, Mr. Otunba Akindeji.",
      imageUrl: img3,
    },
    {
      id: 1,
      title: "A Day with One of the Founders of the Celebrity Food Pantry Foundation",
      description: "Spending a day with one of the founders of the Celebrity Food Pantry Foundation reveals ther. . .",
      fullDescription: "Spending a day with one of the founders of the Celebrity Food Pantry Foundation reveals the genuine dedication behind the organization’s mission...",
      imageUrl: img1,
    },
    {
      id: 2,
      title: "Celebrity Food Pantry Feeds Underprivileged",
      description: "We strive to create a world where vulnerable communiti . . .",
      fullDescription: "Dele Oduyemi, a United States-based auto dealer, is passionate about positively impacting the lives of the underprivileged...",
      imageUrl: img4,
    },
  ]

  const [selectedPost, setSelectedPost] = useState(null);
  const [likes, setLikes] = useState({
    post1: 0,
    post2: 0,
    post3: 0,
    post4: 0,
    post5: 0,
  });
  const [likedPosts, setLikedPosts] = useState({
    post1: false,
    post2: false,
    post3: false,
    post4: false,
    post5: false,
  });

  // Fetch initial like counts from the database
  useEffect(() => {
    const fetchLikes = async () => {
      const post1Likes = await fetchLikeCount("post1");
      const post2Likes = await fetchLikeCount("post2");
      const post3Likes = await fetchLikeCount("post3");
      const post4Likes = await fetchLikeCount("post4");
      const post5Likes = await fetchLikeCount("post5");

      setLikes({
        post1: post1Likes,
        post2: post2Likes,
        post3: post3Likes,
        post4: post4Likes,
        post5: post5Likes,
      });
    };

    fetchLikes();
  }, []);

  const handleLikeClick = (postId) => {
    const newLikesCount = likes[postId] + 1;
    setLikes((prevLikes) => ({
      ...prevLikes,
      [postId]: newLikesCount,
    }));
    setLikedPosts((prevLikes) => ({
      ...prevLikes,
      [postId]: true,
    }));

    // Update like count in the database
    updateLikeCount(postId, newLikesCount);
  };

  const handleMoreClick = (brand) => {
    setSelectedPost(brand);
  };

  const handleCloseModal = () => {
    setSelectedPost(null);
  };

  return (
    <div className="blog-container">
      <div className="side-section">
        <div className="recent-posts">
          <h3>Recent Post</h3>
          <ul>
            {brandingData.map((post) => (
              <li key={post.id}>
                <span className="post-title">{post.title}</span>
                <div className="post-meta">
                  <span className="icon">
                    <i className="bi bi-chat-dots-fill stop"></i>
                  </span>
                  <span className="comments">(0)</span>
                  <span
                    className="icon"
                    onClick={() => handleLikeClick(`post${post.id}`)}
                  >
                    <i
                      className={`bi ${
                        likedPosts[`post${post.id}`] ? "bi-heart-fill" : "bi-heart"
                      }`}
                    ></i>
                  </span>
                  <span className="likes">({likes[`post${post.id}`]})</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="blog-poster">
          {brandingData.map((post) => (
            <div key={post.id}>
              <img
                src={post.imageUrl} // Corrected the image source
                alt={post.title}
                className="banners"
              />
              <h2>{post.title}</h2>
              <p className="author">
                Posted by {post.author} on {post.date}
              </p>
              <p className="excerpt">
                {post.description}
                <a href="#" onClick={() => handleMoreClick(post)}>
                  [Read More]
                </a>
              </p>
              <StarRating />
            </div>
          ))}
        </div>
      </div>

      <div className="blog-posts">
        {data.map((post) => (
          <div className="blog-post" key={post.id}>
            <img
                src={post.imageUrl} 
                alt={post.title}
                className="banner"
              />
            <h2>{post.title}</h2>
            <p className="author">
              Posted by {post.author} on {post.date}
            </p>
            <p className="excerpt">
              {post.description}
              <a href="#" onClick={() => handleMoreClick(post)}>
                [Read More]
              </a>
            </p>
            <StarRating />
          </div>
        ))}

        <div className="footer-section submit-form comment">
          <h3 >Submit Form</h3>
          <form >
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email" />
            <textarea placeholder="Message"></textarea>
            <button type="submit">Add comment</button>
          </form>
         
        </div>


      </div>

      
      {selectedPost && (
        <div className="modal">
          <div className="modal-content">
            <button onClick={handleCloseModal}><i class="bi bi-x-lg"></i></button>
            <img src={selectedPost.imageUrl} alt={selectedPost.title} className="modal-image" />
            <h2>{selectedPost.title}</h2>
            <p>{selectedPost.fullDescription}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Blog;
