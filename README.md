# NOVAXIA Thank You Pages

This repository hosts custom thank-you pages used in conjunction with a JotForm submission flow.  
After a user completes the form, JotForm redirects them to the according page and dynamically injects the
generated PDF link into the download button.

## How it works
- JotForm redirects the user using the parameter:  
  `?pdfUrl={URLENCODE:pdfUrl}`
- The HTML page reads the URL parameter and updates the **Download PDF** button automatically.
- The styling is customized to match the NOVAXIA Property Investment Project design.

## Files
- `index.html` — Main thank-you page (styled with embedded CSS).
- `residential.html` - Thank-you page specifically for residential properties (styles with embedded CSS).
- `industrial.html` - Thank-you page specifically for industrial properties (styles with embedded CSS).
- `commercial.html` - Thank-you page specifically for commercial properties (styles with embedded CSS).
- Assets — Logo, images, and supporting graphics.

## Deployment
Hosted via **GitHub Pages**:
- `https://novaxiawealth.github.io/thank-you-pages/`

No build step is required. Simply edit the HTML and commit.
