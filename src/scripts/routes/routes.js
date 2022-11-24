import DetailRestaurant from '../views/pages/detail-restaurant';
import FavoriteRestaurant from '../views/pages/favorite-restaurant';
import ListRestaurant from '../views/pages/list-restaurant';

const routes = {
  '/': ListRestaurant,
  '/list': ListRestaurant,
  '/detail/:id': DetailRestaurant,
  '/favorite': FavoriteRestaurant,
};

export default routes;