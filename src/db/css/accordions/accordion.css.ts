export const accordionCss = `
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
`;
