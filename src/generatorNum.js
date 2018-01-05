const minimum = 1;
const maximum = 101;
const operators = ['+', '-', '*'];
export const generatorNum = (min = minimum, max = maximum) => {
  const random = Math.ceil(Math.random() * (max - min));
  return random;
};

export const getRandomOperator = (oper = operators, min = minimum, max = maximum) => {
  const operand = operators[Math.ceil(Math.random() * 2)];
  const random1 = Math.ceil(Math.random() * (max - min));
  const random2 = Math.ceil(Math.random() * (max - min));
  return `${random1} ${operand} ${random2}`;
};
