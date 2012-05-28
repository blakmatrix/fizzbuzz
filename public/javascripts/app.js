$(document).ready(function(){

  function submitBtn(){
    $('#run_fizzbuzz').bind('click', function(){
      var i;
      $('#textarea').val("Running Fizzbuzz...");
      for (i = 1; i <= 100; i++) {
        $.get(i, function(data){
          $('#textarea').val($('#textarea').val()+'\n'+data);
        });
      };
    });
  }
  submitBtn();


});
