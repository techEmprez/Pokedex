import './style.css';
import getData from './modules/get.js';
import Reservations from './modules/popupReservation.js';

// calling imported Reservation-class
const reservationBtn = new Reservations();
getData().then((data) => {
import './popUpStyle.css';
import getMealData from './modules/get.js';
import display, { getComment, post } from './modules/getcomapi.js';

getMealData().then((data) => {
  const listOfMeals = data.meals;
  listOfMeals.forEach((item, id) => {
    const meal = document.createElement('div');
    meal.classList.add('meal');
    meal.innerHTML = `
      <h2>${item.strMeal}</h2>
      <img src="${item.strMealThumb}" alt="${item.strMeal}">
      <p>${item.strInstructions}</p>
      <button type="button" class="comments-btn1">Comments</button>
      <button type="button" class="reservation-btn" data-name='${item.strMeal}'>Reservations</button>
    `;
    document.querySelector('.items-container').appendChild(meal);
    // Initiating reservation modal on button click button click
    reservationBtn.init();

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
