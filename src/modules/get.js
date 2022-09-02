const getData = async () => {
  let arr = [];
  const url = 'https://www.themealdb.com/api/json/v1/1/search.php?f=f';

  await fetch(url).then((response) => response.json()).then((data) => {
    arr = data;
  });
  return arr;
};

export default getData;
