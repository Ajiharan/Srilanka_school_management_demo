import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <img
        className="home__image"
        src="https://moe.gov.lk/wp-content/uploads/2020/07/ministry-of-education-sri-lanka-slider-ministry-2.jpg"
        alt="home_image"
      />
      <div className="home__cardRow"></div>
    </div>
  );
};

export default Home;
