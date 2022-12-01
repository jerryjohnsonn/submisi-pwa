import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';
import RestaurantDbSource from '../../data/restaurantdb-source';
import UrlParser from '../../routes/url-parser';
import LikeButtonPresenter from '../../utils/like-button-presenter';
import { createRestaurantDetailTemplate } from '../templates/template-creator';

const DetailRestaurant = {
  async render() {
    return `
      <div class="content"></div>
      <div id="likeButtonContainer"></div>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurant = await RestaurantDbSource.detailRestaurant(url.id);
    const restaurantContainer = document.querySelector('.content');
    restaurantContainer.innerHTML += createRestaurantDetailTemplate(restaurant);

    LikeButtonPresenter.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      favoriteRestaurants: FavoriteRestaurantIdb,
      restaurant: {
        id: restaurant.id,
        name: restaurant.name,
        description: restaurant.description,
        city: restaurant.city,
        pictureId: restaurant.pictureId,
        rating: restaurant.rating 
      } 
    });
  },
};

export default DetailRestaurant;
