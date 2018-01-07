import generatorNum from '../generatorNum';
import game from '..';

export default () => {
  const gameParam = () => {
    const description = 'Find the greatest common divisor of given numbers.';
    const genNum1 = generatorNum(1, 100);
    const genNum2 = generatorNum(1, 100);
    const question = `${genNum1} ${genNum2}`;
    const gcd = (num1, num2) => {
      while (num1 !== num2) {
        if (num1 > num2) {
          return gcd(num1 - num2, num2);
        }
        else if (num1 < num2) {
          return gcd(num1, num2 - num1);
        }
      }
      return num1;
    };
    const answer = gcd(genNum1, genNum2);
    const correctAnswer = `${answer}`;
    return { description, question, correctAnswer };
  };
  return game(gameParam);
};
