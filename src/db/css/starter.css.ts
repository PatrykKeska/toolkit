export const starterCss = `
  @import url("https://fonts.googleapis.com/css2?family=Caveat&family=Mulish:wght@400;700;800;900&display=swap");

  :root {
    --main-theme-color: #f7f1e7;
    --basic-font-color: #2b2b33;
    --basic-font-family: "Mulish", sans-serif;
    --fancy-font-family: "Caveat", cursive;

    --main-banner-height: clamp(18.75rem, calc(14.16rem + 20.38vw), 32rem);
    --blog-cards-main-theme: #ffff;

    /* basic-sm: 24.00px → 28.00px */
    --fs-basic-sm: clamp(1.5rem, calc(1.41rem + 0.38vw), 1.75rem);
    /* basic-md: 28.00px → 32.00px */
    --fs-basic-md: clamp(1.75rem, calc(1.66rem + 0.38vw), 2rem);
    /* basic-lg: 30.00px → 46.00px */
    --fs-basic-lg: clamp(1.88rem, calc(1.53rem + 1.54vw), 2.88rem);

    /* fancy-sm: 36.00px → 46.00px */
    --fs-fancy-sm: clamp(2.25rem, calc(2.03rem + 0.96vw), 2.88rem);
    /* fancy-md: 46.00px → 50.00px */
    --fs-fancy-md: clamp(2.88rem, calc(2.79rem + 0.38vw), 3.13rem);
    /* fancy-lg: 48.00px → 72.00px */
    --fs-fancy-lg: clamp(3rem, calc(2.48rem + 2.31vw), 4.5rem);

    /* basic-line-height-sm: 32.00px → 34.00px */
    --lh-basic-sm: clamp(2rem, calc(1.96rem + 0.19vw), 2.13rem);
    /* basic-line-height-md: 34.00px → 38.00px */
    --lh-basic-md: clamp(2.13rem, calc(2.04rem + 0.38vw), 2.38rem);
    /* basic-line-height-lg: 32.00px → 48.00px */
    --lh-basic-lg: clamp(2rem, calc(1.65rem + 1.54vw), 3rem);

    /* fancy-line-height-sm: 30.00px → 32.00px */
    --lh-fancy-sm: clamp(1.88rem, calc(1.83rem + 0.19vw), 2rem);
    /* fancy-line-height-md: 32.00px → 42.00px */
    --lh-fancy-md: clamp(2rem, calc(1.78rem + 0.96vw), 2.63rem);
    /* fancy-line-height-lg: 30.00px → 44.00px */
    --lh-fancy-lg: clamp(1.88rem, calc(1.57rem + 1.35vw), 2.75rem);

    /* paragraph in heading section  */
    /* heading-font: 18.00px → 24.00px */
    --p-heading-font: clamp(1.13rem, calc(1rem + 0.58vw), 1.5rem);
    /* heading-line Height: 24.00px → 34.00px */
    --p-heading-lh: clamp(1.5rem, calc(1.28rem + 0.96vw), 2.13rem);

    /* common space */
    /* space-sm: 16.00px → 36.00px */
    --gap-sm: clamp(1rem, calc(0.57rem + 1.92vw), 2.25rem);
    /* space-md: 20.00px → 40.00px */
    --gap-md: clamp(1.25rem, calc(0.82rem + 1.92vw), 2.5rem);
    /* gap-lg: 30.00px → 50.00px */
    --gap-lg: clamp(1.88rem, calc(1.44rem + 1.92vw), 3.13rem);
    /* gap-xl: 40.00px → 60.00px */
    --gap-xl: clamp(2.5rem, calc(2.07rem + 1.92vw), 3.75rem);
    /* gap-2xl: 40.00px → 80.00px */
    --gap-2xl: clamp(2.5rem, calc(1.63rem + 3.85vw), 5rem);
    /* gap-3xl: 20.00px → 100.00px */
    --gap-3xl: clamp(1.25rem, calc(-0.48rem + 7.69vw), 6.25rem);

    /*   boxes with img desktop height, left auto to adjust depend on content or adjust to your own height */

    /*   --box-height: 435px; */
    --box-height: auto;
    --box-min-height: 435px;

    /* Accordion Variables */
    --accordion-main-theme: #f3f8fb;
    --accordion-theme-red: #ed1c24;
    --accordion-theme-blue: #10447d;
  }

  /* Headings Responsive Fonts Start */

  .basic-title-sm {
    font-size: var(--fs-basic-sm);
    line-height: var(--lh-basic-sm);
    font-family: var(--basic-font-family);
    color: var(--basic-font-color);
    font-weight: 800;
    margin: 0;
  }
  .basic-title-md {
    font-size: var(--fs-basic-md);
    line-height: var(--lh-basic-md);
    font-family: var(--basic-font-family);
    color: var(--basic-font-color);
    font-weight: 800;
    margin: 0;
  }
  .basic-title-lg {
    font-size: var(--fs-basic-lg);
    line-height: var(--lh-basic-lg);
    font-family: var(--basic-font-family);
    color: var(--basic-font-color);
    font-weight: 900;
    margin: 0;
  }

  .fancy-title-sm {
    font-size: var(--fs-fancy-sm);
    line-height: var(--lh-basic-sm);
    font-family: var(--fancy-font-family);
    color: var(--basic-font-color);
    font-weight: 400;
    margin: 0;
  }
  .fancy-title-md {
    font-size: var(--fs-fancy-md);
    line-height: var(--lh-basic-md);
    font-family: var(--fancy-font-family);
    color: var(--basic-font-color);
    font-weight: 400;
    margin: 0;
  }
  .fancy-title-lg {
    font-size: var(--fs-fancy-lg);
    line-height: var(--lh-basic-lg);
    font-family: var(--fancy-font-family);
    color: var(--basic-font-color);
    font-weight: 400;
    margin: 0;
  }

  .p-heading-title {
    font-family: var(--basic-font-family);
    color: var(--basic-font-color);
    line-height: var(--p-heading-lh);
    font-size: var(--p-heading-font);
    font-weight: 400;
    margin: 0;
  }

  /* Headings Responsive Fonts End */

  /* Mobile view full width start */

  .static-lp-main-wrapper {
    margin: 1rem auto 1rem auto;
    max-width: 1180px;
  }

  .static-lp-main-wrapper > .container {
    padding-left: 0 !important;
    padding-right: 0 !important;
    /* remove if background no needed */
    background-color: var(--main-theme-color) !important;
  }

  .static-lp-main-wrapper * {
    box-sizing: border-box;
  }

  /* Mobile view full end */

  /* Buttons start  */

  .check-offers-button {
    width: clamp(13.75rem, calc(17.12rem + -3.85vw), 16.25rem);
    height: 45px;
    min-height: 45px;
    background-color: white;
    display: grid;
    place-items: center;
    max-width: 360px;
    border-radius: 50px;
    color: var(--basic-font-color);
    font-family: var(--basic-font-family);
    z-index: 1;
    font-weight: 700;
    border: 2px solid var(--basic-font-color);
    text-decoration: none;
  }
  .check-offers-button--red {
    width: clamp(14.63rem, calc(14rem + 2.79vw), 16.44rem);
    height: clamp(3.25rem, calc(3.08rem + 0.77vw), 3.75rem);
    font-size: clamp(1.13rem, calc(1.04rem + 0.38vw), 1.38rem);
    line-height: clamp(1.5rem, calc(1.39rem + 0.48vw), 1.81rem);
    background-color: #d8232a;
    text-decoration: none;
    font-weight: 700;
    font-family: var(--basic-font-family);
    display: grid;
    place-items: center;
    border-radius: 50px;
    color: white;
    z-index: 1;
  }

  .check-offers-button--red:hover {
    color: white;
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

  /* Buttons end  */

  /* List Style start */

  .dotted {
    padding-left: 20px;
    display: flex;
    flex-direction: column;
    gap: 16px;
    margin-bottom: 25px;
  }

  .dotted li {
    list-style-type: disc;
    font-family: var(--basic-font-family);
    color: var(--basic-font-color);
  }

  /* List Style end */

  @media (max-width: 500px) {
    /* display classes - usefull to manage headings on mobile  */

    .d-ib {
      display: inline-block;
    }

    .d-b {
      display: block;
    }
  }

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

  @media (min-width: 1000px) {
  }
`;
