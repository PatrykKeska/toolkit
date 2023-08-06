export const counterV1Css = `
  
  .content-wrapper {
    overflow-x: hidden;
    min-width: 350px;
  }
  .counter-wrapper {
    display: flex;
    flex-direction: column;
    justify-items: center;
    align-items: center;
    padding: 15px;
    min-width: 250px;
    min-height: 200px;
    border-radius: 10px;
    font-family: var(--basic-font-family);
  }
  .counter-title {
    font-size: 20px;
    font-weight: 700;
    color: var(--basic-font-color);
    text-align: center;
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
  
  .countdown-each-zone__number,
  .countdown-each-zone__number--last {
    display: flex;
    gap: 10px;
    justify-content: center;
    align-items: center;
  }
  
  .countdown-each-zone__number::after {
    content: ": ";
    color: hsl(116, 70%, 44%);
    font-size: 30px;
    font-weight: 800;
  }
  
  .countdown-digit {
    font-size: 5rem;
    color: white;
    padding: 0px 10px 0px 10px;
    background: hsl(116, 50%, 70%);
    border-radius: 5px;
    margin: 0;
    font-weight: 800;
  }
  
  .countdown-zone-description {
    font-size: 18px;
    font-weight: 700;
    color: hsl(116, 70%, 44%);
    margin: 0;
  }
  
  @media (max-width: 700px) {
    .countdown-digit {
      font-size: 3rem;
      padding: 0px 5px 0px 5px;
    }
  
    .countdown-zone-description {
      font-size: 15px;
    }
  
    .countdown-each-zone__number,
    .countdown-each-zone__number--last {
      gap: 5px;
    }
    .countdown-each-zone__number::after {
      font-size: 15px;
    }
  }
  
  
`;
