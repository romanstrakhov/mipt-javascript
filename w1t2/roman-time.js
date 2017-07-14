'use strict';

/**
 * Переводит время в формате HH:MM в представление римскими числами
 *
 * @param {String} time Время в формате HH:MM (например, 09:05)
 * @returns {String} Время римскими цифрами (IX:V)
 */
function romanTime(time) {

try {
	var digits = time.split(':');
}
catch (e) {
	throw TypeError('Wrong type. Not s atring');	
}

if (digits.length != 2) throw TypeError('Wrong format. Use XX:YY');
if (Number.isNaN(digits[0])) throw TypeError('Wrong hours. Not a number');
if (Number.isNaN(digits[1])) throw TypeError('Wrong minutes. Not a number');
if (digits[0]>23) throw TypeError('Wrong hours. Use 0-23');
if (digits[1]>59) throw TypeError('Wrong minutes. Use 0-59');

return (toRoman(digits[0]) + ':' + toRoman(digits[1]));

}

// 29 of 32 tests passed.
// Failed tests: должен выбрасывать исключение TypeError для 09:0s,
// должен выбрасывать исключение TypeError для 1x:10,
// должен выбрасывать исключение TypeError для 12:00:


function toRoman(num) {

	var onesArray = ['','I','II','III','IV','V','VI','VII','VIII','IX'];
	var decArray = ['','X','XX','XXX','XL','L','LX','LXX','LXXX','XC'];
	var ones = onesArray[num % 10];
	var dec = decArray[parseInt(num % 100 / 10)];
	var res = dec + ones; 
	if (res == '') res = 'N';
	return (res);

}

module.exports = romanTime;
