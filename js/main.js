
$(document).ready( function(){

  var rps = ['Rock', 'Paper', 'Scissors']
  var win = 0
  var lose = 0
  var ties = 0
  var gamesPlayed = 0
  var user
  var computer
  var clear 

  $('.tooltipped').tooltip({ delay: 50 })


  $('#start').click(function () {
    $('#start').removeClass('scale-in').addClass('scale-out')
    $('#reset').removeClass('scale-out').addClass('scale-in')
    $('#game').removeClass('scale-out').addClass('scale-in')
  })

  $('#reset').click(function () {
    $('#reset').removeClass('scale-in').addClass('scale-out')
    $('#start').removeClass('scale-out').addClass('scale-in')
    $('#game').removeClass('scale-in').addClass('scale-out')
    clear() 
  })

  function clear() {
    win = 0
    $('#win').text(0)
    lose = 0
    $('#lose').text(0)
    ties = 0
    $('#tie').text(ties)
    gamesPlayed = 0
    $('#games_played').text(gamesPlayed)
    $('#userChoice').text("")
    $('#compChoice').text("")
    $('#result').text("")

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
      case 'Tie':
        ties++
        $('#tie').text(ties)
    }
    gamesPlayed++
    $('#games_played').text(gamesPlayed)
  }

  function displayResult(result, compChoice) {
    if (result === 'Win') {
      $('#userChoice').text("You chose " + user + ".")
      $('#compChoice').text("The computer chose " + computer + ".")
      $('#result').text("You win")
    } else if (result === 'Lose') {
      $('#userChoice').text("You chose " + user + ".")
      $('#compChoice').text("The computer chose " + computer + ".")
      $('#result').text("You lose")
    } else {
      $('#userChoice').text("You chose " + user + ".")
      $('#compChoice').text("The computer chose " + computer + ".")
      $('#result').text("You tied")
    }
    Materialize.toast(("You " + result), 4000)
  }

  $('.choice').on('click', function() {
    user = this.id
    Materialize.toast(('You chose ' + user + '.'), 2000)
    computer = rps[Math.floor(Math.random() * rps.length)]
    Materialize.toast(('The computer chose ' + computer + '.'), 3000)
  if (user === computer) {
    displayResult('Tied', computer)
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


