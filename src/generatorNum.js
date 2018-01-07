export default (min, max) => {
  const random = Math.floor(min + (Math.random() * ((max + 1) - min)));
  return random;
};
