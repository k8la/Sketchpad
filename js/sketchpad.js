$(document).ready(function() {
  var size = 4
  generateGrid(size);
  trailEffect();
  clearButton();
  
  
});

function generateGrid(num) {
  cellSize = 400/num;
  for (var i = 0; i < (num*num); i++) {
    $('#container').append("<div class='cell'></div>");
  }
  $('.cell').height(cellSize);
  $('.cell').width(cellSize);
}

function trailEffect () {
  $('.cell').mouseenter(function() {
    $(this).css({'background-color': '#FF9900'})
  });
}

function clearButton() {
  $('#clear').click(function() {
    $('#container').html('')
    $('.cell').css('background-color', '#FFFFFF');
    userInput()
  });

}

function userInput() {
  size = prompt('Enter a number');
  generateGrid(size);
}
