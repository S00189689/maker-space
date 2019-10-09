var Gpio = require('onoff').Gpio; 

var led = new Gpio(5,'out');
var led1 = new Gpio(16,'out');
var led2 = new Gpio(12,'out');

var Blynk = require('blynk-library');

var AUTH = 'a864aEUiAVXc0yg8xtjWmV1bZz8eHwU6';

var blynk = new Blynk.Blynk(AUTH);

var v0 = new blynk.VirtualPin(0);
var v9 = new blynk.VirtualPin(9);
var v10 = new blynk.VirtualPin(10);

v0.on ('write', function(param) {
     if (param[0] == '1'){
	led.writeSync(1)
	}
	else{ 
	led.writeSync(0)
          }   
	console.log('v0:',param[0]);
 } );

v9.on('write', function(param) {
     if (param[0] == '1'){
	led1.writeSync(1)
	}
	else{ 
	led1.writeSync(0)
          }   
	console.log('v9:',param[0]);
 });

v10.on('write', function(param) {
     if (param[0] == '1'){
	led2.readSync(1)
	}
	else{ 
	led2.writeSync(0)
          }   
	console.log('v10:',param[0]);
 });




