import postLike from './postLikes.js';

const addEventToLike = () => {
  const getAllLike = document.querySelectorAll('.like .icon');
  getAllLike.forEach((item) => {
    item.addEventListener('click', (e) => {
      const displayLikes = e.target.nextElementSibling;
      displayLikes.innerText = Number(displayLikes.innerText) + 1;
      const itemId = e.target.parentElement.parentElement.id;
      postLike(itemId);
    });
  });
};

export default addEventToLike;