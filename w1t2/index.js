'use strict';

var romanTime = require('./roman-time');

romanTime('09:10');
// IX:X

romanTime('00:00');
// N:N

romanTime('23:59');
// XXIII:LIX

romanTime('ads:dsf');
// TypeError

romanTime('111111');
// TypeError


romanTime('24:00');
// TypeError
