# Elmirabel Wines Catalog

## Project Overview

**Elmirabel Wines Catalog** is a web-based e-commerce platform for a wine store called Elmirabel. The application allows users to browse a variety of wines, add products to their cart, and proceed to checkout. It is built primarily with HTML, CSS, and JavaScript.

This repository contains the source code for the storefront, including catalog browsing, cart management, and a checkout process. The design is visually oriented, with a focus on user-friendly navigation and clear presentation of product data.

## Features

- **Product Catalog:** Browse a selection of wines with images, names, and prices.
- **Shopping Cart:** Add wines to a shopping cart and view cart contents.
- **Checkout Flow:** Proceed from cart to checkout, with an order summary and payment prompt.
- **Responsive Layout:** Designed to work on both desktop and mobile devices.
- **Navigation:** Easy access to all sections—shop, reservation, events, and contact.
- **Contact & Socials:** Store address, contact info, and social media links in the footer.

## Installation

### Prerequisites

- A modern web browser (Chrome, Firefox, Edge, Safari)
- [Optional] A local web server for local development (e.g., VS Code Live Server, Python's `http.server`, etc.)

### Steps

```bash
# Clone the repository
git clone https://github.com/ayobamshy/elmirabel.git
cd elmirabel

# (Optional) Start a local web server to avoid CORS issues with local files
# For Python 3.x
python -m http.server 8000

# Then, open your browser and go to:
# http://localhost:8000/
```

## Usage

- Open `index.html` or `catalog.html` in your browser to start browsing products.
- Add items to your cart and review your cart on `cart.html`.
- Proceed to `checkout.html` to view your order summary and simulate payment.
- Navigate between pages using the navigation bar.

## Project Structure

```
elmirabel/
├── catalog.html      # Product catalog page
├── cart.html         # Shopping cart page
├── checkout.html     # Checkout and order summary page
├── reservation.html  # Reservation/contact page
├── events.html       # Events information page
├── data/
│   ├── catalog.js    # List of wine products (JavaScript array)
│   └── cart.js       # Shopping cart data structure
├── scripts/
│   └── catalog.js    # Catalog interactivity and logic
├── styles/
│   ├── header-footer.css
│   ├── catalog.css
│   ├── cart.css
│   └── checkout.css
├── images/           # Product, logo, and icon images
└── ...
```

## Contribution Guidelines

Contributions are welcome! To contribute:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature-name`).
3. Commit your changes (`git commit -am 'Describe your change'`).
4. Push to your branch (`git push origin feature/your-feature-name`).
5. Open a Pull Request describing your changes.

Please ensure your code follows the existing style and structure.

## License

[Specify your license here, e.g., MIT, Apache 2.0, etc.]
See the [LICENSE](LICENSE) file for details.

> _This documentation was generated based on the source code and file structure of the project._
