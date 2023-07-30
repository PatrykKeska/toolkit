export const counter2 = `
<style>
@import url("https://fonts.googleapis.com/css2?family=Oswald:wght@400;600;700&display=swap");


:root{
  --counter-title-font-Color:#0b3d77;
  --counter-dignit-font-color:white;
  --counter-dignit-background-color:#0b3d77;
  --counter-under-dignit-font-color:#0b3d77;
}

.counter-wrapper {
display: flex;
flex-direction: column;
justify-items: center;
align-items: center;
padding: 15px;
background-color: white;
min-width: 330px;
min-height: 250px;
border-radius: 10px;
font-family: Oswald;
box-shadow: 0px 6px 174px 0px rgba(0, 0, 0, 0.15);
}
.counter-title {
  font-size: 20px;
  font-weight: 400;
  color:var(--counter-title-font-Color);
}

.countdown {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 7px;
  padding: 10px;
}

.countdown-each-zone {
  display: flex;
  flex-direction: column;
  justify-items: center;
  align-items: center;
  gap: 10px;
}

.countdown-digit {
  background-color: var(--counter-dignit-background-color);
  padding: 5px 25px;
  border-radius: 10px;
  color:var(--counter-dignit-font-color);
  font-size: 44px;
  font-weight: 700;
  margin: 0;
}

.countdown-zone-description {
  font-size: 18px;
  font-weight: 400;
  color: var(--counter-under-dignit-font-color);
  margin: 0;
}
</style>

<div class="counter-wrapper">
<h3 class="counter-title">Sprawdź ile dni pozostało do majówki:</h3>
<div class="countdown" id="countdown" />
</div>
`;
