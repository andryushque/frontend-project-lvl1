const randomizer = (a = 1, b = 100) => Math.floor(Math.random() * (b - a + 1)) + a;

export default randomizer;
