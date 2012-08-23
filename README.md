[![build status](https://secure.travis-ci.org/blakmatrix/fizzbuzz.png)](http://travis-ci.org/blakmatrix/fizzbuzz)
FizzBuzz: the Programmer's Stairway to Heaven
=

[Awesome FizzBuzz article by Jeff Atwood](http://www.codinghorror.com/blog/2007/02/fizzbuzz-the-programmers-stairway-to-heaven.html)



Install:
--------


    npm i fizzbuzz
    OR
    npm i fizzbuzz -g


To Use:
-------

Demo: [fizzbuzz.jit.su](http://fizzbuzz.jit.su/)

Run your own **server**:  

    git clone git@github.com:blakmatrix/fizzbuzz.git && cd fizzbuzz
    node app.js

Use it in your own app with **require**:


    var fizzbuzz = require('fizzbuzz').fizzbuzz;
    for(var i=1;i<=100;i++){
    	console.log(String(fizzbuzz(i)));
    }


To run via **commandline**:



    npm i fizzbuzz -g
    fizzbuzz

