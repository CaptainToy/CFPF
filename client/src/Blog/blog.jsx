import React, { useState } from "react";
import "./blog.css";
import img1 from '../assets/img1/2.jpg';
import img2 from '../assets/img1/7.jpg';
import img3 from '../assets/img1/9.jpg'
import gg from '../assets/img1/gg.png'
import korede from '../assets/img1/korede.jpeg';
import pesinpapa from '../assets/IMG_0282.jpg';


const brandingData = [
  {
    id: 1,
    title: "A Day with One of the Founders of the Celebrity Food Pantry Foundation",
    description: "Spending a day with one of the founders of the Celebrity Food Pantry Foundation reveals . . .",
    fullDescription: "Spending a day with one of the founders of the Celebrity Food Pantry Foundation reveals the genuine dedication behind the organization’s mission to combat food insecurity. From early morning meetings with volunteers to overseeing food distributions, the founder is hands-on, ensuring that every detail is attended to. Their passion for the cause is evident as they interact with families in need, offering not just food but a sense of hope and support. It’s clear that this is more than just a charitable endeavor—it’s a deeply personal commitment.Throughout the day, the founder’s approachability and sincerity shine as they engage with the community and work alongside volunteers. They take time to listen to each person’s story, ensuring that everyone feels seen and heard. By the end of the day, it’s easy to see how their leadership and celebrity influence are making a significant impact, using their platform to raise awareness and bring real change to those who need it most.",
    imageUrl: img1,
    authorImage: korede,
    author: "Abdulsalam korede",
    date: "June 22, 2024",
  },
  {
    id: 2,
    title: "Gifting Clothes to Kids: Making a Difference",
    description: "At the Celebrity Food Pantry, the initiative Gifting Clothes to Kids . . .",
    fullDescription: "At the Celebrity Food Pantry, the initiative Gifting Clothes to Kids: Making a Difference aims to provide children in need with warm, stylish clothing that boosts their confidence and well-being. Recognizing that proper clothing is essential for children to feel good about themselves, this program focuses on distributing gently used and new clothes to those facing financial hardships. With the support of local businesses, volunteers, and community members, the pantry collects a wide range of clothing items tailored for different ages and sizes. By bridging the gap between community generosity and the needs of local families, this initiative not only outfits children but also fosters a sense of belonging and support during challenging times. In addition to clothing donations, the program organizes fun events where children can choose their outfits, allowing them to express their unique styles while creating lasting memories. Ultimately, Gifting Clothes to Kids not only meets a basic need but also instills a sense of hope, dignity, and self-worth in the young recipients, making a meaningful impact in their lives and the community as a whole.",
    imageUrl: img2,
    authorImage: pesinpapa,
    author: "Shadrack Akinola",
    date: "AUG 25, 2024",
  },
  {
    id: 3,
    title: "One of the childern grtting a back to school resumption gift from one of our sponsors",
    description: "Lorem ipsum, dolor sit amet consectetur adipiscing elit...",
    fullDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ultricies augue et velit molestie posuere. Curabitur convallis, sapien eget eleifend scelerisque, ipsum libero tempor nunc, non dapibus orci ligula non sapien.",
    imageUrl: img3,
    authorImage: korede,
    author: "Abdulsalam korede",
    date: "SEP 7, 2024",
  },
];

const Blog = () => {
  const [filter, setFilter] = useState("all");
  const [selectedPost, setSelectedPost] = useState(null);

  const handleFilterChange = (category) => {
    setFilter(category);
  };

  const handleMoreClick = (brand) => {
    setSelectedPost(brand);
  };

  const handleCloseModal = () => {
    setSelectedPost(null);
  };

  const filteredData =
    filter === "all"
      ? brandingData
      : brandingData.filter((brand) => brand.category === filter);

  return (
    <div className="branding-section">
      <div className="branding-grid">
        {filteredData.map((brand) => (
          <div key={brand.id} className="branding-item">
            <img src={brand.imageUrl} alt={brand.title} className="branding-img-item" />
            <div className="branding-content">
              <span className="branding-type">{brand.type}</span>
              <h3>{brand.title}</h3>
              <p>
                {brand.description}{" "}
                <button onClick={() => handleMoreClick(brand)} className="btn-more">more</button>
              </p>
              <div className="img-container-author">
                <img src={brand.authorImage} alt="author details" />
                <div className="author-details">
                  <span>{brand.author}</span>
                  <span>{brand.date}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {selectedPost && (
        <div className="modal">
          <div className="modal-content">
            <button className="close-modal" onClick={handleCloseModal}>
            <span class="material-symbols-outlined">close</span>
            </button>
            <h3>{selectedPost.title}</h3>
            <img src={selectedPost.imageUrl} alt={selectedPost.title} className="modal-img" />
            <p>{selectedPost.fullDescription}</p>
            <div className="img-container-author">
              <img src={selectedPost.authorImage} alt="author details" />
              <div className="author-details">
                <span>{selectedPost.author}</span>
                <span>{selectedPost.date}</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Blog;
