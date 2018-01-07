import generatorNum from '../generatorNum';
import game from '..';

export default () => {
  const gameParam = () => {
    const operators = ['+', '-', '*'];
    const getRandomOperator = (oper) => {
      const operand = operators[Math.ceil(Math.random() * 2)];
      const random1 = generatorNum(1, 100);
      const random2 = generatorNum(1, 100);
      return `${random1} ${operand} ${random2}`;
    };

    const description = 'What is the result of the expression?';
    const question = getRandomOperator(operators);
    const sumExp = (exp) => {
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
    const correctAnswer = sumExp(question);
    return { description, question, correctAnswer };
  };
  return game(gameParam);
};
