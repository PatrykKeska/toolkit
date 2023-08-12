export const TabsSchemaScript = `
const tabButtons = document.querySelectorAll(".tab-button");
const tabContents = document.querySelectorAll(".tab-content");
const buttonUnderline = document.querySelector(".button-underline");
const buttonWrapper = document.querySelector(".button-wrapper");


const AdjustUnderlineWidth = () => {
  setTimeout(() => {
  buttonUnderline.style.width = \`\${document.querySelector(".tab-button.active").offsetWidth + 5}px\`;
  buttonUnderline.style.left = document.querySelector(".tab-button.active").offsetLeft + "px";
  }, 300);
}



window.addEventListener("resize", AdjustUnderlineWidth);

tabButtons.forEach((tabButton, index) => {
  tabButton.addEventListener("click", () => {
    openTab(\`tab\${index + 1}\`);
  });
});

function openTab(tabName) {
  tabContents.forEach((tabContent) => {
    tabContent.style.display = "none";
  });

  tabButtons.forEach((tabButton) => {
    tabButton.classList.remove("active");
  });

  buttonWrapper.addEventListener("click", (e) => {
    e.stopImmediatePropagation();
    if (e.target && e.target.classList.contains("tab-button")) {
      const buttonLeft = e.target.offsetLeft;
      buttonUnderline.style.width = \`\${e.target.offsetWidth + 5}px\`;
      buttonUnderline.style.left = \`\${buttonLeft}px\`;
    }
  });

  

  document.getElementById(tabName).style.display = "block";
  document.getElementById(\`\${tabName}-button\`).classList.add("active");
}

// Show the content of the first tab by default
openTab("tab1");
AdjustUnderlineWidth();


`;
