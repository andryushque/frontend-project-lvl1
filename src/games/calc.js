import { getRandomNum } from '../utils';
import { gameEngine, roundQuestionAnswer } from '../gameEngine';

const minRandomNum = 2;
const maxRandomNum = 20;
const operationSet = '+-*';

const gameDescription = 'What is the result of the expression?';
const makeRound = () => {
  const number1 = getRandomNum(minRandomNum, maxRandomNum);
  const number2 = getRandomNum(minRandomNum, maxRandomNum);

  const index = getRandomNum(0, operationSet.length - 1);
  const operation = operationSet[index];
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
