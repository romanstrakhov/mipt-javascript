'use strict';

var phoneBook = require('./phone-book');

// Пробуем добавить корректные записи
phoneBook.add('5554440044', 'Григорий', 'grisha@example.org');
phoneBook.add('5552220022', 'Борис', 'boris@example.org');
phoneBook.add('5551110011', 'Алекс');
phoneBook.add('5553330033', 'Валерий', 'valera@example.org');

// А эти запись добавить не получится,
// так как они не удовлетворяют требованиям
phoneBook.add('3330033', 'Неизвестный', 'unknown@example.org');
phoneBook.add('5551110011', 'Алексей');
phoneBook.add('5555550055');

// Пробуем обновить записи
phoneBook.update('5551110011', 'Алексей', 'alex@example.org');
phoneBook.update('5553330033', 'Валерий');

phoneBook.find('333');
// [
//   'Валерий, 5553330033'
// ]

phoneBook.find('*');
// [
//   'Алексей, 5551110011, alex@example.org',
//   'Борис, 5552220022, boris@example.org',
//   'Валерий, 5553330033',
//   'Григорий, 5554440044, grisha@example.org'
// ]
