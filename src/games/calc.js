import generatorNum from '../generatorNum';
import game from '..';

export default () => {
  const description = 'What is the result of the expression?';
  const questionAnswer = () => {
    const operators = ['+', '-', '*'];
    const getRandomOperator = (oper) => {
      const operand = oper[generatorNum(0, oper.length - 1)];
      const random1 = generatorNum(1, 100);
      const random2 = generatorNum(1, 100);
      return `${random1} ${operand} ${random2}`;
    };

    const question = getRandomOperator(operators);
    const sumExp = (exp) => {
      const newExp = exp.split(' ');
      const numA = Number(newExp[0]);
      const numB = Number(newExp[2]);
      const operExp = newExp[1];
      if (operExp === '+') {
        return numA + numB;
      }
      if (operExp === '-') {
        return numA - numB;
      }
      return numA * numB;
    };
    const correctAnswer = sumExp(question);
    return { question, correctAnswer };
  };
  return game(questionAnswer, description);
};
