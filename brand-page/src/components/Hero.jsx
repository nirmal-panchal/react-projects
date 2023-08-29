import React from "react";

const Hero = () => {
  return (
    <main className="hero container">
      <div className="hero-content">
        <h1>YOUR FEET DESERVE THE BEST</h1>
        <p>
          YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.
        </p>
        <div className="hero-btn">
          <button>shop now</button>
          <button className="secondary-btn">Category</button>
        </div>
        <div className="available">
          <p>Also Available On</p>
          <div className="brand-icons">
            <img src="/flipkart.png" alt="" />
            <img src="/amazon.png" alt="" />
          </div>
        </div>
      </div>
      <div className="hero-image">
        <img src="/shoe_image.png" alt="" />
      </div>
    </main>
  );
};

export default Hero;
