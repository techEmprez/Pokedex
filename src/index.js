import './style.css';
// import getMeals from './modules/mealsApi.js';
import mealsImported from './modules/temp.js';

const dataLoaded = document.querySelector('#apiDataLoaded');

// const meals = await getMeals();
// console.log(meals);
mealsImported.forEach((meal) => {
  dataLoaded.innerHTML += `<div class="meal">
                              <img src="${meal.strMealThumb}" >
                              <h2>${meal.strMeal}</h2>
                              <button>Comments</button>
                              <button>Reservations</button>
                              </div>`;
});

// renderMeals();

// displayCards();

// const renderMeals = async () => {
//   const meals = await getMeals();
//   let loadDom = '';
//   meals.forEach((meal) => {
//     const htmlSegment = `<div class="meal">
//                             <img src="${meal.strMealThumb}" >
//                             <h2>${meal.strMeal}</h2>
//                             <button>Comments</button>
//                             <button>Reservations</button>
//                         </div>`;

//     loadDom += htmlSegment;
//     document.querySelector('#apiDataLoaded').innerHTML = loadDom;
//   });