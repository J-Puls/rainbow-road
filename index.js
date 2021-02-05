const colors = require("colors");

const unimp = (string) => console.log(`${string}`.dim);
const err = (string) => console.error(`${string}`.red);
const info = (string) => console.info(`${string}`.cyan);
const succ = (string) => console.log(`${string}`.green);
const warn = (string) => console.log(`${string}`.yellow);
const gen = (string) => console.log(`${string}`);

const rr = { unimp, err, info, gen, succ, warn };

module.exports = rr;
