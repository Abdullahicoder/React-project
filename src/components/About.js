import React from "react";
import rest from "../images/restauranfood.jpg"

const About = () => {
    return (
<div class="about">
  <div>
    <h1 class="about-title">Little Lemon</h1>
    <h2 class="about-subtitle">Chicago</h2>
    <p class="about-description">Nestled in the heart of bustling Chicago, Little Lemon is where modern flair meets cozy nostalgia. Our diverse, artisanal menu, featuring delectable bruschettas, succulent burgers, and refreshing Greek salads, is a testament to our belief that food is an art. Crafted by expert chefs with locally-sourced ingredients, our dishes not only delight the palate but nourish the soul. Whether you're seeking a romantic dinner, a family meal, or a relaxed atmosphere with friends, Little Lemon is your ideal culinary destination. Find us in the heart of Chicago for an unforgettable experience.</p>
  </div>
  <img class="about-image-restaurant" src={rest} height="200" width="200" />
</div>


    );
};

export default About;