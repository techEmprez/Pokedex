const counter = (counter, link) => {
  link.innerHTML = `Home(${counter})`;
  return counter;
};

export default counter;
