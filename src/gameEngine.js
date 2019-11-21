import readlineSync from 'readline-sync';
import { getQuestion, getAnswer } from './utils';

const roundsCount = 3;

const runGame = (gameDescription, makeRound) => {
  console.log('Welcome to the Brain Games!');
  console.log(gameDescription);
  console.log();

  const userName = readlineSync.question('Please, enter your name here: ');
  console.log(`Hello, ${userName}!!!`);
  console.log();

  for (let i = 0; i < roundsCount; i += 1) {
    const singleRound = makeRound();
    const gameQuestion = getQuestion(singleRound);
    const correctAnswer = getAnswer(singleRound);

    console.log(`Question: ${gameQuestion}`);

    const userAnswer = readlineSync.question('Your answer is: ');

    if (userAnswer === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;((. Correct answer was '${correctAnswer}' =)`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};

export default runGame;
