export const counterV2Script = `window.addEventListener('DOMContentLoaded', ()=>{
    const countDownDate = new Date("May 1, 2024 00:00: 00").getTime();
    const countdown = setInterval(function () {
      // Pobierz dzisiejszą datę i czas
      const now = new Date().getTime();

      // Oblicz pozostały czas
      const distance = countDownDate - now;

      // Obliczanie dni, godzin, minut i sekund
      let days = Math.floor(distance / (1000 * 60 * 60 * 24));
      let hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      // const seconds = Math.floor((distance % (1000 * 60)) / 1000);
      if (days < 10) {
        days = \`0\${days}\`;
      }
      if (hours < 10) {
        hours = \`0\${hours}\`;
      }
      if (minutes < 10) {
        minutes = \`0\${minutes}\`;
      }
      // Wyświetlanie wyniku w elemencie HTML
      document.getElementById("countdown").innerHTML = \`
        <div class='countdown-each-zone'><p class='countdown-digit'>\${days}</p>
        <p class='countdown-zone-description'>Dni</p>
        
        </div> <div class='countdown-each-zone'><p class='countdown-digit'>\${hours}</p>
          <p class='countdown-zone-description'>Godzin</p></div>
          
          <div class='countdown-each-zone'><p class='countdown-digit'>\${minutes}</p>
          <p class='countdown-zone-description'>Minut</p></div>\`;

      // Jeśli czas wygasł, zatrzymaj licznik
      if (distance < 0) {
        clearInterval(countdown);
        document.getElementById("countdown").innerHTML = "Czas wygasł!";
      }
    }, 1000);
})`;
