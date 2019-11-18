import readlineSync from 'readline-sync';
import { roundQuestionAnswer, getQuestion, getAnswer } from './utils';

const roundCount = 3;

const gameEngine = (gameDescription, makeRound) => {
  console.log('Welcome to the Brain Games!');
  console.log(gameDescription);
  console.log();

  const name = readlineSync.question('Please, enter your name here: ');
  console.log(`Hello, ${name}!!!`);
  console.log();

  for (let i = 0; i < roundCount; i += 1) {
    const singleRound = makeRound();
    const gameQuestion = getQuestion(singleRound);
    const correctAnswer = getAnswer(singleRound);

    console.log(`Question: ${gameQuestion}`);

    const userAnswer = readlineSync.question('Your answer is: ');

    if (userAnswer === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;((. Correct answer was '${correctAnswer}' =)`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};

export { gameEngine, roundQuestionAnswer };
