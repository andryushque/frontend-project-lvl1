import { getRandomNum } from '../utils';
import { gameEngine, roundQuestionAnswer } from '../gameEngine';

const isEven = (number) => number % 2 === 0;
const minRandomNum = 1;
const maxRandomNum = 256;

const gameDescription = 'Answer "yes" if given number is even, otherwise answer "no".';
const makeRound = () => {
  const question = getRandomNum(minRandomNum, maxRandomNum);
  const correctAnswer = isEven(question) ? 'yes' : 'no';
  return roundQuestionAnswer(question, correctAnswer);
};

const runEvenGame = () => gameEngine(gameDescription, makeRound);

export default runEvenGame;
