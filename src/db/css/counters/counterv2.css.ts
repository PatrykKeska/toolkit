export const counterV2css = `
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
    font-family: var(--basic-font-family);
    box-shadow: 0px 6px 174px 0px rgba(0, 0, 0, 0.15);
  }
  .counter-title {
    font-size: 20px;
    font-weight: 400;
    color: #0b3d77;
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
    background-color: #0b3d77;
    padding: 5px 25px;
    border-radius: 10px;
    color: white;
    font-size: 44px;
    font-weight: 700;
    margin: 0;
  }
  
  .countdown-zone-description {
    font-size: 18px;
    font-weight: 400;
    color: #0b3d77;
    margin: 0;
  }
  
`;
