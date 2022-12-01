import CONFIG from '../../globals/config';

const createRestaurantTemplate = (restaurant) => `
  <div class="card">
  <div class="card-image">
    <img src= "${CONFIG.BASE_IMAGE_URL}/medium/${restaurant.pictureId}" alt="${restaurant.name}" tabindex="0">
    <div class="image-location">
      <h5 tabindex="0">Kota : ${restaurant.city}</h5>
    </div>
  </div>
  <div class="card-text">
    <h3 class ="restaurant__title"><a href="/#/detail/${restaurant.id}">${restaurant.name}</a></h3>
    <h4 tabindex="0">Rating: ⭐️${restaurant.rating}</h4>
    <p tabindex="0">${restaurant.description}</p>
  </div>
  </div>
`;

const createRestaurantDetailTemplate = (restaurant) => `
  <div class="container-detail">
    <div class="container-detail-left">
      <h2 class="container-detail-name" tabindex="0">${restaurant.name}</h2>
      <img src="${CONFIG.BASE_IMAGE_URL}/large/${restaurant.pictureId}" alt="${restaurant.name}" tabindex="0">
      <div class="information-container">
        <h3 tabindex="0">Restaurant Information</h3>
        </br>
        <h4 tabindex="0">Rating : ⭐️${restaurant.rating}</h4>
        <h4 tabindex="0">City : ${restaurant.city}</h4>
        <h4 class="container-detail-address" tabindex="0">Alamat : ${restaurant.address}</h4>
        <h4 class="container-detail-category" tabindex="0">Category:
        ${restaurant.categories
          .map(
            (category) => `
           ${category.name}
        `
          )
          .join(', ')}
        </h4>
        <br>
        <h4 class="container-detail-description" tabindex="0">Description: </h4>
        <p tabindex="0">
          ${restaurant.description}
        </p>
        <br>
        <h4 class="container-detail-food" tabindex="0">Food:</h4>
        ${restaurant.menus.foods.map(
          (food) => `
          <span tabindex="0">${food.name}</span>
        `
        )}
        <br>
        <br>
        <h4 class="container-detail-drink" tabindex="0">Drink:</h4>
        ${restaurant.menus.drinks.map(
          (drink) => `
          <span tabindex="0">${drink.name}</span>
        `
        )}
      </div>
    </div>
      <div class="container-detail-right">
        <h2 tabindex="0">Some reviews</h2>
        <div class="reviews">
          ${restaurant.customerReviews
            .map(
              (review) => `
            <div class="review-box">
              <b tabindex="0">${review.name}</b>
              <p tabindex="0">${review.date}</p>
              <p tabindex="0">${review.review}</p>
            </div>
          `
            )
            .join('')}
        </div>
      </div>
  </div>
`;

const createLikeRestaurantButtonTemplate = () => `
  <button aria-label="like this restaurant" id="likeButton" class="like" tabindex="0">
     <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createUnlikeRestaurantButtonTemplate = () => `
  <button aria-label="unlike this restaurant" id="likeButton" class="like" tabindex="0">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export { createRestaurantTemplate, createRestaurantDetailTemplate, createLikeRestaurantButtonTemplate, createUnlikeRestaurantButtonTemplate };
