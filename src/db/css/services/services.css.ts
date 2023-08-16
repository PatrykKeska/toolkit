export const servicesCss = `
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


@media(min-width:550px){

  
    .services-section__grid{
      place-items: center;
    }

    .services-section__title{
      text-align: center;
    }
  
    .services-section__item {
    gap:16px;
    display:flex;
    flex-direction:column;
    text-align:center;
    }

  
  }

/* Services Section End min-width:600px */



  `;
