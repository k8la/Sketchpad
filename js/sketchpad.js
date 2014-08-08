$(document).ready(function() {
  var size = 4
  generateGrid(size);
  trailEffect();
  clearButton();
  rainbowEffect();
  // gradientEffect();
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
    userInput()
    trailEffect();
  });

}

function userInput() {
  size = prompt('Enter a number');
  generateGrid(size);
}

function rainbowEffect() {
  $('#rainbow').click(function() {
    // $('#container').html('');
    $('.cell').mouseenter(function() {
      $(this).css({'background-color': randomColor()})
    });
  });
}

// function gradientEffect() {
//   $('#gradient').click(function() {
//     // $('#container').html('');
//     $('.cell').mouseenter(function() {
//       $(this).css({'opacity': })
//     });
//   });
// }

function randomColor(){
  var color = Math.floor(Math.random() * 16777216).toString(16);
  return '#000000'.slice(0, -color.length) + color;
}
