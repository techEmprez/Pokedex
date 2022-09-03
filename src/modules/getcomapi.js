const modal = document.getElementById('popUp-container');
const mealHeading = document.getElementById('exampleModalLabel');
const mealDesc = document.getElementById('meal-desc');
const mealImg = document.getElementById('meal-img');
const comment5 = document.querySelector('.commentContainer');
const overlay = document.querySelector('#overlay');
let showComments;
const popUprr = [
  52802, 52815, 52835, 52896, 52903, 52906, 52915, 52918, 52919, 52957, 52996,
  53025, 53030, 53043, 53061, 53064,
];

export const getComment = async (i) => {
  const response = await fetch(
    `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/HRxPpdN7MLinlCuupthb/comments?item_id=${popUprr[i]}`
  );
  const data = await response.json();
  const arry = Array.from(data);
  await showComments(arry);
  console.log(arry);
};

export const commentsCounter = (data) => {
  let count = 0;
  if (data && data.length > 0) {
    count = data.length;
  }
  return count;
};

showComments = (data) => {
  const count = commentsCounter(data);
  if (data && data.length > 0) {
    comment5.innerHTML = '';
    data.forEach((item) => {
      const comment6 = document.createElement('li');
      comment6.classList.add('comment');
      comment6.innerText = `${item.creation_date}  ${item.username}: ${item.comment}`;
      comment5.append(comment6);
    });
  } else {
    const noComments = document.createElement('h3');
    noComments.innerText = 'Be the first to add a comment';
    comment5.append(noComments);
  }
};

export const post = async (i, comment) => {
  console.log(comment);
  await fetch(
    `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/HRxPpdN7MLinlCuupthb/comments `,
    {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(comment),
    }
  );
  getComment(i);
};

const display = async (i) => {
  const getPopup = await fetch(
    `https://www.themealdb.com/api/json/v1/1/search.php?f=f`
  );
  getPopup.json().then((data) => {
    modal.classList.add('open');
    data.meals
      .map((meals1) => {
        if (+meals1.idMeal === popUprr[i]) {
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
