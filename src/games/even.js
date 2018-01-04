import readlineSync from 'readline-sync';

export default () => {
  console.log('Welcome to the Brain Games!\nAnswer "yes" if number even otherwise answer "no".\n');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!\n`);
  const generatorOfNum = (min, max) => {
    const result = Math.ceil(Math.random() * (max + min));
    return result;
  };
  const maxQuestions = 3;
  for (let step = 1; step <= maxQuestions; step +=1) {
    const generator = generatorOfNum(0, 101);
    console.log(`Question: ${generator}`);
    const answer = readlineSync.question('Your answer: ');
    if (answer === 'yes' && generator % 2 === 0) {
      console.log('Correct!');
    }
    if (answer === 'no' && generator % 2 !== 0) {
      console.log('Correct!');
    }
    if (answer !== 'no' && generator % 2 !== 0) {
      console.log(`${answer} is wrong answer ;(.
         Correct answer was 'no'.\nLet's try again, ${userName}!`);
      break;
    }
    if (answer !== 'yes' && generator % 2 === 0) {
      console.log(`${answer} is wrong answer ;(.
         Correct answer was 'yes'.\nLet's try again, ${userName}!`);
      break;
    }
    step === 3 ? console.log(`Congratulations, ${userName}!`) : '';
  }
};
