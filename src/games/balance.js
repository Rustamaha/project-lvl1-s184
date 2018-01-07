import generatorNum from '../generatorNum';
import game from '..';

export default () => {
  const description = 'Balance the given number.';
  const questionAnswer = () => {
    const givenNum = () => generatorNum(100, 10000);
    const notBalanceNum = givenNum();
    const question = `${notBalanceNum}`;

    const balanceNum = (num) => {
      const arrNum = String(num).split('').map(el => Number(el));
      const lengthNum = arrNum.length;
      const sumNum = arrNum.reduce((acc, el) => acc + parseInt(el, 10), 0);
      const numOfIndexes = Math.trunc(sumNum / lengthNum);
      const newNum = arrNum.fill(numOfIndexes);
      const restPoints = Math.floor(sumNum % lengthNum);
      if (restPoints === 0) {
        return newNum.join('');
      }
      const func = (partNum, restP) => {
        if (restP === 0) {
          return partNum;
        }
        const newElement = partNum[0] + 1;
        const fullNum = partNum.concat(newElement);
        return func(fullNum, restP - 1);
      };
      newNum.splice(-restPoints, restPoints);
      const result = func(newNum, restPoints);
      return result.join('');
    };

    const correctAnswer = balanceNum(notBalanceNum);
    return { question, correctAnswer };
  };
  return game(questionAnswer, description);
};
