
$(document).ready( function(){

  var rps = ['Rock', 'Paper', 'Scissors']
  var win = 0
  var lose = 0
  var ties = 0
  var gamesPlayed = 0
  var user 
  var computer 

  $('#start').on('click', function () {
    startButton = $(this)
    showGame = true
    toggle(true)
  })

  $('#reset').on('click', function () {
    //Need to figure out how to clear the items here 
    toggle(false)
    
  }) 

  function toggle(bool){
    var showGame = bool 
    var game = $('#game')
    if (showGame === true) {
        game.show()
        startButton.hide() 

      } else {
        game.hide()
        startButton.show()
      // $('#win').text(0)
      // $('#lose').text(0)
      // $('#tie').text(0)
      // $('#games_played').text(0)
  
      } 
    }

  function updateScore(result) {
    switch (result) {
      case 'Win':
        win++ 
        $('#win').text(win)
        break
      case 'Lose':
        lose++ 
        $('#lose').text(lose)
        break
      default:
        ties++
        $('#tie').text(ties)
    }
    gamesPlayed++
    $('#games_played').text(gamesPlayed)
    
  }

  function displayResult(result, comChoice) {
    if (result == 'Win') {
      $('#userChoice').text("You chose" + user + ".")
      $('#compChoice').text("The computer chose " + computer + ".")
      $('#result').text("You Win")
    } else if (result == 'Loss') {
      $('#userChoice').text("You chose" + user + ".")
      $('#compChoice').text("The computer chose " + computer + ".")
      $('#result').text("You lose.")
    } else {
      $('#userChoice').text("You chose" + user + ".")
      $('#compChoice').text("The computer chose " + computer + ".")
      $('#result').text("You tied.")
    }
  }

  $('.choice').on('click', function() {
    user = this.id
    computer = rps[Math.floor(Math.random() * rps.length)]
    
    if (user === computer) {
      updateScore('Tie')
    }
    switch (user) {
      case 'Rock':
        if (computer === 'Scissors') {
          displayResult('Win', computer)
          updateScore('Win')
        } else if (computer === 'Paper') {
          displayResult('Lose', computer)
          updateScore('Lose')
        }
        break
      case 'Scissors':
        if (computer === 'Paper') {
          displayResult('Win', computer)
          updateScore('Win')
        } else if (computer === 'Rock') {
          displayResult('Lose', computer)
          updateScore('Lose')
        }
        break
      case 'Paper':
        if (computer === 'Rock') {
          displayResult('Win', computer)
          updateScore('Win')
        } else if (computer === 'Scissors') {
          displayResult('Lose', computer)
          updateScore('Lose')
        }
    }
  })
})


