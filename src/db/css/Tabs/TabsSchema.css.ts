export const TabsSchemaCss = `

.tabs * {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  background-color: white;
  font-family: var(--basic-font-family);
  color: var(--basic-font-color);
}

.tabs-title {
  margin-bottom: 20px;
  font-family: var(--basic-font-family);
  font-size: var(--fs-basic-md);
  line-height: var(--basic-line-height-md);
}

.tabs {
  display: flex;
  flex-direction: column;
  background-color: white;
  padding: var(--gap-md) var(--gap-3xl);
  min-width: 320px;
}

.tab {
  display: flex;
  flex-direction: column;
  flex: 1;
}

.button-wrapper {
  display: flex;
  position: relative;
  border-bottom: 2px solid #d1d2d5;
  /* pb: 16.00px → 20.00px */
  padding-bottom: clamp(1rem, calc(0.91rem + 0.38vw), 1.25rem);
}

.tab-button {
  background-color: transparent;
  position: relative;
  // width: 160px;
  font-family: var(--fancy-font-family);
  font-size: var(--fs-fancy-sm);
  line-height: 30px;
  border: none;
  transition: all 0.3s ease-in-out;
  padding: 10px 20px;
  cursor: pointer;
  overflow: hidden;
  outline: none; /* Add this line to remove outline on button focus */
}

.button-underline {
  /* Adjust this value depending on the width of the button */ 
  bottom: calc(0px - 2px);
  left: 0;
  height: 2px;
  background: var(--basic-font-color);
  transition: all 0.4s;
  border-radius: 5px;
  position: absolute;
  overflow: hidden;
}

.tab-content-wrapper {
  display: flex;
  flex-direction: column;
  /* Step 0: 16.00px → 20.00px */
  gap: clamp(1rem, calc(0.91rem + 0.38vw), 1.25rem);
}

.tab-content-item {
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: flex-start;
  flex-basis: 100%;
  /* Step 0: 16.00px → 20.00px */
  gap: 13px;
}

.tab-content-title {
  font-size: 16px;
  font-weight: 700;
  line-height: 22px;
}

.tab-content-text {
  font-size: 16px;
  width: 100%;
  font-weight: 400;
  line-height: 22px;
  color: var(--basic-font-color);
  border-bottom: 1px solid #d1d2d5;
  padding-bottom: clamp(1rem, calc(0.91rem + 0.38vw), 1.25rem);
}

.tab-content {
  display: none;
  padding: 20px;
  animation: fade-in 0.4s ease-in-out forwards;
}

@keyframes fade-in {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}


`;
