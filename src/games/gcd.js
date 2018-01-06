import { generatorNum } from '../generatorNum';
import game from '..';

export default () => {
  const description = 'Find the greatest common divisor of given numbers.';
  const question = () => {
    const numA = generatorNum();
    const numB = generatorNum();
    return `${numA} ${numB}`;
  };
  const correctAnswer = (exp) => {
    const [a, b] = exp.split(' ');
    const numA = parseInt(a, 10);
    const numB = parseInt(b, 10);
    if (numA === numB) {
      return numA;
    }
    if (numA > numB) {
      return correctAnswer(`${numA - numB} ${numB}`);
    }
    return correctAnswer(`${numA} ${numB - numA}`);
  };
  return game(description, question, correctAnswer);
};
