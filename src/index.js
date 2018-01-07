import readlineSync from 'readline-sync';

export default (questionAnswer, description) => {
  console.log('Welcome to the Brain Games!');
  console.log(`${description}\n`);
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!\n`);
  const maxQuestions = 3;
  for (let step = 1; step <= maxQuestions; step +=1) {
    const { question, correctAnswer } = questionAnswer();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (`${correctAnswer}` === userAnswer) {
      console.log('Correct!');
    }
    if (`${correctAnswer}` !== userAnswer) {
      console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${correctAnswer}.\nLet's try again, ${userName}!`);
      break;
    }
    step === 3 ? console.log(`Congratulations, ${userName}!`) : '';
  }
};
