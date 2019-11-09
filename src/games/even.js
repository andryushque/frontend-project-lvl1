import readlineSync from 'readline-sync';

// игра #1 "Проверка на четность"
const brainGamesEven = () => {
  // приветствие
  console.log('Welcome to the Brain Games!');
  // правила игры
  const gameRules = "Answer 'yes' if the number is even, otherwise answer 'no'.";
  console.log(gameRules);
  console.log();
  // ввод имени игрока
  const name = readlineSync.question('Please, enter your name here: ');
  console.log(`Hello, ${name}!!!`);
  console.log();
    
  // количество раундов игры
  const roundCount = 3;
    
  // функция проверки четности числа
  const isEven = (number) => number % 2 === 0;

  // логика самой игры
  for (let i = 0; i < roundCount; i += 1) {
    // верхняя и нижняя границы генератора случайных чисел
    const min = 1;
    const max = 99;
    // вопрос, выводимый на экран
    const question = Math.floor(Math.random() * (max - min)) + min;
    // правильный ответ на вопрос
    const correctAnswer = isEven(question) ? 'yes' : 'no';

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
}; // brainGamesEven

export default brainGamesEven;
