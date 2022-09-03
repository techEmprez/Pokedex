import './style.css';
import counter from './modules/counter.js';
import getData from './modules/get.js';
import Reservations from './modules/popupReservation.js';

// calling imported Reservation-class
const recipeCount = document.querySelector('.item-count');
const reservationBtn = new Reservations();
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
      <button type="button" class="reservation-btn" data-name='${item.strMeal}'>Reservations</button>
    `;
    document.querySelector('.items-container').appendChild(meal);
    // Initiating reservation modal on button click button click
    counter(newArray.length, recipeCount);
    reservationBtn.init();
  });
});
