'use strict';

var assert = require('assert');
var sum = require('./math').sum;

describe('Функция `sum`', function () {
    it('должна сложить число и ноль', function () {
        assert.strictEqual(sum(12, 0), 12);
    });

    it('должна сложить два числа', function () {
        assert.strictEqual(sum(12, 33), 45);
    });

    it('должна сложить два нецелых числа', function () {
        assert.strictEqual(sum(12.5, 33.14), 45);
//        assert.ok(isNaN(sum('12бегемотов','8')),'Result is not NaN');
    });

    it('должна сложить две строки', function () {
        assert.strictEqual(sum('9','8'), 17);
    });

    it('не должна сложить две зашумленных строки', function () {
        assert.ok(isNaN(sum('12бегемотов','8')),'Result is not NaN');
    });

	it('не должна сложить строки с ошибкой', function () {
        assert.ok(isNaN(sum('a9','8')),'Result is not NaN');
    });

});
