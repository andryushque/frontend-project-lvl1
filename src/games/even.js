import readlineSync from 'readline-sync';

// игра "Проверка на четность"
const brainGamesEven = () => {
  // приветствие и ввод имени игрока
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('Please, enter your name here: ');
  console.log(`Hello, ${name}!!!`);
  // правила игры
  const gameRules = "Answer 'yes' if the number is even, otherwise answer 'no'.";
  console.log(gameRules);
  // функция проверки четности числа
  const isEven = (number) => number % 2 === 0;
  // количество раундов игры
  const roundCount = 3;
  // логика самой игры
  for (let i = 0; i < roundCount; i += 1) {
    // верхняя и нижняя границы генератора случайных чисел
    const min = 1;
    const max = 99;
    // сам генератор
    const question = Math.floor(Math.random() * (max - min)) + min;
    // выводим вопрос - четно ли выведенное на экран случайное число?
    console.log(`Question - is this number even? >>> ${question}`);
    // на экран выводится просьба ответить - либо да, либо нет
    const yourAnswer = readlineSync.question('And your answer is (yes/no): ');
    // правильный ответ на вопрос
    const correctAnswer = isEven(question) ? 'yes' : 'no';
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
}; // brainGamesEven

export default brainGamesEven;
