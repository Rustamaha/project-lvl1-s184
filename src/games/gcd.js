import generatorNum from '../generatorNum';
import game from '..';

const gcd = (num1, num2) => {
  if (num1 === num2) {
    return num1;
  }
  if (num1 > num2) {
    return gcd(num1 - num2, num2);
  }
  return gcd(num1, num2 - num1);
};

export default () => {
  const description = 'Find the greatest common divisor of given numbers.';
  const questionAnswer = () => {
    const genNum1 = generatorNum(1, 100);
    const genNum2 = generatorNum(1, 100);
    const question = `${genNum1} ${genNum2}`;
    const answer = gcd(genNum1, genNum2);

    const correctAnswer = `${answer}`;
    return { question, correctAnswer };
  };
  return game(questionAnswer, description);
};
