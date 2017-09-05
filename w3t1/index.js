'use strict';

var robbery = require('./robbery');

var gangSchedule = {
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
};

var bankWorkingHours = {
    from: '10:00',
    to: '18:00'
};

// Подходящее время для ограбления не будет найдено
var longMoment = robbery
    .getAppropriateMoment(gangSchedule, 61, bankWorkingHours);

longMoment.exists();
// false

longMoment.format('Начинаем в %HH:%MM!');
// ''

// Подходящее время будет найдено
var moment = robbery.getAppropriateMoment(gangSchedule, 30, bankWorkingHours);

moment.exists();
// true

moment.format('Начинаем в %HH:%MM!');
// Начинаем в 17:00!
