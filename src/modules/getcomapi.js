const modal = document.getElementById('popUp-container');
const mealHeading = document.getElementById('exampleModalLabel');
const mealDesc = document.getElementById('meal-desc');
const mealImg = document.getElementById('meal-img');

const overlay = document.querySelector('#overlay');

const popUprr = [
  52802, 52815, 52835, 52896, 52903, 52906, 52915, 52918, 52919, 52957, 52996,
  53025, 53030, 53043, 53061, 53064,
];

export const getComment = async (id) => {
  const response = await fetch(
    `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/HRxPpdN7MLinlCuupthb/comments?item_id=${popUprr[id]}`
  );
  const data = await response.json();
  const arry = Array.from(data);
};

export const post = async (id, comment) => {
  await fetch(
    `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/HRxPpdN7MLinlCuupthb/comments`,
    {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(comment),
    }
  );
};

const display = async (id) => {
  const getPopup = await fetch(
    `https://www.themealdb.com/api/json/v1/1/search.php?f=f`
  );
  getPopup.json().then((data) => {
    modal.classList.add('open');
    data.meals
      .map((meals1) => {
        if (+meals1.idMeal === popUprr[id]) {
          console.log(meals1);
          mealHeading.innerHTML = `${meals1.strMeal}`;
          mealDesc.innerHTML = `${meals1.strInstructions}`;
          mealImg.src = `${meals1.strMealThumb}`;
        }
      })
      .join('');
  });
};

export default display;
