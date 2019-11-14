import randomizer from '../randomizer';
import { gameEngine, roundQuestionAnswer } from '../gameEngine';

const isEven = (number) => number % 2 === 0;
const minNumber = 1;
const maxNumber = 256;

const runEvenGame = () => {
  const gameRules = 'Answer "yes" if given number is even, otherwise answer "no".';
  const gameRound = () => {
    const question = randomizer(minNumber, maxNumber);
    const correctAnswer = isEven(question) ? 'yes' : 'no';
    return roundQuestionAnswer(question, correctAnswer);
  };

  gameEngine(gameRules, gameRound);
};

export default runEvenGame;
