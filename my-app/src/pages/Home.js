import React from "react";
import { Link } from "react-router-dom";
import BannerImage from "../assests/bannerimage.png";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
      <div className="headerContainer">
      <h1>Botanical Bliss</h1>
      <p>Discover Your Perfect Plant Paradise</p>
        <Link to="/catalog">
          <button> ORDER NOW </button>
        </Link>
      </div>
    </div>
  );
}

export default Home;