// генератор случайного числа в пределах заданных границ
const randomizer = (a, b) => Math.floor(Math.random() * (b - a + 1)) + a;

export default randomizer;
