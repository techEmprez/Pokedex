import './style.css';
import './popUpStyle.css';
import getMealData from './modules/get.js';
import display, { getComment, post } from './modules/getcomapi.js';
getMealData().then((data) => {
  const listOfMeals = data.meals;
  listOfMeals.forEach((item) => {
    const meal = document.createElement('div');
    meal.classList.add('meal');
    meal.innerHTML = `
      <h2>${item.strMeal}</h2>
      <img src="${item.strMealThumb}" alt="${item.strMeal}">
      
      <button type="button" class="comments-btn1">Comments</button>
      <button type="button" class="reservations-btn">reservations</button>

    `;
    document.querySelector('.items-container').appendChild(meal);
  });
});

window.addEventListener('click', (e) => {
  if (!e.target.matches('comments-btn1')) return;
  if (e.target.parentElement.id === e.target.id) {
    const x = e.target.id;
    display(x);
    getComment(x);
  }
});
window.addEventListener('submit', (e) => {
  e.preventDefault();
  if (!e.target.matches('.form')) return;
  if (e.target.matches('.form')) {
    const name = e.target.querySelector('.name').value;
    const text = e.target.querySelector('.text').value;
    const id =
      e.target.previousElementSibling.previousElementSibling
        .previousElementSibling.id;
    const comment2 = {
      item_id: `${id}`,
      user: `${name}`,
      text: `${text}`,
    };
    e.target.reset();
    post(id, Comment);
    display(id);
  }
});
