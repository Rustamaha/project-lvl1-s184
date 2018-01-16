import generatorNum from '../generatorNum';
import game from '..';

const prime = (num) => {
  if (num < 2) {
    return false;
  }
  let i = 2;
  while (i < num) {
    if (num % i === 0) {
      return false;
    }
    i += 1;
  }
  return true;
};

export default () => {
  const description = 'Is this number prime?';
  const questionAnswer = () => {
    const question = generatorNum(1, 100);

    const answer = prime(question);
    const correctAnswer = answer ? 'yes' : 'no';
    return { question, correctAnswer };
  };
  return game(questionAnswer, description);
};
