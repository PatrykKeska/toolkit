export const simpleAccordionCss = `
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
`;
