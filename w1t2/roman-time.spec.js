/* eslint-env mocha */
'use strict';

var assert = require('assert');
var romanTime = require('./roman-time');

describe('Преобразователь', function () {
    it('должен возвращать для 09:10 значение IX:X', function () {
        assert.strictEqual(romanTime('09:10'), 'IX:X');
    });

    it('должен возвращать для 00:00 значение N:N', function () {
        assert.strictEqual(romanTime('00:00'), 'N:N');
    });

    it('должен возвращать для 23:59 значение XXIII:LIX', function () {
        assert.strictEqual(romanTime('23:59'), 'XXIII:LIX');
    });

    it('должен выбрасывать исключение TypeError для 24:00', function () {
        assert.throws(romanTime.bind(null, '24:00'), TypeError);
    });

    it('должен выбрасывать исключение TypeError для 09:0s', function () {
        assert.throws(romanTime.bind(null, '09:0s'), TypeError);
    });

    it('должен выбрасывать исключение TypeError для 1x:10', function () {
        assert.throws(romanTime.bind(null, '1x:10'), TypeError);
    });
    it('должен выбрасывать исключение TypeError для 12:00:', function () {
        assert.throws(romanTime.bind(null, '12:00:'), TypeError);
    });


// 29 of 32 tests passed.
// Failed tests: должен выбрасывать исключение TypeError для 09:0s,
// должен выбрасывать исключение TypeError для 1x:10,
// должен выбрасывать исключение TypeError для 12:00:



});

