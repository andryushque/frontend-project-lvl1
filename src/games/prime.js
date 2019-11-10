import { cons, car, cdr } from '@hexlet/pairs';
import brainGamesEngine from '../gameEngine';


// игра #5 "Простое ли число?"
// правила игры
const gameRules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

// функция проверки числа
const isPrime = (number) => {
  if (number <= 1) {
    return false;
  }
  for (let i = 2; i <= (number / 2); i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

// описание одного раунда игры
const gameRound = () => {
  // верхняя и нижняя границы генератора случайных чисел
  const min = 1;
  const max = 100;
  // вопрос, выводимый на экран
  const question = Math.floor(Math.random() * (max - min)) + min;
  // правильный ответ на вопрос
  const correctAnswer = isPrime(question) ? 'yes' : 'no';
  // пара вопрос-правильный ответ
  return cons(question, correctAnswer);
};

// из каждого раунда получаем вопрос и правильный ответ на него
const gameQuestion = (singleRound) => car(singleRound);
const gameAnswer = (singleRound) => cdr(singleRound);

// экспорт по умолчанию (импорт в исполняемом файле игры)
export default () => brainGamesEngine(gameRules, gameRound, gameQuestion, gameAnswer);
