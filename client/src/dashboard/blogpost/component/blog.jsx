import React, { useState } from 'react';
import { db } from '../../../firebase'; 
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Form.css';

const PostForm = () => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    fullDescription: '',
    addImage: false,
    imageFile: null,
  });

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : type === 'file' ? files[0] : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const newPost = {
        title: formData.title,
        description: formData.description,
        fullDescription: formData.fullDescription,
        image: formData.addImage ? formData.imageFile?.name : null,
        account: 'currentUser', // Replace with dynamic user account
        timestamp: serverTimestamp(),
      };

      // Save to Firestore
      const postsCollection = collection(db, 'posts');
      await addDoc(postsCollection, newPost);

      // Reset form
      setFormData({
        title: '',
        description: '',
        fullDescription: '',
        addImage: false,
        imageFile: null,
      });

      // Show toast notification
      toast.success('Post added successfully!', {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } catch (error) {
      console.error('Error adding post:', error);

      // Show error toast notification
      toast.error('Failed to add post. Please try again.', {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  return (
    <div className="post-form-container">
      <form onSubmit={handleSubmit} className="post-form">
        <h2>Create Post</h2>

        <label>
          Title:
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Description:
          <input
            type="text"
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Full Description:
          <textarea
            name="fullDescription"
            value={formData.fullDescription}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Add Image
          <input
            type="checkbox"
            name="addImage"
            checked={formData.addImage}
            onChange={handleChange}
          />
        </label>

        {formData.addImage && (
          <label>
            Upload Image:
            <input
              type="file"
              name="imageFile"
              onChange={handleChange}
              accept="image/*"
              required
            />
          </label>
        )}

        <button type="submit">Post</button>
      </form>
      
      {/* Toast Notification Container */}
      <ToastContainer />
    </div>
  );
};

export default PostForm;
