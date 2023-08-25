export const carouselsCss = `
/* Carousel start  */

.static-lp-main-wrapper .container .recommended-offers-rdy {
  background-color: var(--main-theme-color) !important;
  padding-top: 0 !important;
  padding-bottom: 0 !important;
  padding-left: var(--gap-3xl) !important;
  padding-right: var(--gap-3xl) !important;
}

.static-lp-main-wrapper .container .carousel-boxes-rdy {
  background-color: var(--main-theme-color) !important;
  padding-top: 0 !important;
  padding-bottom: 0 !important;
  padding-left: var(--gap-3xl) !important;
  padding-right: var(--gap-3xl) !important;
}

.static-lp-main-wrapper .container .recommended-offers-rdy > div {
  padding-left: 0 !important;
  padding-right: 0 !important;
}

.static-lp-main-wrapper .container .carousel-boxes-rdy > div {
  padding-left: 0 !important;
  padding-right: 0 !important;
}

.recommended-offers-rdy .mt-4 {
  margin-top: 0 !important;
}

.carousel-boxes-rdy .mt-4 {
  margin-top: 0 !important;
}

.recommended-offers-rdy header.mb4 {
  display: none !important ;
}

.carousel-boxes-title,
.recommended-offers-title {
  background-color: white;
  /* adjust padding if you need  */
  padding: clamp(1.88rem, calc(1.66rem + 0.96vw), 2.5rem)
    clamp(0rem, calc(1.68rem + -1.92vw), 1.25rem) 0
    clamp(0rem, calc(1.68rem + -1.92vw), 1.25rem);
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
}

.carousel-boxes-title {
  margin-bottom: 24px;
}

.carousel-boxes-title h2 span {
  /* depends on fency title is on left or right change it */
  margin-left: 8px;
}

.recommended-offers-title h2 span {
  /* depends on fency title is on left or right change it */
  margin-left: 8px;
}

.carousel-section-link {
  display: none;
}

.carousel-boxes-rdy div > div > div > div > div > div {
  height: 86px !important;
  background-color: white !important;
  display: flex;
  align-items: center;
}

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

/* Carousel end  */

/* carousel start max-width:1000px  */

@media (max-width: 1000px) {
    .mobile-carousel-offers-button-wrapper {
      display: grid;
      place-items: center;
      padding: 0 var(--gap-3xl);
    }
  
    .mobile-d-none {
      display: none;
    }
  }

/* carousel end max-width:1000px  */


  /* carousel start min-width:1000px  */
  
  @media (min-width: 1000px) {

  
    /* carousel start  */
  
    .mobile-carousel-offers-button-wrapper {
      display: none;
    }
  
    .carousel-section-link {
      text-align: right;
      font-family: var(--basic-font-family);
      font-size: 16px;
      font-style: normal;
      font-weight: 700;
      line-height: 17px; /* 106.25% */
      text-decoration-line: underline;
      display: inline-block;
      padding-bottom: 5px;
      color: var(--basic-font-color);
    }
  
    .static-lp-main-wrapper .container .recommended-offers-rdy {
      padding-bottom: 50px !important;
    }
    .static-lp-main-wrapper .container .carousel-boxes-rdy {
      padding-bottom: 50px !important;
    }
}
  /* carousel end min-width:1000px  */

`;
