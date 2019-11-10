import readlineSync from 'readline-sync';

// количество раундов игры
const roundCount = 3;

// движок для игр
const brainGamesEngine = (gameRules, gameRound, gameQuestion, gameAnswer) => {
  // приветствие!
  console.log('Welcome to the Brain Games!');
  // правила игры (описаны в файле игры)
  console.log(gameRules);
  console.log();
  // ввод имени игрока
  const name = readlineSync.question('Please, enter your name here: ');
  console.log(`Hello, ${name}!!!`);
  console.log();

  // сама игра
  for (let i = 0; i < roundCount; i += 1) {
    // gameRound - раунд игры (описан в файле игры)
    const singleRound = gameRound();

    // gameQuestion - вопрос раунда (описан в файле игры)
    console.log(`Question: ${gameQuestion(singleRound)}`);
    // gameAnswer - правильный ответ на вопрос раунда (описан в файле игры)
    const yourAnswer = readlineSync.question('Your answer is: ');
    // сравниваем введенный ответ с правильным
    if (yourAnswer === gameAnswer(singleRound)) {
      console.log('Correct!');
    } else {
      console.log(`'${yourAnswer}' is wrong answer ;((. Correct answer was '${gameAnswer(singleRound)}' =)`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
  } // }>> конец цикла for
  console.log(`Congratulations, ${name}!`);
}; // }>> конец функции brainGamesEngine

// экспорт по умолчанию (импорт - в модуле с конкретной игрой)
export default brainGamesEngine;
