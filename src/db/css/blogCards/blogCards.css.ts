export const blogCardsCss = `
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
  width:100%;
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

}

.blog-box__card-type {
  color: var(--basic-font-color);
  font-family: var(--basic-font-family);
  font-size: clamp(0.75rem, calc(0.71rem + 0.19vw), 0.88rem);
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  text-transform: uppercase;
  margin: 0 auto 4px auto ;
}

.blog-box__title {
  color: var(--basic-font-color);
  font-family: var(--basic-font-family);
  font-size: clamp(0.88rem, calc(0.83rem + 0.19vw), 1rem);
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin: 0 auto 4px auto ;

}

/* Blog cards end  */

@media (min-width: 1000px) {

/* Blog Cards Start  min-width:1000px */

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
  
    .blog-section__content{
      flex-direction: row;
    }
  
    .blog-section__box{
      flex-direction: column;
    }
  
    .blog-section__thumbnail{
      width: 100%;
      max-width: 100%;
      height: 200px;
    }
  
    .blog-section{
      padding-bottom:60px ;
    }
  
    /* Blog Cards End min-width:1000px  */

}
`;
