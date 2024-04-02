import React from "react";
import Aboutimage from "../assests/aboutpage.png";
import "../styles/About.css";
function About() {
  return (
    <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${Aboutimage})` }}
      ></div>
      <div className="aboutBottom">
        <h1> ABOUT US</h1>
        <p>
        Welcome to Botanical Bliss, where nature and bliss unite to create a haven for plant enthusiasts and nature lovers alike. Our journey began with a simple passion for greenery and a desire to share the joy of gardening with others.
        At Botanical Bliss, we believe that plants have the power to transform spaces, uplift moods, and connect us with the beauty of nature. Our mission is to provide a curated collection of high-quality plants, gardening essentials, and expert advice to inspire and empower our customers on their plant-filled journey.
        What sets us apart is our commitment to quality, sustainability, and customer satisfaction. We source our plants and products from trusted growers and suppliers, ensuring that each item meets our standards of excellence. Whether you're a seasoned gardener or just starting, we're here to support you with our expertise, resources, and passion for green living.

        Our Values:

        Quality: We believe in offering only the finest plants and gardening supplies to our customers, backed by rigorous quality control measures.
        Sustainability: We are committed to promoting sustainable practices in gardening and minimizing our environmental footprint.
        Community: We strive to build a vibrant community of plant enthusiasts, sharing knowledge, experiences, and a love for all things green.
        Customer Care: Your satisfaction is our priority. We provide personalized assistance, reliable support, and a seamless shopping experience.
        
        Join us on this botanical journey and discover the beauty and serenity that plants bring to our lives. Let's cultivate happiness together at Botanical Bliss!
        </p>
      </div>
    </div>
  );
}

export default About;