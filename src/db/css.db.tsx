export const cssDB = `@import url("https://fonts.googleapis.com/css2?family=Caveat&family=Mulish:wght@400;700;800;900&display=swap");

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
  background-color: var(--main-theme-color) !important;
}

.static-lp-main-wrapper * {
  box-sizing: border-box;
}

.z-2 {
  z-index: 2;
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
  text-align: center;
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
  height: clamp(18.75rem, calc(14.16rem + 20.38vw), 32rem);
  overflow: hidden;
  width: 100%;
}
/* hero section end */

/* Services section start  */

.services-section {
  background-color: #ffff;
  width: 100%;
  padding: var(--gap-2xl) var(--gap-3xl);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
}
.services-section__title {
  margin-bottom: 40px;
  width: 100%;
}

.services-section__image {
  width: 56px;
  height: 56px;
}
.services-section__caption {
  color: var(--basic-font-color);
  font-family: var(--basic-font-family);
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 22px;
}

.services-section__grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-auto-rows: minmax(100px, auto);
  width: 100%;
  grid-gap: 20px;
  place-items: start;
  grid-auto-rows: auto;
}
.services-section__item {
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 24px;
  height: 100%;
}

/* Services section end  */

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

/* box section with photo start */

.boxes-section-main-wrapper,
.boxes-section-main-wrapper--first {
  background-color: var(--main-theme-color);
  padding: var(--gap-lg) var(--gap-3xl);
  padding-bottom: auto;
  min-width: 300px;
}

.boxes-section-main-wrapper--first {
  padding-bottom: 0;
}

.boxes-section-main-wrapper--first .each-box-wrapper {
  margin: 0 auto;
}

.each-box-wrapper {
  display: flex;
  flex-direction: column;
  margin: clamp(2.5rem, calc(1.63rem + 3.85vw), 5rem) 0;
}

.each-box-wrapper__box-content-wrapper {
  display: flex;
  flex-direction: column;
}

.box-content-wrapper__img-wrapper {
  position: relative;
  min-height: 215px;
  flex: 1;
}

.img-wrapper__img {
  min-height: 215px;
  height: 100%;
  width: 100%;
  object-fit: cover;
  object-position: right;
}

.text-content-main-wrapper {
  font-family: var(--basic-font-family);
  color: var(--basic-font-color);
  background-color: white;
  display: flex;
  flex-direction: column;
  padding-top: var(--gap-sm);
  padding-left: var(--gap-md);
  padding-bottom: var(--gap-sm);
  padding-right: var(--gap-sm);
}

.text-content-main-wrapper__heading-wrapper {
  margin-bottom: 20px;
}

.each-box-wrapper__heading-wrapper {
  margin-bottom: 24px;
}

/* box section with photo end */

/* static margins  */

.mb-10 {
  margin-bottom: 10px;
}
.mb-15 {
  margin-bottom: 15px;
}
.mb-20 {
  margin-bottom: 20px;
}
.mb-25 {
  margin-bottom: 25px;
}
.mt-10 {
  margin-top: 10px;
}
.mt-15 {
  margin-top: 15px;
}
.mt-20 {
  margin-top: 20px;
}
.mt-25 {
  margin-top: 25px;
}
.ml-10 {
  margin-left: 10px;
}
.ml-15 {
  margin-left: 15px;
}
.ml-20 {
  margin-left: 20px;
}
.ml-25 {
  margin-left: 25px;
}
.mr-10 {
  margin-right: 10px;
}
.mr-15 {
  margin-right: 15px;
}
.mr-20 {
  margin-right: 20px;
}
.mr-25 {
  margin-right: 25px;
}

/* static paddings  */

.pb-10 {
  padding-bottom: 10px;
}
.pb-15 {
  padding-bottom: 15px;
}
.pb-20 {
  padding-bottom: 20px;
}
.pb-25 {
  padding-bottom: 25px;
}
.pt-10 {
  padding-top: 10px;
}
.pt-15 {
  padding-top: 15px;
}
.pt-20 {
  padding-top: 20px;
}
.pt-25 {
  padding-top: 25px;
}
.pl-10 {
  padding-left: 10px;
}
.pl-15 {
  padding-left: 15px;
}
.pl-20 {
  padding-left: 20px;
}
.pl-25 {
  padding-left: 25px;
}
.pr-10 {
  padding-right: 10px;
}
.pr-15 {
  padding-right: 15px;
}
.pr-20 {
  padding-right: 20px;
}
.pr-25 {
  padding-right: 25px;
}

/* easy center in container  */

.center-in-container {
  display: grid;
  place-items: center;
}

/* Carousel start  */

.static-lp-main-wrapper .container .recommended-offers-rdy {
  background-color: var(--main-theme-color) !important;
  padding-top: 0 !important;
  padding-bottom: 0 !important;
  padding-left: clamp(0rem, calc(1.68rem + -1.92vw), 1.25rem);
  padding-right: clamp(0rem, calc(1.68rem + -1.92vw), 1.25rem);
}

.static-lp-main-wrapper .container .recommended-offers-rdy--color {
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
  padding-left: clamp(0rem, calc(1.68rem + -1.92vw), 1.25rem);
  padding-right: clamp(0rem, calc(1.68rem + -1.92vw), 1.25rem);
}

.static-lp-main-wrapper .container .carousel-boxes-rdy--color {
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
  padding: clamp(1.88rem, calc(1.66rem + 0.96vw), 2.5rem)
    clamp(0rem, calc(1.68rem + -1.92vw), 1.25rem) 0
    clamp(0rem, calc(1.68rem + -1.92vw), 1.25rem);
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
}

.carousel-boxes-title--color,
.recommended-offers-title--color {
  padding: var(--gap-xl) var(--gap-3xl) 0 var(--gap-3xl);
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

/* blog cards start */

.blog-section {
  background-color: var(--blog-cards-main-theme);
  padding: var(--gap-xl) var(--gap-3xl) 25px var(--gap-3xl);
}

.blog-section__wrapper {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
}

.blog-section__header {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: 25px;
  width: 100%;
}
.blog-cards-header-link {
  display: none;
}

.blog-section__content {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 20px;
  width: 100%;
}

.blog-section__box {
  min-height: 125px;
  border: 1px solid #e6e6e6;
  border-radius: 4px;
  text-decoration: none;
  display: flex;
  flex: 1;
  width: 100%;
}

.blog-section__thumbnail {
  max-width: 130px;
  object-fit: cover;
  height: auto;
  display: block;
}

.blog-box__description-wrapper {
  background-color: #ffff;
  padding: 15px;
  min-height: 101px;
  flex: 1;
}

.blog-box__card-type {
  color: var(--basic-font-color);
  font-family: var(--basic-font-family);
  font-size: clamp(0.75rem, calc(0.71rem + 0.19vw), 0.88rem);
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  text-transform: uppercase;
  margin: 0 auto 4px auto;
}

.blog-box__title {
  color: var(--basic-font-color);
  font-family: var(--basic-font-family);
  font-size: clamp(0.88rem, calc(0.83rem + 0.19vw), 1rem);
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin: 0 auto 4px auto;
}

/* Blog cards end  */

/* Accordion Start */

.faq-main-wrapper {
  max-width: 1180px;
  font-family: var(--basic-font-family);
  color: var(--basic-font-color);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: 10rem;
}

.content__visible {
  color: var(--blue);
  font-size: clamp(1rem, 1.5vw, 1.3rem);
  cursor: pointer;
  padding: 5px 10px 5px 30px;
  border-radius: 20px;
  transition: 0.2s linear background-color;
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-content: center;
}

.content__visible:hover {
  background-color: #e8f3ff;
}

.content__visible__icon {
  width: 20px;
  height: 20px;
  background-image: url("https://storage.googleapis.com/etravify-prod-le9ohl2h/arrow_down_4e0fa768f7.png?updated_at=2023-05-09T08:58:17.747Z");
  background-repeat: no-repeat;
  background-position: center;
  padding-right: 3rem;
  transition: all linear 0.3s;
}

.visible-icon--active {
  transform: translateY(0%) rotate(180deg);
}

.content__hide {
  display: grid;
  padding-left: 1rem;
  grid-template-rows: 0fr;
  transition: grid-template-rows 500ms;
}

.content__hide--active {
  grid-template-rows: 1fr;
}

.hide__template-row {
  overflow: hidden;
}

.hide__element {
  padding: 1rem;
}

/* Accordion End  */

/* Simple Acoordion Styles Start  */

.space-y-4 {
  width: 100%;
}

.my-details {
  border-radius: 0.5rem;
  padding: 1rem;
  width: 100%;
}

.my-details[open] .my-summary-icon {
  transform: rotate(-180deg);
}

.my-summary {
  display: flex;
  cursor: pointer;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #d1d2d5;
  padding: 1rem;
}

.my-summary-icon {
  height: 1.25rem;
  width: 1.25rem;
  transition: transform 0.3s;
}

.my-summary-heading {
  font-weight: 500;
}

.my-summary-content {
  margin-top: 1rem;
  padding: 1rem;
  line-height: 1.5;
  color: #4a5568;
}

summary::-webkit-details-marker {
  display: none;
}

/* Simple Acoordion Styles end  */

@media (max-width: 500px) {
  /* display classes - usefull to manage headings on mobile  */

  .d-ib {
    display: inline-block;
  }

  .d-b {
    display: block;
  }
}

@media (min-width: 550px) {
  /* Services Section Start */

  .services-section__grid {
    place-items: center;
  }

  .services-section__title {
    text-align: center;
  }

  .services-section__item {
    gap: 16px;
    display: flex;
    flex-direction: column;
    text-align: center;
    justify-content: start;
  }

  /* Services Section End */
}

@media (max-width: 991px) {
  .mobile-carousel-offers-button-wrapper {
    display: grid;
    place-items: center;
    padding: 0 var(--gap-3xl);
  }

  .mobile-d-none {
    display: none;
  }
}

@media (min-width: 992px) {
  /* boxes with img start  */

  .each-box-wrapper__box-content-wrapper {
    flex-direction: row;
    /* adjust min-height as you need */
    min-height: 435px;
    height: auto;
  }

  .--flex-reverse-container {
    flex-direction: row-reverse;
  }

  .text-content-main-wrapper {
    /* adjust width of white box next to photo */
    width: 315px;
  }
  /* boxes with img end  */

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
  /* carousel end */

  /* Blog Cards Start  */

  .blog-cards-header-link {
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

  .blog-section__content {
    flex-direction: row;
  }

  .blog-section__box {
    flex-direction: column;
  }

  .blog-section__thumbnail {
    width: 100%;
    max-width: 100%;
    height: 200px;
  }

  .blog-section {
    padding-bottom: 60px;
  }

  /* Blog Cards End  */
}


`;
