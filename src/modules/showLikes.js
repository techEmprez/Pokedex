import getLikes from './getLikes.js';
import postLike from './postLikes.js';

const addEventToLike = () => {
  const getAllLike = document.querySelectorAll('.like .icon');
  getAllLike.forEach((item) => {
    item.addEventListener('click', function (e) {
      // const stop = this.dataset.id;
      // const displayLikes = e.target.nextElementSibling;
      // // displayLikes.innerHTML = Number();
      // console.log('display ', displayLikes.innerHtml);
      // // this.style.pointerEvents = 'none';
      // // setTimeout(() => {
      // //   document.querySelector(`[data-id="${stop}"]`).style.pointerEvents = 'initial';
      // // }, 400);
      // postLike(this.dataset.id);
      console.log('allLikes', gettingLikesFromApi("52802"));
    });
  });
};

const gettingLikesFromApi = (idMeal) => {
  getLikes().then(res => {
    res.forEach(idData => {
      if (idData.item_id === idMeal) {
         return idData.likes
       }
     })
   })

}

export default addEventToLike;