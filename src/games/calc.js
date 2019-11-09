import readlineSync from 'readline-sync';

// игра #2 "Калькулятор"
const brainGamesCalc = () => {
  // приветствие
  console.log('Welcome to the Brain Games!');
  // правила игры
  const gameRules = 'What is the result of the expression?';
  console.log(gameRules);
  console.log();
  // ввод имени игрока
  const name = readlineSync.question('Please, enter your name here: ');
  console.log(`Hello, ${name}!!!`);
  console.log();

  // количество раундов игры
  const roundCount = 3;

  // логика самой игры
  for (let i = 0; i < roundCount; i += 1) {
    // верхняя и нижняя границы генератора случайных чисел
    const min = 1;
    const max = 20;
    // сам генератор - генерируем два числа
    const number1 = Math.floor(Math.random() * (max - min)) + min;
    const number2 = Math.floor(Math.random() * (max - min)) + min;

    // строка арифметических операторов
    const operationString = '+-*';

    // генератор случайного арифметического оператора
    const a = 0;
    const b = 2;
    // операция - случайный элемент строки
    const j = Math.floor(Math.random() * (b - a + 1)) + a;
    const operation = operationString[j];
    // вопрос, выводимый на экран
    const question = `${number1} ${operation} ${number2}`;
    // правильный ответ на вопрос
    const operationSelect = () => {
      if (operation === '+') {
        return number1 + number2;
      }
      if (operation === '-') {
        return number1 - number2;
      }
      return number1 * number2;
    };
    // переводим правильный ответ в строку, так как введенный ответ тоже строка
    const correctAnswer = String(operationSelect());

    // выводим вопрос
    console.log(`Question: ${question}`);
    // на экран выводится просьба ввести ответ
    const yourAnswer = readlineSync.question('Your answer is: ');
    // сравниваем введенный ответ с правильным
    if (yourAnswer === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${yourAnswer}' is wrong answer ;((. Correct answer was '${correctAnswer}' =)`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
  } // цикл for
  console.log(`Congratulations, ${name}!`);
}; // brainGamesCalc

export default brainGamesCalc;
