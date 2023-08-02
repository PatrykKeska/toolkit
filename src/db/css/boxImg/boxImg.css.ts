export const boxImgCss = `
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


/* box section with photo start min-width:1000px */

@media (min-width: 1000px) {
  
    .each-box-wrapper__box-content-wrapper {
      flex-direction: row;
      min-height: var(--box-min-height);
      height: var(--box-height);
    }
  
    .--flex-reverse-container {
      flex-direction: row-reverse;
    }
  
    .text-content-main-wrapper {
      /* adjust width of white box next to photo */
      width: 315px;
    }

}
/* box section with photo end min-width:1000px */


`;
