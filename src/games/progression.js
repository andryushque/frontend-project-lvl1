import { getRandomNum } from '../utils';
import { gameEngine, roundQuestionAnswer } from '../gameEngine';

const minFirstMember = 1;
const maxFirstMember = 100;

const minDifference = 1;
const maxDifference = 10;

const minPosition = 1;
const maxPosition = 9;

const membersCount = 10;

const gameDescription = 'What number is missing in the progression?';
const makeRound = () => {
  const firstMember = getRandomNum(minFirstMember, maxFirstMember);
  const difference = getRandomNum(minDifference, maxDifference);
  const positionOfMissingNumber = getRandomNum(minPosition, maxPosition);

  let progression = '';
  for (let n = 0; n < membersCount; n += 1) {
    if (n === positionOfMissingNumber) {
      progression = `${progression} ..`;
    } else {
      progression = `${progression} ${firstMember + (n * difference)}`;
    }
  }

  const question = progression;
  const answer = firstMember + (positionOfMissingNumber * difference);
  const correctAnswer = String(answer);
  return roundQuestionAnswer(question, correctAnswer);
};

const runProgressionGame = () => gameEngine(gameDescription, makeRound);

export default runProgressionGame;
