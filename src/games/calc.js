import { cons, car, cdr } from '@hexlet/pairs';
import brainGamesEngine from '../gameEngine';


// игра #2 "Калькулятор"
// правила игры
const gameRules = 'What is the result of the expression?';

// описание одного раунда игры
const gameRound = () => {
  // верхняя и нижняя границы генератора случайных чисел
  const min = 2;
  const max = 20;
  // сам генератор - генерируем два числа
  const number1 = Math.floor(Math.random() * (max - min)) + min;
  const number2 = Math.floor(Math.random() * (max - min)) + min;

  // строка арифметических операторов
  const operationString = '+-*';

  // генератор случайного арифметического оператора
  // верхняя и нижняя границы генератора случайных чисел
  // соответствуют первому и последнему индексу строки
  const a = 0;
  const b = 2;
  // операция - случайный элемент строки
  const j = Math.floor(Math.random() * (b - a + 1)) + a;
  const operation = operationString[j];
  // вопрос, выводимый на экран
  const question = `${number1} ${operation} ${number2}`;
  // правильный ответ на вопрос
  const answer = () => {
    if (operation === '+') {
      return number1 + number2;
    }
    if (operation === '-') {
      return number1 - number2;
    }
    return number1 * number2;
  };
  // переводим правильный ответ в строку, так как введенный ответ тоже строка
  const correctAnswer = String(answer());
  // пара вопрос-правильный ответ
  return cons(question, correctAnswer);
};

// из каждого раунда получаем вопрос и правильный ответ на него
const gameQuestion = (singleRound) => car(singleRound);
const gameAnswer = (singleRound) => cdr(singleRound);

// экспорт по умолчанию (импорт в исполняемом файле игры)
export default () => brainGamesEngine(gameRules, gameRound, gameQuestion, gameAnswer);
