import readlineSync from 'readline-sync';

export default (description, generator, correctAnswer) => {
  console.log('Welcome to the Brain Games!');
  console.log(`${description}\n`);
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!\n`);
  const maxQuestions = 3;
  for (let step = 1; step <= maxQuestions; step +=1) {
    const question = generator();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    const trueAnswer = `${correctAnswer(question)}`;
    if (trueAnswer === userAnswer) {
      console.log('Correct!');
    }
    if (trueAnswer !== userAnswer) {
      console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${trueAnswer}.\nLet's try again, ${userName}!`);
      break;
    }
    step === 3 ? console.log(`Congratulations, ${userName}!`) : '';
  }
};
