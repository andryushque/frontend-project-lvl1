import { getRandomNum } from '../utils';
import { gameEngine, roundQuestionAnswer } from '../gameEngine';

const getGreatestCommonDivisor = (a, b) => {
  if (b === 0) {
    return a;
  }
  return getGreatestCommonDivisor(b, a % b);
};

const min = 1;
const max = 100;

const gameDescription = 'Find the greatest common divisor of given numbers.';
const makeRound = () => {
  const number1 = getRandomNum(min, max);
  const number2 = getRandomNum(min, max);

  const question = `${number1} ${number2}`;
  const answer = getGreatestCommonDivisor(number1, number2);
  const correctAnswer = String(answer);
  return roundQuestionAnswer(question, correctAnswer);
};

const runGreatestCommonDivisorGame = () => gameEngine(gameDescription, makeRound);

export default runGreatestCommonDivisorGame;
