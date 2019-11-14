import { cons, car, cdr } from '@hexlet/pairs';
import readlineSync from 'readline-sync';

const roundQuestionAnswer = (question, answer) => cons(question, answer);
const getQuestion = (round) => car(round);
const getAnswer = (round) => cdr(round);

const roundCount = 3;

const gameEngine = (gameRules, gameRound) => {
  console.log('Welcome to the Brain Games!');
  console.log(gameRules);
  console.log();

  const name = readlineSync.question('Please, enter your name here: ');
  console.log(`Hello, ${name}!!!`);
  console.log();

  for (let i = 0; i < roundCount; i += 1) {
    const singleRound = gameRound();
    const gameQuestion = getQuestion(singleRound);
    const correctAnswer = getAnswer(singleRound);

    console.log(`Question: ${gameQuestion}`);

    const yourAnswer = readlineSync.question('Your answer is: ');

    if (yourAnswer === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${yourAnswer}' is wrong answer ;((. Correct answer was '${correctAnswer}' =)`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};

export { gameEngine, roundQuestionAnswer };
