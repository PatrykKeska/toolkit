export const mobileCarouselOffersBtnCss = `

.mobile-carousel-offers-button {
    width: 100%;
    height: 45px;
    background-color: transparent;
    display: grid;
    place-items: center;
    max-width: 360px;
    min-width: 260px;
    border-radius: 50px;
    color: var(--basic-font-color);
    font-family: var(--basic-font-family);
    z-index: 1;
    font-weight: 700;
    border: 2px solid var(--basic-font-color);
    text-decoration: none;
    margin: 30px 0;
  }


  .mobile-carousel-offers-button-wrapper {
    display: none;
  }

  @media (max-width: 1000px) {
    .mobile-carousel-offers-button-wrapper {
      display: grid;
      place-items: center;
      padding: 0 var(--gap-3xl);
    }
  
  }
`;
