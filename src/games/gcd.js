import { cons, car, cdr } from '@hexlet/pairs';
import randomizer from '../randomizer';
import brainGamesEngine from '../gameEngine';


// игра #3 "Наибольший общий делитель"
// правила игры
const gameRules = 'Find the greatest common divisor of given numbers.';

// описание одного раунда игры
const gameRound = () => {
  // верхняя и нижняя границы генератора случайных чисел
  const min = 1;
  const max = 100;
  // генерируем два случайных числа
  const number1 = randomizer(min, max);
  const number2 = randomizer(min, max);

  // вопрос, выводимый на экран
  const question = `${number1} ${number2}`;

  // функция вычисления НОД двух чисел (по алгоритму Евклида)
  const gcd = (a, b) => {
    if (b === 0) {
      return a;
    }
    return gcd(b, a % b);
  };
  // правильный ответ на вопрос
  const answer = gcd(number1, number2);
  // переводим правильный ответ в строку, так как введенный ответ тоже строка
  const correctAnswer = String(answer);

  // пара вопрос-правильный ответ
  return cons(question, correctAnswer);
};

// из каждого раунда получаем вопрос и правильный ответ на него
const gameQuestion = (singleRound) => car(singleRound);
const gameAnswer = (singleRound) => cdr(singleRound);

// экспорт по умолчанию (импорт в исполняемом файле игры)
export default () => brainGamesEngine(gameRules, gameRound, gameQuestion, gameAnswer);
