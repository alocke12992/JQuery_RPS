
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

  
// WHEN YOU HOVER, CHANGE TEXT IN data-tooltip=USER
  $('#start').click(function () {
    $('#start').removeClass('scale-in').addClass('scale-out')
    $('#reset').removeClass('scale-out').addClass('scale-in')
    $('#game').removeClass('scale-out').addClass('scale-in')
    $('.welcome').animate({
      'marginTop': '10vh'
    }, 500)
  })

  $('#reset').click(function () {
    $('#reset').removeClass('scale-in').addClass('scale-out')
    $('#start').removeClass('scale-out').addClass('scale-in')
    $('#game').removeClass('scale-in').addClass('scale-out')
    $('.welcome').animate({
      'marginTop': '40vh'
    }, 500)
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
    var toolTipWin = $('#toolTipWin')
    var toolTipLose = $('#toolTipLose')
    var toolTipTie = $('#toolTipTie')
    var toolTipGames = $('#toolTipGames')
    switch (result) {
      case 'Win':
        win++ 
        $('#win').text(win)
        toolTipWin.attr('data-tooltip', win)
        toolTipWin.tooltip()
        break
      case 'Lose':
        lose++ 
        toolTipLose.attr('data-tooltip', lose)
        toolTipLose.tooltip()
        break
      case 'Tie':
        ties++
        toolTipTie.attr('data-tooltip', tie)
        toolTipTie.tooltip()
    }
    gamesPlayed++
    toolTipGames.attr('data-tooltip', gamesPlayed)
    toolTipGames.tooltip()
    
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


