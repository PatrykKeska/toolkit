export const heroSectionWithButtonAndServicesCss = `
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

.hero-section-title{
  display: grid;
  place-items: center
  ;
}


.hero-section-button {
  margin-top: clamp(1.56rem, calc(1.24rem + 1.44vw), 2.5rem);
}



.hero-main-banner{
  background-image: url("https://storage.googleapis.com/etravify-prod-le9ohl2h/top_lp_opinie_ffc77848fb.webp?updated_at=2023-05-31T08:05:49.712Z");
  background-size: cover;
  /* height 300px => 512px */
  height: var(--main-banner-height);
  overflow: hidden;
  width: 100%;

}
/* hero section end */


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


  /* Services section start  */

.services-section {
  background-color: #ffff;
  width:100%;
  padding: var(--gap-2xl) var(--gap-3xl); 
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  
  
}
.services-section__title {
  margin-bottom: 40px;
  width:100%;

}

.services-section__image {
  width: 56px;
  height: 56px;
}
.services-section__caption {
  color:var(--basic-font-color);
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
  width:100%;
  grid-gap: 20px;
  place-items: start;
  grid-auto-rows: auto;
}
.services-section__item {
  margin:0;
  display:flex;
  justify-content:center;
  align-items:center;
  gap:24px;
}


/* Services section end  */

/* Services Section Start min-width:600px */


media(min-width:600px){

  
    .services-section__grid{
      place-items: center;
    }
  
    .services-section__item {
    gap:16px;
    display:flex;
    flex-direction:column;
    text-align:center;
    }

  
  }

/* Services Section End min-width:600px */

/* Services Section Start min-width:1000px */
@media (min-width: 1000px) {
.services-section__title{
    text-align: center;
  }
}
  /* Services Section Start min-width:1000px */

`;
