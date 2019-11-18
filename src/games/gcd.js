import { getRandomNum } from '../utils';
import { gameEngine, roundQuestionAnswer } from '../gameEngine';

const greatestCommonDivisor = (a, b) => {
  if (b === 0) {
    return a;
  }
  return greatestCommonDivisor(b, a % b);
};

const minRandomNum = 1;
const maxRandomNum = 100;

const gameDescription = 'Find the greatest common divisor of given numbers.';
const makeRound = () => {
  const number1 = getRandomNum(minRandomNum, maxRandomNum);
  const number2 = getRandomNum(minRandomNum, maxRandomNum);

  const question = `${number1} ${number2}`;
  const answer = greatestCommonDivisor(number1, number2);
  const correctAnswer = String(answer);
  return roundQuestionAnswer(question, correctAnswer);
};

const runGreatestCommonDivisorGame = () => gameEngine(gameDescription, makeRound);

export default runGreatestCommonDivisorGame;
