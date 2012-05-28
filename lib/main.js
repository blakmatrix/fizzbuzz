(function(){
	//Declaring variables
	var fs, foo, i;

	//Requiring files
	fs = require('fs');
	foo = require ('./fizzbuzz');

	for(i=1;i<=100;i++){
		console.log(String(foo.fizzbuzz(i)));
	}


}).call(this)