const getLikes = async () => {
  const getApiLike = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/DtThCBKG6zTr4DyB4qtW/likes';
  const response = await fetch(getApiLike);
  const allLikes = await response.json();
  return allLikes;
};
export default getLikes;