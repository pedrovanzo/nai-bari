// Set the date we're counting down to
var countDownDate = new Date("Jun 22, 2021 15:37:25").getTime()

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime()
    
  // Find the distance between now and the count down date
  var distance = countDownDate - now
    
  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
  var seconds = Math.floor((distance % (1000 * 60)) / 1000)
    
  // Output the result in an element with id="demo"
  document.getElementById("countdown").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s "

  // Dias
  if(days == 1){
    document.getElementById("cnt-days-number").innerHTML = days
    document.getElementById("cnt-days-str").innerHTML = "dia"
  }else if(days < 10){
    document.getElementById("cnt-days-number").innerHTML = "0" + days
    document.getElementById("cnt-days-str").innerHTML = "dia"
  }else{
    document.getElementById("cnt-days-number").innerHTML = days
    document.getElementById("cnt-days-str").innerHTML = "dias"
  }
  // Horas
  if(hours == 1){
    document.getElementById("cnt-hours-number").innerHTML = hours
    document.getElementById("cnt-hours-str").innerHTML = "hora"
  }else{
    document.getElementById("cnt-hours-number").innerHTML = hours
    document.getElementById("cnt-hours-str").innerHTML = "horas"
  }
  // Minutos
  if(minutes == 1){
    document.getElementById("cnt-minutes-number").innerHTML = minutes
    document.getElementById("cnt-minutes-str").innerHTML = "minuto"
  }else{
    document.getElementById("cnt-minutes-number").innerHTML = minutes
    document.getElementById("cnt-minutes-str").innerHTML = "minutos"
  }
  // Segundos
  if(seconds == 1){
    document.getElementById("cnt-seconds-number").innerHTML = seconds
    document.getElementById("cnt-seconds-str").innerHTML = "segundo"
  }else{
    document.getElementById("cnt-seconds-number").innerHTML = seconds
    document.getElementById("cnt-seconds-str").innerHTML = "segundos"
  }
    
  // If the count down is over, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("countdown").innerHTML = "Tempo Esgotado"
    document.getElementById("cnt-days").innerHTML = 00 + " dias"
    document.getElementById("cnt-hours").innerHTML = 00 + " horas"
    document.getElementById("cnt-minutes").innerHTML = 00 + " minutos"
    document.getElementById("cnt-seconds").innerHTML = 00 + " segundos"
  }else{
    document.getElementById("countdown").innerHTML = null
  }
}, 1000)