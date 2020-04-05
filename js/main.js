// Creare in HTML una griglia formata da 8x8 rettangolini tutti bianchi.
// 15 di questi rettangolini (scelti a caso all’inizio) se cliccati diventano rossi, gli altri diventano verdi

$(document).ready(function () {

  //variabili punteggio 
  var redPoint = 0, greenPoint = 0;


  randomSquares();
  randomRed();


  //funzione nuovo gioco che resetta classi, variabili punteggio e richiama la funzione per generare nuovo riquadri random
  $('.new-game h1').click(function () {
    $('.green-score').html('0');
    $('.red-score').html('0');
    redPoint = 0;
    greenPoint = 0;
    $('.square').removeClass('red');
    $('.square').removeClass('clicked');
    $('.square').css("background-color", "");
    randomRed();
  });


  //Funzione che genera 64 div con classe square
  function randomSquares() {
    for (var i = 0; i < 64; i++) {
      $(".table-container").append("<div class='square'></div>");
    }
  }

  //aggiungo attributo num crescente ai div appena generati
  /*   $.each($('.square'), function (index, div) {
      myIndex = index + 1;
      $(div).attr('num', myIndex);
    });
   */


  //funzione che genera un array di 49 numeri diversi generati casualmente compresi tra 1 a 64 e assegna la classe red ai div square corrispondenti
  function randomRed() {
    var randomRed = [];
    do {
      //genero numero casuale
      var randomNum = Math.floor(Math.random() * 64 + 1);
      //se il numero generato è uguale ad uno presente nell'array ne genero un altro, altrimenti lo aggiungo all'array
      if ($.inArray(randomNum, randomRed) == -1) {
        randomRed.push(randomNum);
        //aggiungo la classe red ai div 'square' corrispondenti all'array precedentemente creato
        $(".square:nth-child(" + randomNum + ")").addClass('red');
      } else {
        randomNum = Math.floor(Math.random() * 64 + 1);
      }
      //termino il ciclo quando l'array contiene 49 numeri
    } while (randomRed.length < '49');
  }

  //funzione sul click dei div square che controlla il punteggio e le meccaniche di gioco
  $('.square').click(function () {
    if ($(this).hasClass('clicked')) {
    } else if ($(this).hasClass('red')) {
      $(this).addClass('clicked');
      $(this).css("background-color", "#E0312D");
      redPoint++;
      $('.red-score').html(redPoint);
    } else {
      $(this).addClass('clicked');
      $(this).css("background-color", "#C1E73A");
      greenPoint++;
      $('.green-score').html(greenPoint);
      console.log(greenPoint)
    }
  }
  )

});

