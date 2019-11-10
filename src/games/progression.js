import { cons, car, cdr } from '@hexlet/pairs';
import brainGamesEngine from '../gameEngine';


// игра #4 "Арифметическая прогрессия"
// правила игры
const gameRules = 'What number is missing in the progression?';

// описание одного раунда игры
const gameRound = () => {
  // количество членов прогрессии
  const membersCount = 10;
  // случайный первый элемент прогрессии
  const minFirstMemb = 1;
  const maxFirstMemb = 100;
  const firstMember = Math.floor(Math.random() * (maxFirstMemb - minFirstMemb)) + minFirstMemb;

  // случайный шаг прогрессии
  const minDiff = 1;
  const maxDiff = 10;
  const diff = Math.floor(Math.random() * (maxDiff - minDiff)) + minDiff;

  // случайный номер пропущенного элемента
  const minNumber = 1;
  const maxNumber = 9;
  const number = Math.floor(Math.random() * (maxNumber - minNumber)) + minNumber;

  // генератор прогрессии
  let progression = '';
  for (let n = 0; n < membersCount; n += 1) {
    if (n === number) {
      progression += '.. '; // записываем две точки (рандомный пропущенный элемент)
    } else {
      progression += `${firstMember + (n * diff)} `; // по формуле n-го члена прогрессии
    }

    /*
    progression += (n === number) ? '.. ' : `${firstMember + (n * diff)} `; */
  }
  // вопрос, выводимый на экран
  const question = progression;
  // правильный ответ на вопрос
  const answer = firstMember + (number * diff); // по формуле n-го члена прогрессии;
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
