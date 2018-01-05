import { getRandomOperator } from '../generatorNum';
import game from '..';

export default () => {
  const description = 'What is the result of the expression?';
  const correctAnswer = (exp) => {
    const newExp = exp.split(' ');
    const numA = newExp[0];
    const numB = newExp[2];
    const operand = newExp[1];
    if (operand === '+') {
      return numA + numB;
    }
    if (operand === '-') {
      return numA - numB;
    }
    return numA * numB;
  };
  return game(description, getRandomOperator, correctAnswer);
};
