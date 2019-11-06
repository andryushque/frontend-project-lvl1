// импорт readlineSync
import readlineSync from 'readline-sync';

// функция ввода имени
const brainGames = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('Please, enter your name here: ');
  console.log(`Hello, ${name}!!!`);
};

export default brainGames;
