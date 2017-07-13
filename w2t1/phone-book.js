'use strict';

/**
 * Телефонная книга
 */
var phoneBook = [];
var i = 0;

/**
 * Добавляет записи
 * @param {String} phone
 * @param {String} name
 * @param {String} email
 */
exports.add = function (phone, name, email) {

	// i++
	// console.log (i);
	// console.log (phone, name, email);	

	if (!isCorrectRecord(phone, name, email)) {
		return false;
	}
		
	var record = {
		phone: phone, 
		name: name,
		email: email
		}

	var a = phoneBook.length;
	if (phoneBook.push(record) - a != 1) return false;

	// console.log(a, b);
	// console.log(phoneBook);

	return true;

};

/**
 * Обновляет записи
 * @param {String} phone
 * @param {String} name
 * @param {String} email
 */
exports.update = function (phone, name, email) {
	
	var record = {
		phone: phone, 
		name: name,
		email: email
		}
	
	
	
};

/**
 * Находит записи по запросу
 * @param {String} query
 */
exports.find = function (query) {

};


function isPhoneInside(arr, index) {
	return this == arr.phone;
}


function isCorrectRecord(phone, name, email) {
	
	if (!name || name === '') {
	// console.log ('>>> empty name');
	return false;
	}

	if (!phone.match(/\d{10}/i)) {
	// console.log ('>>> wrong phone: ' + phone);
	return false;	
	} 

	if (phoneBook.some(isPhoneInside, phone)) {
	// if (phoneBook.some(elem => elem.phone == phone)) {
	// console.log ('>>> duplicate phone: ' + phone);
	return false;	
	} 

	return true;	

}


