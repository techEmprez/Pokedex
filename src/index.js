import './style.css';
import getData from './modules/get.js';
// console.log(getData());
getData().then((data) => {
  const listOfMeals = data.meals;
  listOfMeals.forEach((item, index) => {
    const meal = document.createElement('div');
    meal.classList.add('meal');
    meal.innerHTML = `
      <h2>${item.strMeal}</h2>
      <img src="${item.strMealThumb}" alt="${item.strMeal}">
      <p>${item.strInstructions}</p>
      <button type="button" class="comments-btn1">Comments</button>
      <button type="button" class="comments-btn2">reservations</button>
    `;
    document.querySelector('.items-container').appendChild(meal);
  });
});
