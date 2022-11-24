import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';
import { createRestaurantTemplate } from '../templates/template-creator';

const FavoriteRestaurant = {
  async render() {
    return `
      <h3 id='title' class="content_heading" id="content">Your Favorite Restaurant</h3>
      <div id="restaurants"></div>
    `;
  },

  async afterRender() {
    const restaurants = await FavoriteRestaurantIdb.getAllRestaurants();
    const restaurantsContainer = document.querySelector('#restaurants');

    restaurants.forEach((restaurant) => {
      restaurantsContainer.innerHTML += createRestaurantTemplate(restaurant);
    });
  },
};

export default FavoriteRestaurant;