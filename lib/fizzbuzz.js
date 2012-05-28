//fizzbuzz.js

exports.fizzbuzz = function(num){
  if(       num % 3 !== 0 && num % 5 !== 0 ){
    return  num;
  }else if( num % 3 === 0 && num % 5 !== 0 ){
    return "fizz";
  } else if(num % 3 !== 0 && num % 5 === 0 ){
    return "buzz";
  } else{ //num % 3 === 0 && num % 5 === 0
    return "fizzbuzz";
  }
}


