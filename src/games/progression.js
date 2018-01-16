import generatorNum from '../generatorNum';
import game from '..';

const progression = (progressNumbers, num, progressNumber, indices) => {
  if (indices === 0) {
    return progressNumbers;
  }
  const progress = num + progressNumber;
  const arrOfProgress = progressNumbers.concat(progress);
  return progression(arrOfProgress, progress, progressNumber, indices - 1);
};

export default () => {
  const description = 'What number is missing in this progression?';
  const questionAnswer = () => {
    const permanentNum = generatorNum(2, 9);
    const closedNum = generatorNum(2, 9);
    const firstNum = generatorNum(10, 90);
    const progressNum = [];

    const ourProgression = progression(progressNum, firstNum, permanentNum, 10);
    const correctAnswer = ourProgression.splice(closedNum, 1, '..');
    const question = ourProgression.join(' ');
    return { question, correctAnswer };
  };
  return game(questionAnswer, description);
};
