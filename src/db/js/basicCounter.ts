export const basicCounterScript = `window.addEventListener(
    "DOMContentLoaded",
    (e) => {
      const countDownDate = new Date("May 1, 2024 00:00: 00").getTime();
      const countdown = setInterval(function () {
        const now = new Date().getTime();
  
        const distance = countDownDate - now;
  
        let days = Math.floor(distance / (1000 * 60 * 60 * 24));
        let hours = Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        if (days < 10) {
          days = \`0\${days}\`;
        }
        if (hours < 10) {
          hours = \`0\${hours}\`;
        }
        if (minutes < 10) {
          minutes = \`0\${minutes}\`;
        }
        const daysArray = Array.from(String(days));
        const hoursArray = Array.from(String(hours));
        const minutesArray = Array.from(String(minutes));
  
        document.getElementById("countdown").innerHTML = \`
          <div class='countdown-each-zone'>
            <div class='countdown-each-zone__number'>
              \${daysArray.map((item) => \`<p class='countdown-digit'>\${item}</p>\`).join("")}
            </div>
            <p class='countdown-zone-description'>Dni</p>
          </div>
          <div class='countdown-each-zone'>
            <div class='countdown-each-zone__number'>
              \${hoursArray.map((item) => \`<p class='countdown-digit'>\${item}</p>\`).join("")}
            </div>
            <p class='countdown-zone-description'>Godzin</p>
          </div>
          <div class='countdown-each-zone'>
            <div class='countdown-each-zone__number--last'>
              \${minutesArray.map((item) => \`<p class='countdown-digit'>\${item}</p>\`).join("")}
            </div>
            <p class='countdown-zone-description'>Minut</p>
          </div>
        \`;
  
        if (distance < 0) {
          clearInterval(countdown);
          document.getElementById("countdown").innerHTML = "Czas wygasł!";
        }
      }, 1000);
    }
  );`;
