import './style.css';
import getData from './modules/get.js';
import getLikes from './modules/getLikes.js';
import imgUrl from './asset/like-svgrepo-com.svg';
import addEventToLike from './modules/showLikes.js';

const renderLikes = async (listItem) => {
  const response = await getLikes();
  response.forEach((e) => {
    if (e.item_id === `${listItem.id}`) {
      listItem.querySelector('.qty').innerText = e.likes;
    }
  });
};

const displayMeals = () => {
  getData().then((data) => {
    const listOfMeals = data.meals;
    listOfMeals.forEach((item) => {
      const meal = document.createElement('div');
      meal.classList.add('meal');
      meal.id = item.idMeal;
      meal.innerHTML = `
      <h2>${item.strMeal}</h2>
      <img src="${item.strMealThumb}" alt="${item.strMeal}">
      <p>${item.strInstructions}</p>
      <button type="button" class="comments-btn1">Comments</button>
      <button type="button" class="comments-btn2">reservations</button>
      <div class="like">
      <img src='${imgUrl}' class="icon" />          
      <span class="qty">0</span> <span>Likes</span></p>
      </div>
    `;

      document.querySelector('.items-container').appendChild(meal);
    });
  // addEventToLike();
  // getLikes();
  }).finally(() => {
    addEventToLike();
    document.querySelectorAll('.meal').forEach((meal) => {
      renderLikes(meal);
    });
  });
};

window.addEventListener('load', () => {
  displayMeals();
});
