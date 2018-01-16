import generatorNum from '../generatorNum';
import game from '..';

const balanceNum = (num) => {
  const arrNum = String(num).split('').map(el => Number(el));
  const lengthNum = arrNum.length;
  const sumNum = arrNum.reduce((acc, el) => acc + parseInt(el, 10), 0);
  const numOfIndices = Math.trunc(sumNum / lengthNum);
  const numWithTheSameNumbers = arrNum.fill(numOfIndices);
  const restPoints = Math.floor(sumNum % lengthNum);
  if (restPoints === 0) {
    return numWithTheSameNumbers.join('');
  }

  const makeFromNumBalanceNum = (partOfFullBalanceNum, indices) => {
    if (indices === 0) {
      return partOfFullBalanceNum;
    }
    const newElement = partOfFullBalanceNum[0] + 1;
    const fullBalanceNum = partOfFullBalanceNum.concat(newElement);
    return makeFromNumBalanceNum(fullBalanceNum, indices - 1);
  };

  numWithTheSameNumbers.splice(-restPoints, restPoints);
  const result = makeFromNumBalanceNum(numWithTheSameNumbers, restPoints);
  return result.join('');
};

export default () => {
  const description = 'Balance the given number.';
  const questionAnswer = () => {
    const givenNum = () => generatorNum(100, 10000);

    const notBalanceNum = givenNum();

    const question = `${notBalanceNum}`;

    const correctAnswer = balanceNum(notBalanceNum);
    return { question, correctAnswer };
  };
  return game(questionAnswer, description);
};
