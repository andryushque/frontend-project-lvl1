import { getRandomNum } from '../utils';
import { gameEngine, roundQuestionAnswer } from '../gameEngine';

const isPrime = (number) => {
  if (number <= 1) {
    return false;
  }
  for (let i = 2; i <= (number / 2); i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};
const min = 1;
const max = 256;

const gameDescription = 'Answer "yes" if given number is prime, otherwise answer "no".';
const makeRound = () => {
  const question = getRandomNum(min, max);
  const correctAnswer = isPrime(question) ? 'yes' : 'no';
  return roundQuestionAnswer(question, correctAnswer);
};

const runPrimeGame = () => gameEngine(gameDescription, makeRound);

export default runPrimeGame;
