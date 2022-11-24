import RestaurantDbSource from '../../data/restaurantdb-source';
import { createRestaurantTemplate } from '../templates/template-creator';

const ListRestaurant = {
  async render() {
    return `
      <div class="content">
        <h3 class="content_heading" tabindex="0">Restaurant List</h3>
        <div id="restaurants">
        </div>
      </div>
    `;
  },

  async afterRender() {
    const listRestaurants = await RestaurantDbSource.listRestaurant();
    const restaurantContainer = document.getElementById('restaurants');
    listRestaurants.forEach((restaurant) => {
      restaurantContainer.innerHTML += createRestaurantTemplate(restaurant);
    });
  },
};

export default ListRestaurant;