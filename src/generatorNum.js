export default (min, max) => {
  const random = Math.ceil(min + (Math.random() * ((max + 1) - min)));
  return random;
};
