export const PdfPreviewCss = `
.main-lp-wrapper {
    max-width: 1800px !important;
    margin: 0 auto !important;
  }

  .main-lp-wrapper * {
    max-width: 1800px !important;
  }

  iframe {
    min-height: 80vh;
    -webkit-overflow-scrolling: touch !important;
    overflow: scroll !important;
  }
  .desktop-pdf {
    display: none;
  }

  .mobile-pdf {
    display: block;
  }
  @media (min-width: 700px) {
    .mobile-pdf {
      display: none;
    }

    .desktop-pdf {
      display: block;
    }

    .main-lp-wrapper {
      padding: 0 2rem !important;
    }
  }

`;
