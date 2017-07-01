console.log('js sourced');
$(document).ready(function(){

resetMath();

});

function resetMath(){
  $('#newMath').on('click', function(){
    //Hide inputs and show difficulty settings
    $('.inputs').show();
    $('.answerArea').hide();
  }
);
}
