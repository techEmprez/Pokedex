// import getMeals from './mealsApi.js';

// const renderMeals = async () => {
//   const meals = await getMeals();
//   let html = '';
//   meals.forEach((meal) => {
//     const htmlSegment = `<div class="meal">
//                             <img src="${meal.strMealThumb}" >
//                             <h2>${meal.strMeal}</h2>
//                             <button>Comments</button>
//                             <button>Reservations</button>
//                         </div>`;

//     html += htmlSegment;
//   });

//   const container = document.querySelector('#apiDataLoaded');
//   container.innerHTML = html;
// };

// export default renderMeals;