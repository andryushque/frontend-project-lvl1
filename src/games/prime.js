import randomizer from '../randomizer';
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
const minNumber = 1;
const maxNumber = 256;

const runPrimeGame = () => {
  const gameRules = 'Answer "yes" if given number is prime, otherwise answer "no".';
  const gameRound = () => {
    const question = randomizer(minNumber, maxNumber);
    const correctAnswer = isPrime(question) ? 'yes' : 'no';

    return roundQuestionAnswer(question, correctAnswer);
  };

  gameEngine(gameRules, gameRound);
};

export default runPrimeGame;
