import { cons, car, cdr } from '@hexlet/pairs';

const getRandomNum = (a = 1, b = 100) => Math.floor(Math.random() * (b - a + 1)) + a;

const getQuestionAnswer = (question, answer) => cons(question, answer);
const getQuestion = (round) => car(round);
const getAnswer = (round) => cdr(round);
export {
  getRandomNum, getQuestionAnswer, getQuestion, getAnswer,
};
