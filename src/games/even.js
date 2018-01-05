import { generatorNum } from '../generatorNum';
import game from '..';

export default () => {
  const description = 'Answer "yes" if number even otherwise answer "no".';
  const correctAnswer = num => (num % 2 === 0 ? 'yes' : 'no');
  return game(description, generatorNum, correctAnswer);
};
