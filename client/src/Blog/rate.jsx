import React, { useState } from 'react';
import axios from 'axios';
import './blog.css';

const StarRating = ({ postId }) => {
  const [likes, setLikes] = useState(0); // Store the number of likes
  const [liked, setLiked] = useState(false); // Track whether the post is liked

  // Function to toggle the like status and update the database
  const handleLike = async () => {
    try {
      // Toggle the like status
      setLiked(!liked);

      // Update the likes count locally
      const newLikes = liked ? likes - 1 : likes + 1;
      setLikes(newLikes);

      // Make an API call to update the likes in the database
      await axios.post('/api/update-likes', {
        postId,
        likes: newLikes
      });
    } catch (error) {
      console.error('Error updating likes:', error);
    }
  };

  return (
    <div className="post-meta">
      <span className="icon" onClick={handleLike}>
        <i className={`bi ${liked ? 'bi-heart-fill' : 'bi-heart'}`} /> 
        <span className="likes">({likes})</span>
      </span>
    </div>
  );
};

export default StarRating;
