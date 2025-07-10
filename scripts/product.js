

document.addEventListener('DOMContentLoaded', function() {
  var prodId = localStorage.getItem('productId');
  var clickedProduct = catalog.find(function(product) { return String(product.id) === String(prodId); });
  if (clickedProduct) {
    displayProduct(clickedProduct);
  } else {
    document.querySelector('.js-product-container').innerHTML = '<p>Product not found.</p>';
  }
});

function displayProduct(product) {
  var productContainer = document.querySelector('.js-product-container');
  if (!product) {
    productContainer.innerHTML = '<div class="empty-message" style="text-align:center; width:100%; padding:2rem; color:#888;">Product not found.</div>';
    return;
  }
  productContainer.innerHTML = `
    <div class="product-item">
      <img src="${product.image}" alt="${product.name}" loading="lazy" data-product-id="${product.id}">
    </div>
    <div class="product-price">
      <h2>${product.name}</h2>
      <p>NGN ${(Math.round(product.price)/100).toFixed(2)}</p>
      <button onclick="addToCartFromProduct(${product.id})">Add to Cart</button>
      <a href="catalog.html"><button>Continue Shopping</button></a>
    </div>
  `;
}

function addToCartFromProduct(productId) {
  var product = catalog.find(function(p) { return p.id === productId; });
  if (!product) {
    alert('Product not found.');
    return;
  }
  if (window.addToCart) {
    window.addToCart(product);
    alert(product.name + ' added to cart!');
  } else {
    alert('Cart functionality is not available.');
  }
}
}