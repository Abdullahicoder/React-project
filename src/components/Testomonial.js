import React from "react";

const Testomonial = () => {
    return(
        <div class="testimonial-background">
  <div class="testimonials">
    <div class="testimonials-container">
      <h1 class="testimonial-title">Testimonials</h1>
    </div>
    <div class="testimonials-list">
      <div class="testimonial-card" data-testid="testimonial-card">
        <div class="testimonial-rating">
        </div>
        <div class="testimonial-card-container">
          <img class="testimonial-profile-picture" src="https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?cs=srgb&amp;dl=pexels-andrea-piacquadio-3763188.jpg&amp;fm=jpg" alt="author" height="50" />
          <p class="testimonial-card-author">Isabella Montgomery</p>
        </div>
        <p class="testimonial-description">Little Lemon's Bruschetta is a symphony of flavors; perfectly crispy bread coupled with the freshest tomatoes.</p>
      </div>
      
      <div class="testimonial-card" data-testid="testimonial-card">
        <div class="testimonial-rating">

          { /*Five-star rating */}

        </div>
        <div class="testimonial-card-container">
          <img class="testimonial-profile-picture" src="https://www.irreverentgent.com/wp-content/uploads/2018/03/Awesome-Profile-Pictures-for-Guys-look-away2.jpg" alt="author" height="50" />
          <p class="testimonial-card-author">Alexander Thompson</p>
        </div>
        <p class="testimonial-description">The burger at Little Lemon was a taste revelation with its juicy, perfectly cooked meat and harmonious ingredient pairing.</p>
      </div>
      
      <div class="testimonial-card" data-testid="testimonial-card">
        <div class="testimonial-rating">

          { /*Four-star rating */}

        </div>
        <div class="testimonial-card-container">
          <img class="testimonial-profile-picture" src="https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=1&amp;w=500" alt="author" height="50" />
          <p class="testimonial-card-author">Olivia Jenkins</p>
        </div>
        <p class="testimonial-description">The Greek Salad at Little Lemon was delightfully fresh and flavorful, with a high-quality dressing.</p>
      </div>
      
    
    </div>
  </div>
</div>


    );
};

export default Testomonial;