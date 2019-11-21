import { getRandomNum, getQuestionAnswer } from '../utils';
import runGame from '../gameEngine';

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
  const correctAnswer = String(getGreatestCommonDivisor(number1, number2));
  return getQuestionAnswer(question, correctAnswer);
};

export default () => runGame(gameDescription, makeRound);
