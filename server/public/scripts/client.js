console.log('js sourced');

var numX = [];
var numY = [];
var opperator;

$(document).ready(function(){

  $('.numberButton').on('click', function(){
    if(opperator) {

      numY.push($(this).text());
      $('#inputField').text(numY.join(""));
    } else {
      numX.push($(this).text());
      $('#inputField').text(numX.join(""));
    }
    console.log(numX, opperator, numY);
  });
  $('#clear').on('click', function() {
    numX = [];
    numY = [];
    opperator= null;
    $('#inputField').empty();
  })
  $('#equals').on('click', function() {
    console.log('computing');
    $('#answerArea').show();
    $('.inputs').hide();
    $.ajax({
      type: 'POST',
      url: '/equation',
      data: {numX: numX, numY: numY, opperator: opperator},
      success: function(response){
        $('#answerArea').show();
        $('.inputs').hide();
        console.log(response);
        $('#answer').text(response);
      }
    })

  });

  $('.opperatorButton').on('click', function() {
    // numX = $('#numberX').val();
    // numY = $('#numberY').val();
    opperator = $(this).attr('id')

  });



  //reset the calc
  resetMath();

  // =button shows answer and gets rid of inputs
  // showAnswer();

}); //End of DocReady

function resetMath(){
  $('#newMath').on('click', function(){
    //Hide answer and restart calc settings
    numX = [];
    numY = [];
    opperator= null;
    $('.inputs').show();
    $('#answerArea').hide();
    $('#inputField').empty();

  }
)
};
