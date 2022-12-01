Feature('Liking Restaurants');

Before(({ I }) => {
  I.amOnPage('/');
});

Scenario('Liking a restaurant', async ({ I }) => {
  I.see('Restaurant List','.content_heading');
  // pause();
  I.seeElement('.card');
  I.seeElement('.restaurant__title a');

  const firstRestaurant = locate('.restaurant__title a').first();
  I.click(firstRestaurant);
  I.seeElement('#likeButtonContainer');

  const likeButton = locate('#likeButtonContainer button');
  I.click(likeButton);
  I.amOnPage('/#/favorite');
});
