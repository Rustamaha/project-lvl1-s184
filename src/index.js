import readlineSync from 'readline-sync';

const stepOfThisGame = 3;

export default (questionAnswer, description) => {
  console.log('Welcome to the Brain Games!');
  console.log(`${description}\n`);

  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!\n`);

  const iteration = (count = stepOfThisGame) => {
    const { question, correctAnswer } = questionAnswer();
    const congratulation = `Congratulations, ${userName}!`;
    if (count === 0) {
      return console.log(`${congratulation}`);
    }
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (`${correctAnswer}` === userAnswer) {
      console.log('Correct!');
      return iteration(count - 1);
    }
    return console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${correctAnswer}.\nLet's try again, ${userName}!`);
  };

  iteration();
};
