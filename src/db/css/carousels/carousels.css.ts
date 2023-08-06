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

.carousel-boxes-title,
.recommended-offers-title {
  background-color: var(--main-theme-color);
  /* adjust padding if you need  */
  padding: var(--gap-lg) calc(var(--gap-3xl) + 5px) 0 calc(var(--gap-3xl) + 5px);
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
