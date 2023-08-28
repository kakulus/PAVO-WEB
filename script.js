// Set the date we're counting down to
var countDownDate = new Date("May 8, 2023 12:00:00").getTime();
    let x = setInterval(function() {
        let now = new Date().getTime();
               let distance = countDownDate - now;
               let days = Math.floor(distance / (1000 * 60 * 60 * 24));
        let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
let seconds = Math.floor((distance % (1000 * 60)) / 1000);
          
  document.getElementById("demo").innerHTML = days + "D         " + hours + "H         "
  + minutes + "M  " + seconds + "S"

  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "HAPPY BIRTHDAY NELLY";
  }
}, 3000);
      