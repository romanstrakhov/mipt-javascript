'use strict';

var assert = require('assert');
var phoneBook = require('./phone-book');

describe('Телефонная книга', function () {
    it('должна добавлять записи', function () {
        assert(phoneBook.add('5554440044', 'Григорий', 'grisha@example.org'));
        assert(phoneBook.add('5552220022', 'Борис', 'boris@example.org'));
        assert(phoneBook.add('5551110011', 'Алекс'));
        assert(phoneBook.add('5553330033', 'Валерий', 'valera@example.org'));
    });

    it('не должна добавлять неправильные записи', function () {
        assert(!phoneBook.add('3330033', 'Неизвестный', 'unknown@example.org'));
        assert(!phoneBook.add('5551110011', 'Алексей'));
        assert(!phoneBook.add('5555550055'));
    });

    it('должна обновлять существующие записи', function () {
        assert(phoneBook.update('5551110011', 'Алексей', 'alex@example.org'));
        assert(phoneBook.update('5553330033', 'Валерий'));
    });

    it('должна искать все записи по запросу «*»', function () {
        assert.deepStrictEqual(phoneBook.find('*'), [
            'Алексей, 5551110011, alex@example.org',
            'Борис, 5552220022, boris@example.org',
            'Валерий, 5553330033',
            'Григорий, 5554440044, grisha@example.org'
        ]);
    });

    it('должен искать все записи по запросу «555»', function () {
        assert.deepStrictEqual(phoneBook.find('555'), [
            'Алексей, 5551110011, alex@example.org',
            'Борис, 5552220022, boris@example.org',
            'Валерий, 5553330033',
            'Григорий, 5554440044, grisha@example.org'
        ]);
    });
});
