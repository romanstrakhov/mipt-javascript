'use strict';

var romanTime = require('./roman-time');

romanTime(123123);
// TypeError

romanTime('111111');
// TypeError


romanTime('24:00');
// TypeError
