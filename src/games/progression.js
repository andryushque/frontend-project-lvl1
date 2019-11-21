import { getRandomNum, getQuestionAnswer } from '../utils';
import runGame from '../gameEngine';

const minFirstMember = 1;
const maxFirstMember = 100;

const minDifference = 1;
const maxDifference = 10;

const progressionLength = 10;
const minPosition = 0;
const maxPosition = progressionLength - 1;

const gameDescription = 'What number is missing in the progression?';
const makeRound = () => {
  const firstMember = getRandomNum(minFirstMember, maxFirstMember);
  const difference = getRandomNum(minDifference, maxDifference);
  const missingMemberPosition = getRandomNum(minPosition, maxPosition);

  let question = '';
  for (let n = 0; n < progressionLength; n += 1) {
    if (n === missingMemberPosition) {
      question = `${question} ..`;
    } else {
      question = `${question} ${firstMember + (n * difference)}`;
    }
  }

  const correctAnswer = String(firstMember + (missingMemberPosition * difference));
  return getQuestionAnswer(question.trim(), correctAnswer);
};

export default () => runGame(gameDescription, makeRound);
