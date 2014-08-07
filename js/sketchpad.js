$(document).ready(function() {
  generateGrid(16);
  trailEffect();
});

function generateGrid(num) {
  cellSize = 400/num
  for (var i = 0; i < (num*num); i++) {
    $('#container').prepend("<div class='cell'></div>");
  }
  $('.cell').height(cellSize);
  $('.cell').width(cellSize);
}

function trailEffect () {
  $('.cell').mouseenter(function() {
    $(this).css({'background-color': '#FF9900'})
  });
}