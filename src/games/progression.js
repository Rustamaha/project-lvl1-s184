import generatorNum from '../generatorNum';
import game from '..';

export default () => {
  const description = 'What number is missing in this progression?';
  const gameParam = () => {
    const arrOfNum = generatorNum(2, 9);
    const firstNum = generatorNum(10, 90);
    const progressNum = [];
    const progression = (progressNumbers, num, progressNumber, indexes) => {
      if (indexes === 0) {
        return progressNumbers;
      }
      const progress = num + progressNumber;
      const arrOfProgress = progressNumbers.concat(progress);
      return progression(arrOfProgress, progress, progressNumber, indexes - 1);
    };
    const ourProgression = progression(progressNum, firstNum, arrOfNum, 10);
    const correctAnswer = ourProgression.splice(arrOfNum, 1, '..');
    const question = ourProgression.join(' ');
    return { question, correctAnswer };
  };
  return game(gameParam, description);
};
