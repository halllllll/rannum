rannum
====
When you have a hard time, when you are sad, when you are depressed, when you are not motivated, or when you frequently come to life, calm down and generate random numbers. Disordered minds are disordered number. troubled numbers and sinister hearts. Filter the numbers you don't want to see!

つらい時や悲しい時、落ちこんだ時ややる気が出ない時、人生にたびたび訪れるそんな局面で、落ち着いて乱数を生成しよう。心の乱れは数の乱れ。乱れる数とそぞろな心。会いたくない数はフィルタリングしちゃえ！

## Description
Randum number ( *乱数 Ran-suu* in Japaneses) list generator. Extracts and presents an arbitrary number of numbers from a given range of integers.

[![Image from Gyazo](https://i.gyazo.com/575113de9068e84129c9e8318e6fd02b.gif)](https://gyazo.com/575113de9068e84129c9e8318e6fd02b)
## Usage
standard
```
rannum
```

Most parameters have an initial value. By default, you can enjoy dice 🎲. Wow! Happy! 

[![Image from Gyazo](https://i.gyazo.com/6a9961968ae2082594e32832a77313fd.gif)](https://gyazo.com/6a9961968ae2082594e32832a77313fd)

You don't have to spend a sleepless night if you want a dice with minus 5 to plus 7 and four facing up at the same time. Here's the option to do that.

```
rannum -l -5 -u 7 --amount 4 --shuffle
```

We all have numbers that remind us of our ex-boyfriend's or our lousy boss. Avoiding numbers you don't want to see is the easy way to live in this modern society. Not being conscious of statistics will lead to gaining a grip on people's minds. Enjoy!
```
$ rannum -l 18 -u 40 --exclude "14 16 20 22 25 28 30 34 36 37 38 39 42 50"

18 19 21 23 24 26 27 29 31 32 33 35 40
```

For other special options, like `--separator`, to see help option by command of `-h` or `--help`.
## Install
this is `npm` package.
[rannum](https://www.npmjs.com/package/rannum)
```
npm i rannum
```
BOOOM! 4 994 84 72 7 37 2 898 55 300 1 99  87 49220 0 683 17....

## Licence

[MIT](./LICENSE.txt)
