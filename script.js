//your JS code here. If required.
 function updateTimer() {
      const now = new Date();
      const timerElement = document.getElementById("timer");
      timerElement.textContent = now.toLocaleString();
    }

    // Update the timer every second
    setInterval(updateTimer, 1000);