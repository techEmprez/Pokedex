// Fetch MealDB API
const url = 'www.themealdb.com/api/json/v1/1/filter.php?c=Seafood';
const getMeals = async () => {
  const response = await fetch(url);
  const data = await response.json();
  return data;
};
export default getMeals;

// for (let i = 0; i < 20; i += 1) {
//   data.meals[i].idMeal = i;
//   const file = data.meals;
//   const mealsArray = file.filter((Objects) => Objects.idMeal <= 11);
//   let html = '';
//   mealsArray.forEach((meal) => {
//     const htmlSegment = `<div class="meal">
//                             <img src="${meal.strMealThumb}" >
//                             <h2>${meal.strMeal}</h2>
//                             <button>Comments</button>
//                             <button>Reservations</button>
//                             </div>`;

//     html += htmlSegment;
//     document.querySelector('#apiDataLoaded').innerHTML = html;
//   });
// }