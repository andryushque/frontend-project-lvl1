import randomizer from '../randomizer';
import { gameEngine, roundQuestionAnswer } from '../gameEngine';

const greatestCommonDivisor = (a, b) => {
  if (b === 0) {
    return a;
  }
  return greatestCommonDivisor(b, a % b);
};

const minNumber = 1;
const maxNumber = 100;

const runGreatestCommonDivisorGame = () => {
  const gameRules = 'Find the greatest common divisor of given numbers.';
  const gameRound = () => {
    const number1 = randomizer(minNumber, maxNumber);
    const number2 = randomizer(minNumber, maxNumber);

    const question = `${number1} ${number2}`;
    const answer = greatestCommonDivisor(number1, number2);
    const correctAnswer = String(answer);
    return roundQuestionAnswer(question, correctAnswer);
  };

  gameEngine(gameRules, gameRound);
};

export default runGreatestCommonDivisorGame;
