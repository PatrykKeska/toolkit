export const starterCss = `@import url("https://fonts.googleapis.com/css2?family=Caveat&family=Mulish:wght@400;700;800;900&display=swap");

:root {
  --main-theme-color: #f7f1e7;
  --basic-font-color: #2b2b33;
  --basic-font-family: "Mulish", sans-serif;
  --fancy-font-family: "Caveat", cursive;

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
  /* background-color: var(--main-theme-color) !important; */
}

.static-lp-main-wrapper * {
  box-sizing: border-box;
}

/* Mobile view full end */

/* hero section start */

.hero-section-wrapper {
  padding: clamp(2.63rem, calc(1.8rem + 3.65vw), 5rem) 20px
    clamp(2.25rem, calc(1.73rem + 2.31vw), 3.75rem) 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: var(--main-theme-color);
  position: relative;
  overflow: hidden;
  width: 100%;
}

.hero-section-title {
  display: grid;
  place-items: center;
}

.hero-section-button {
  margin-top: clamp(1.56rem, calc(1.24rem + 1.44vw), 2.5rem);
}

.hero-main-banner {
  background-image: url("https://storage.googleapis.com/etravify-prod-le9ohl2h/top_lp_opinie_ffc77848fb.webp?updated_at=2023-05-31T08:05:49.712Z");
  background-size: cover;
  /* height 300px => 512px */
  height: var(--main-banner-height);
  overflow: hidden;
  width: 100%;
}
/* hero section end */
`;
