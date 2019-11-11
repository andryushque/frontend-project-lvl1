import { cons, car, cdr } from '@hexlet/pairs';
import randomizer from '../randomizer';
import brainGamesEngine from '../gameEngine';


// игра #1 "Проверка на четность"
// правила игры
const gameRules = "Answer 'yes' if the number is even, otherwise answer 'no'.";

// функция проверки четности числа
const isEven = (number) => number % 2 === 0;

// описание одного раунда игры
const gameRound = () => {
  // верхняя и нижняя границы генератора случайных чисел
  const min = 1;
  const max = 256;
  // вопрос, выводимый на экран
  const question = randomizer(min, max);
  // правильный ответ на вопрос
  const correctAnswer = isEven(question) ? 'yes' : 'no';
  // пара вопрос-правильный ответ
  return cons(question, correctAnswer);
};

// из каждого раунда получаем вопрос и правильный ответ на него
const gameQuestion = (singleRound) => car(singleRound);
const gameAnswer = (singleRound) => cdr(singleRound);

// экспорт по умолчанию (импорт в исполняемом файле игры)
export default () => brainGamesEngine(gameRules, gameRound, gameQuestion, gameAnswer);
