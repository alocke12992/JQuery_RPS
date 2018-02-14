
$(document).ready( function(){
  var user
  var result
  var rps = ['Rock', 'Paper', 'Scissors']
  var computer
  var showGame = false 

  $('start').on('click', function (){
    var game = $('#game')
    var button = $(this)
    if (showGame) {
      game.hide()
      showGame = true
    } else 
  })

  $('.choice').on('click', function() {
    user = this.id
    computer = rps[Math.floor(Math.random() * rps.length)]
    $('#userChoice').text(user)
    $('#compChoice').text(computer)
  })

  function results(){
    if (user === computer) {
      $('#result').text('It was a tie')
    } else {
      switch (user) {
        case 'rock':
          if (computer === 'scissors') {
            $('#result').text('You win')
          } else {
            $('#result').text('you lose')
          }
          break 
        case 'paper':
          if (computer === 'rock') {
            $('#result').text('You win')
          } else {
            $('#result').text('you lose')
          }
          break 
        case 'scissors':
          if (computer === 'paper') {
            $('#result').text('You win')
          } else {
            $('#result').text('you lose')
          }
          break 
        }
    }
  }
})


