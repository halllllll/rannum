#!/usr/bin/env node

const commander = require('commander');
const _ = require("lodash");

commander
  .option('-l, --lower <number>', 'lower num.', parseInt)
  .option('-u, --upper <number>', 'upper num.', parseInt)
  .option('-a, --amount <number>', 'size of choice.', parseInt)
  .option('--shuffle', 'shuffle result.')
  .option('--separator <string>', 'separator charctor for result.')
  .option('--exclude <string>', 'exclude num (should be put quote around).', (x) => {
    if (x !== undefined) {
      x = x.trim().split(" ");
      if (x.every((xi) => {return !isNaN(xi) && typeof xi !== "boolean" && xi !== undefined && xi%1 === 0})) {
        return x.map(xi => parseInt(xi));
      } else {
        // ダメなやつ含んでてもエラーは出さない
        return [];
      }
    } else {
      return [];
    }
  })
  .parse(process.argv);


// defaults
if (commander.lower === undefined) commander.lower = 1;
if (commander.upper === undefined) commander.upper = 6;
if (commander.separator === undefined) commander.separator = " ";
if (commander.lower > commander.upper) {
  console.error(`>>>>>>>>>> lower number must be lower than upper, and vice versa. <<<<<<<<<<`);
  process.exit(1);
}
if (commander.amount === undefined) {
  commander.amount = commander.upper - commander.lower + 1;
} else {
  commander.amount = Math.min(commander.upper - commander.lower + 1, commander.amount);
}

// processing 
const dif = commander.upper - commander.lower + 1;
let range = Array.from(Array(dif), (v, k) => k + commander.lower);
if (commander.exclude !== undefined) range = _.without(range, ...commander.exclude);
// ほんとは先にピックしたほうがシャッフルが軽くなりそうなんだけどなー
if (range.length > 0 && commander.shuffle !== undefined) range = range.map((a) => [Math.random(), a]).sort((a, b) => a[0] - b[0]).map((a) => a[1]);
range = _.take(range, commander.amount);
console.log(range.map((a) => a.toString()).join(commander.separator));