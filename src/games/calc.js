import { getRandomNum, getQuestionAnswer } from '../utils';
import runGame from '../gameEngine';

const min = 2;
const max = 20;
const operations = '+-*';

const calculate = (number1, number2, operation) => {
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

const gameDescription = 'What is the result of the expression?';
const makeRound = () => {
  const number1 = getRandomNum(min, max);
  const number2 = getRandomNum(min, max);

  const operation = operations[getRandomNum(0, operations.length - 1)];
  const question = `${number1} ${operation} ${number2}`;

  const correctAnswer = String(calculate(number1, number2, operation));
  return getQuestionAnswer(question, correctAnswer);
};

export default () => runGame(gameDescription, makeRound);
