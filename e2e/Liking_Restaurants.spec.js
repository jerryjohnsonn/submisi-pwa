const assert = require('assert');

Feature('Liking Restaurants');

Before(({ I }) => {
  I.amOnPage('/');
});

Scenario('Liking a restaurant and unliking a restaurant', async ({ I }) => {
  pause();
  I.waitForElement('#main-content');
  I.waitForElement('#restaurants .card');
  I.see('Restaurant List', '.content_heading');
  const firstIndexRestaurant = locate('#restaurants .card').first();
  const firstIndexRestaurantName = await I.grabTextFrom(firstIndexRestaurant.find('.card-text h3 a'));
  I.click(firstIndexRestaurant.find('a'));
  I.waitForElement('#likeButton');
  I.click('#likeButton');
  I.amOnPage('/#/favorite');
  const likedRestaurantName = await I.grabTextFrom('.card-text h3 a');
  assert.strictEqual(firstIndexRestaurantName, likedRestaurantName);
  I.amOnPage('/#/favorite');
  I.waitForElement('#main-content');
  I.waitForElement('#restaurants .card');
  const firstLikedRestaurant = locate('#restaurants .card').first();
  I.click(firstLikedRestaurant.find('a'));
  I.waitForElement('#likeButton');
  I.click('#likeButton');
  I.amOnPage('/#/favorite');
  I.dontSeeElement('.card');
});
