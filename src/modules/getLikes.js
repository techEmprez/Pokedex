const getLikes = async () => {
  const getApiLike = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/uvTXiMX6FVr6xHgADoVW/likes';
  const response = await fetch(getApiLike);
  const allLikes = await response.json();
  return allLikes;
};
export default getLikes;