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

	if (!isCorrectUpdate(phone, name, email)) {
		// console.log('incorrect');
		return false;
	}
	
	var record = {
 		phone: phone, 
		name: name,
		email: email
		}

	var i = phoneBook.findIndex (function(element,index,array) {
		return element.phone === this
	}, record.phone);


	if (i<0) {
		return false;
	}

	// console.log(i);
	// console.log(record);
	// console.log('before:');
	// console.log(phoneBook);

	phoneBook.splice(i, 1, record);

	// console.log('after:');
	// console.log(phoneBook);
	

	return true;
	
	
};

/**
 * Находит записи по запросу
 * @param {String} query
 */
exports.find = function (query) {

	// empty query results false
	if (!query || query.trim() === '') return undefined;
	
	if (query === '*') {
		var	arFiltered = phoneBook;
	}
	else {
		var arFiltered = phoneBook.filter(isAnyField, query);	
	}
	
	return arFiltered.sort(function(a, b) {
		if (a.name > b.name) {
			return 1;
		}
		if (a.name < b.name) {
			return -1;
		}
		return 0;
	}).map(function(e, i, a) {
		
		var arResult = [];
		if (e.name) {
			arResult.push(e.name);
		}
		if (e.phone) {
			arResult.push(e.phone);
		}
		if (e.email) {
			arResult.push(e.email);
		}
		return arResult.join(', ');

	});


};


function isPhoneInside(arr, index) {
	return this == arr.phone;
}

function isCorrectRecord(phone, name, email) {

	if (!isCorrectUpdate(phone, name, email)) {
		return false;
	}
	if (phoneBook.some(isPhoneInside, phone)) {
		// if (phoneBook.some(elem => elem.phone == phone)) {
		// console.log ('>>> duplicate phone: ' + phone);
		return false;	
	} 

	return true;	
}


function isCorrectUpdate(phone, name, email) {
	
	var rxEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i;

	if (!name || name.trim() === '') {
		// console.log ('>>> empty name');
		return false;
	}
	if (!phone.match(/\d{10}/i)) {
		// console.log ('>>> wrong phone: ' + phone);
		return false;	
	} 
	if (email && !email.match(rxEmail)) {
		// console.log ('>>> wrong email: ' + email);
		return false;	
	} 
	return true;	
}


function isAnyField(element, index) {
	element.phone = element.phone || '';
	element.name = element.name || '';
	element.email = element.email || '';
	return element.phone.includes(this) || element.name.includes(this) || element.email.includes(this);
}
