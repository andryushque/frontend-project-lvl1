import { getRandomNum } from '../utils';
import { gameEngine, roundQuestionAnswer } from '../gameEngine';

const min = 2;
const max = 20;
const operations = '+-*';

const gameDescription = 'What is the result of the expression?';
const makeRound = () => {
  const number1 = getRandomNum(min, max);
  const number2 = getRandomNum(min, max);

  const index = getRandomNum(0, operations.length - 1);
  const operation = operations[index];
  const question = `${number1} ${operation} ${number2}`;

  const answer = () => {
    switch (operation) {
      case '+':
        return number1 + number2;
      case '-':
        return number1 - number2;
      case '*':
        return number1 * number2;
      default:
        return null;
    }
  };
  const correctAnswer = String(answer());
  return roundQuestionAnswer(question, correctAnswer);
};

const runCalcGame = () => gameEngine(gameDescription, makeRound);

export default runCalcGame;
