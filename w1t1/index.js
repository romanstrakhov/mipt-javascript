'use strict';

var sum = require('./math').sum;

var a = sum(12, 33);
// 45

var b = sum(101, '17');
// 118

var c = sum('100a', '17');
// 118

console.log(a, b, c);