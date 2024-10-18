import React, { useState } from "react";
import "./blog.css";
import img1 from '../assets/img1/2.jpg';
import img2 from '../assets/img1/7.jpg';
import img3 from '../assets/img1/9.jpg';
import img4 from '../assets/punch.jpg';
import korede from '../assets/img1/korede.jpeg';
import pesinpapa from '../assets/IMG_0282.jpg';

const brandingData = [
  {
    id: 1,
    title: "A Day with One of the Founders of the Celebrity Food Pantry Foundation",
    description: "Spending a day with one of the founders of the Celebrity Food Pantry Foundation reveals ther. . .",
    fullDescription: "Spending a day with one of the founders of the Celebrity Food Pantry Foundation reveals the genuine dedication behind the organization’s mission to combat food insecurity. From early morning meetings with volunteers to overseeing food distributions, the founder is hands-on, ensuring that every detail is attended to. Their passion for the cause is evident as they interact with families in need, offering not just food but a sense of hope and support. It’s clear that this is more than just a charitable endeavor—it’s a deeply personal commitment. Throughout the day, the founder’s approachability and sincerity shine as they engage with the community and work alongside volunteers. They take time to listen to each person’s story, ensuring that everyone feels seen and heard. By the end of the day, it’s easy to see how their leadership and celebrity influence are making a significant impact, using their platform to raise awareness and bring real change to those who need it most.",
    imageUrl: img1,
    authorImage: korede,
    author: "Abdulsalam Korede",
    date: "June 22nd, 2024",
  },
  {
    id: 2,
    title: "Celebrity Food Pantry Feeds Underprivileged",
    description: "We strive to create a world where vulnerable communiti . . .",
    fullDescription: "Dele Oduyemi, a United States-based auto dealer, is passionate about positively impacting the lives of the underprivileged. Despite being based in the US, he has consistently provided help to indigent Nigerians through the Celebrity Food Pantry Home Foundation, which he runs with his wife, Tayo. The NGO is dedicated to addressing hunger and providing critical support to marginalized communities. With a strong focus on easing the economic burden faced by vulnerable individuals and widows, their mission is centered around ensuring access to nutritious food and alleviating hunger-related challenges. Speaking on what inspired the initiative, Oduyemi said, “My wife and I were inspired to create a location where anyone who is hungry can walk in and be fed. For now, we fund it personally, but we hope in the future, it will be self-funded.He added, “We envision a society where no one goes to bed hungry. We strive to create a world where vulnerable communities have consistent access to nourishing meals and enhancing their overall well-being.“Our primary objective is to tackle food insecurity by distributing food aid, implementing sustainable food programmes, and supporting vulnerable groups.” On the approach taken by the NGO to realise its objectives, Oduyemi said, “We work closely with local communities and are open to partner organisations, and volunteers to implement efficient food distribution systems. We emphasise community involvement, targeted aid, and sustainable solutions to address hunger and food insecurity effectively.",
    imageUrl: img4,
    authorImage: pesinpapa,
    author: "Shadrack Akinola",
    date: "Dec 17th, 2023",
  },
  {
    id: 3,
    title: "One of the Children Getting a Back-to-School Resumption Gift from One of Our Sponsors",
    description: "Mr. Otunba Akindeji, a generous sponsor of the Celebrity Food Pantry Home Foundation, provided a special back-to-sch. . .",
    fullDescription: "The beginning of a new school year is filled with excitement, nervousness, and anticipation for children everywhere. For one child at the Celebrity Food Pantry Home Foundation, this year's school resumption was made even more special thanks to the generosity of our dedicated sponsor, Mr. Otunba Akindeji. At the Celebrity Food Pantry Home Foundation, we strive to provide not only food security but also opportunities for personal growth and educational support for the children we serve. This mission was beautifully echoed in Mr. Akindeji's thoughtful gesture, as he decided to give a back-to-school resumption gift to one of our bright young students.",
    imageUrl: img3,
    authorImage: korede,
    author: "Abdulsalam Korede",
    date: "Sep 7th, 2024",
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
              <h3>{brand.title}</h3>
              <p>{brand.description}{" "}<div className="btn-container-content"><button onClick={() => handleMoreClick(brand)} className="btn-more">more . . .</button></div></p>
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
              <span className="material-symbols-outlined">close</span>
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
