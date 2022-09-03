const url = `https://www.themealdb.com/api/json/v1/1/search.php?f=f`;

const modal = document.querySelector('#popUp-container');
const overlay = document.querySelector('#overlay');
const involmentApi = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/HRxPpdN7MLinlCuupthb/comments?item_id=item1`;

const popUprr = [
  52802, 52815, 52835, 52896, 52903, 52906, 52915, 52918, 52919, 52957, 52996,
  53025, 53030, 53043, 53061, 53064,
];
export const getComment = async (id) => {
  const response = await fetch(
    `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/HRxPpdN7MLinlCuupthb/comments?item_id=${id}`
  );
  const data = await response.json();
  const arry = Array.from(data);
};
const container = modal.querySelector('.commentContainer');
const counter = modal.querySelector('.counter');
container.innerHTML = `(${popUprr.length})`;
counter.innerHTML = popUprr
  .map(
    (comment) =>
      `<p class="comments"> ${comment.date}    ${comment.user}:${comment.text}</p> `
  )
  .join('');

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
  getComment(id);
};
const display = async (id) => {
  const fetch = await fetch(
    `https://www.themealdb.com/api/json/v1/1/search.php?f=${popUprr[id]}`
  );
  const data = await fetch.json();
  modal.classList.add('open');
  modal.innerHTML = data.meals
    .map(
      (meals1) => `<div id="container">
    <button type='button' class='comments-btn2'><i class="fa-solid fa-x"></i></button>
<img class="img" scr="${meals1.strMealThumb}"  >
<h4 class="meal">${meals1.strMeal}</h4>
<p class="info">${item.strInstructions} </p>
<div id="${id}" class="count1"><h3> Comments <span class="counter"></span></h3> </div>
<div class="commentContainer"></div>
<h2 Class="h2-add">Add a comment</h2>
<form class="form">
  <input type="text" class="name" placeholder="Your Name" required />
    <textarea
      id="message"
      name="text"
      class="text"
      cols="30"
      rows="6"
      maxlength="100"
      placeholder="Your insights"
    ></textarea>
    <button type="submit"" class="comments-btn3">Comment</button></form>
    </div>`
    )
    .join('');
};
function closePopup() {
  modal.style.display = 'none';
  overlay.style.display = 'none';
  body.style.overflow = 'auto';
}

closeButton.addEventListener('click', closePopup);

export default display;
