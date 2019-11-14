import randomizer from '../randomizer';
import { gameEngine, roundQuestionAnswer } from '../gameEngine';

const minFirstMember = 1;
const maxFirstMember = 100;

const minDifference = 1;
const maxDifference = 10;

const minPosition = 1;
const maxPosition = 9;

const membersCount = 10;

const runProgressionGame = () => {
  const gameRules = 'What number is missing in the progression?';
  const gameRound = () => {
    const firstMember = randomizer(minFirstMember, maxFirstMember);
    const difference = randomizer(minDifference, maxDifference);
    const positionOfMissingNumber = randomizer(minPosition, maxPosition);

    let progression = '';
    for (let n = 0; n < membersCount; n += 1) {
      if (n === positionOfMissingNumber) {
        progression += '.. ';
      } else {
        progression += `${firstMember + (n * difference)} `;
      }
    }

    const question = progression;
    const answer = firstMember + (positionOfMissingNumber * difference);
    const correctAnswer = String(answer);
    return roundQuestionAnswer(question, correctAnswer);
  };

  gameEngine(gameRules, gameRound);
};

export default runProgressionGame;
