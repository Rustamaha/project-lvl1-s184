import generatorNum from '../generatorNum';
import game from '..';

export default () => {
  const gameParam = () => {
    const description = 'Answer "yes" if number even otherwise answer "no".';
    const question = generatorNum(1, 100);
    const correctAnswer = question % 2 === 0 ? 'yes' : 'no';
    return { description, question, correctAnswer };
  };
  return game(gameParam);
};
