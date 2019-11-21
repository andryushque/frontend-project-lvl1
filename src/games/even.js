import { getRandomNum, getQuestionAnswer } from '../utils';
import runGame from '../gameEngine';

const isEven = (num) => num % 2 === 0;
const min = 1;
const max = 256;

const gameDescription = 'Answer "yes" if given number is even, otherwise answer "no".';
const makeRound = () => {
  const question = getRandomNum(min, max);
  const correctAnswer = isEven(question) ? 'yes' : 'no';
  return getQuestionAnswer(question, correctAnswer);
};

export default () => runGame(gameDescription, makeRound);
