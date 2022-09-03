import './style.css';
import getData from './modules/get.js';
import getLikes from './modules/getLikes.js';
import addEventToLike from './modules/showLikes.js';
import imgUrl from './asset/like-svgrepo-com.svg';

// console.log(getData());
addEventToLike();
getData().then((data) => {
  const listOfMeals = data.meals;
  listOfMeals.forEach((item) => {
    const meal = document.createElement('div');
    meal.classList.add('meal');
    meal.innerHTML = `
      <h2>${item.strMeal}</h2>
      <img src="${item.strMealThumb}" alt="${item.strMeal}">
      <p>${item.strInstructions}</p>
      <button type="button" class="comments-btn1">Comments</button>
      <button type="button" class="comments-btn2">reservations</button>
      <div class="like">
      <img src='${imgUrl}' class="icon" id='${item.idMeal}' />          
      <span class="qty">0</span> <span>Likes</span></p>
      </div>
    `;

    document.querySelector('.items-container').appendChild(meal);
  });
  addEventToLike();
  getLikes();
});
