function startTimer(durationInSeconds) {
    let timerDisplay = document.getElementById("timer");
    let timer = durationInSeconds;
  
    function updateTimer() {
      let hours = parseInt(timer / 3600, 10);
      let minutes = parseInt((timer % 3600) / 60, 10);
      let seconds = parseInt(timer % 60, 10);
  
      hours = hours < 10 ? "0" + hours : hours;
      minutes = minutes < 10 ? "0" + minutes : minutes;
      seconds = seconds < 10 ? "0" + seconds : seconds;
  
      timerDisplay.textContent = hours + ":" + minutes + ":" + seconds;
  
      if (timer > 0) {
        timer--;
        setTimeout(updateTimer, 1000);
      } else {
        timer = durationInSeconds; 
        setTimeout(updateTimer, 1000);
      }
    }
  
    updateTimer();
  }
  
  const durationInSeconds = 24 * 60 * 60;
  startTimer(durationInSeconds);