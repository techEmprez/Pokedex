import './style.css';
import getData from './modules/get.js';
import getLikes from './modules/getLikes.js';
import imgUrl from './asset/like-svgrepo-com.svg';
import addEventToLike from './modules/showLikes.js';
import './popUpStyle.css';
import getMealData from './modules/get.js';
import display, { getComment, post } from './modules/getcomapi.js';

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
getMealData().then((data) => {
  const listOfMeals = data.meals;
  listOfMeals.forEach((item, id) => {
    const meal = document.createElement('div');
    meal.classList.add('meal');
    meal.innerHTML = `
      <h2>${item.strMeal}</h2>
      <img src="${item.strMealThumb}" alt="${item.strMeal}">

      <button type="button" class="comments-btn1" id="comment-btn-${id}" data-bs-toggle="modal" data-bs-target="#exampleModal">Comments</button>
      <button type="button" class="reservations-btn">reservations</button>

    `;
    document.querySelector('.items-container').appendChild(meal);
    const commentBtns = document.querySelectorAll('.comments-btn1');
    commentBtns.forEach((item) => {
      item.addEventListener('click', (e) => {
        const commentId = +e.target.id.split('-')[2];
        if (commentId === id) {
          display(commentId);
          getComment(commentId);
        }
      });
    });
  });
};

window.addEventListener('load', () => {
  displayMeals();
});

window.addEventListener('submit', (e) => {
  e.preventDefault();
  if (!e.target.matches('.form')) return;
  if (e.target.matches('.form')) {
    const name = e.target.querySelector('.name').value;
    const text = e.target.querySelector('.text').value;
    const i =
      e.target.previousElementSibling.previousElementSibling
        .previousElementSibling.id;

    const comment = {
      item_id: ` ${i}`,
      username: `${name}`,
      comment: `${text}`,
    };
    e.target.reset();
    post(i, comment);
    display(i);
  }
});
