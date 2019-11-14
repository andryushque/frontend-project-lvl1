import randomizer from '../randomizer';
import { gameEngine, roundQuestionAnswer } from '../gameEngine';

const minNumber = 2;
const maxNumber = 20;

const runCalcGame = () => {
  const gameRules = 'What is the result of the expression?';
  const gameRound = () => {
    const number1 = randomizer(minNumber, maxNumber);
    const number2 = randomizer(minNumber, maxNumber);

    const operationString = '+-*';
    const j = randomizer(0, operationString.length - 1);
    const operation = operationString[j];
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

  gameEngine(gameRules, gameRound);
};

export default runCalcGame;
