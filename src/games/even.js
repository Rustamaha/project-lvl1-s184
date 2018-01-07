import generatorNum from '../generatorNum';
import game from '..';

export default () => {
  const description = 'Answer "yes" if number even otherwise answer "no".';
  const questionAnswer = () => {
    const question = generatorNum(1, 100);
    const correctAnswer = question % 2 === 0 ? 'yes' : 'no';
    return { question, correctAnswer };
  };
  return game(questionAnswer, description);
};
