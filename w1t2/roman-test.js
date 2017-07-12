

var a = 99;

// var roman =

var onesArray = ['','I','II','III','IV','V','VI','VII','VIII','IX'];
var decArray = ['','X','XX','XXX','XL','L','LX','LXX','LXXX','XC'];
//var hunArray = {'','C','CC','CCC','CD','D','DC','DCC','DCCC','DM'};


ones = onesArray[a % 10];
dec = decArray[parseInt(a / 10)];

res = dec + ones; 
if (res == '') res = 'N';

console.log(res);





