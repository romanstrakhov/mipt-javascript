/* eslint-env mocha */
'use strict';

var assert = require('assert');

var robbery = require('./robbery');

describe('Форматтер из getAppropriateMoment', function () {
    function getMomentFor(time) {
        return robbery.getAppropriateMoment(
            {
                Danny: [
                    { from: '12:00', to: '17:00' }
                ],
                Rusty: [
                    { from: '11:30', to: '16:30' }
                ],
                Linus: [
                    { from: '09:00', to: '14:00' },
                    { from: '21:00', to: '23:59' }
                ]
            },
            time,
            { from: '10:00', to: '18:00' }
        );
    }

    it('должен возвращать время в формате «Начинаем в %HH:%MM!»', function () {
        var moment = getMomentFor(30);

        assert.ok(moment.exists());
        assert.strictEqual(
            moment.format('Начинаем в %HH:%MM!'),
            'Начинаем в 17:00!'
        );
    });

    it('должен возвращать пустую строку для несуществующего момента', function () {
        var moment = getMomentFor(61);

        assert.ok(!moment.exists());
        assert.strictEqual(
            moment.format('Начинаем в %HH:%MM!'),
            ''
        );
    });
});
