const reviews = [
    {
      rating: 4,
      reviewer: "John Smith",
      comment: "Great location, friendly staff, and clean rooms. Would definitely recommend!",
      image: "https://pbs.twimg.com/media/CXaOlBmUkAARpWp.jpg"
    },
    {
      rating: 4,
      reviewer: "Emily Johnson",
      comment: "The hotel was nice overall, but the Wi-Fi was a bit slow. Breakfast was good though.",
      image: "https://wallpapers.com/images/hd/beautiful-woman-with-random-people-in-background-roumbpovzh5jzxj5.jpg"
    },
    {
      rating: 5,
      reviewer: "David Brown",
      comment: "Absolutely loved my stay! The room was spacious and well-equipped. Amazing views from the balcony.",
      image: 'https://img.buzzfeed.com/buzzfeed-static/static/2017-06/6/17/enhanced/buzzfeed-prod-fastlane-01/enhanced-29524-1496785061-1.jpg?output-format=jpg&output-quality=auto'
    }
  ];


  function displayReviews() {
    const reviewsContainer = document.getElementById("reviews");
  
    reviews.forEach(review => {
      const reviewCard = document.createElement("div");
      reviewCard.classList.add("card");
      reviewCard.classList.add("mt-4");
      reviewCard.classList.add("mx-2");
  
      const cardBody = document.createElement("div");
      cardBody.classList.add("card-body");
  
      const ratingStars = "&#9733;".repeat(review.rating) + "&#9734;".repeat(5 - review.rating); 
  
      cardBody.innerHTML = `
        <img src="${review.image}" alt="Hotel Review Image" class="float-left mr-2 card-img">
        <h5 class="card-title mt-3">${review.reviewer}</h5>
        <p class="card-text">Rating: ${ratingStars}</p>
        <p class="card-text">${review.comment}</p>
      `;
  
      reviewCard.appendChild(cardBody);
      reviewsContainer.appendChild(reviewCard);
    });
  }

  document.addEventListener("DOMContentLoaded", displayReviews);