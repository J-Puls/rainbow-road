const colors = require("colors");

const err = (string) => console.error(`[ error ] ${string}`.red);
const gen = (string) => console.log(`[ general ] ${string}`);
const info = (string) => console.info(`[ info ] ${string}`.cyan);
const succ = (string) => console.log(`[ success ] ${string}`.green);
const unimp = (string) => console.log(`[ unimportant ] ${string}`.dim);
const warn = (string) => console.log(`[ warning ] ${string}`.yellow);

const rr = { unimp, err, info, gen, succ, warn };

module.exports = rr;
