/*
- Get the catalog container
- Put a div that contains an anchor image and two paragraphs
- Do it Iteratively
*/


function renderCatalog(products) {
  const wineContainerDiv = document.querySelector('.js-catalog-container');
  wineContainerDiv.innerHTML = '';
  if (products.length === 0) {
    wineContainerDiv.innerHTML = '<div class="empty-message" style="text-align:center; width:100%; padding:2rem; color:#888;">No products found. Try a different search or filter.</div>';
    return;
  }
  products.forEach(function(product) {
    wineContainerDiv.innerHTML += `
      <div class="product-item">
        <a href="product.html">
          <img src="${product.image}" alt="${product.name}" loading="lazy" onclick="displayProduct(event)" data-product-id=${product.id}>
        </a>
        <p>${product.name}</p>
        <p>NGN ${(Math.round(product.price)/100).toFixed(2)}</p>
        <button onclick="addToCartFromCatalog(${product.id})">Add to Cart</button>
      </div>`;
  });
}

// Helper to add to cart from catalog page
function addToCartFromCatalog(productId) {
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
      </div> 
    `;
  });
}

function filterCatalog() {
  const searchValue = document.getElementById('searchInput').value.toLowerCase();
  const priceValue = document.getElementById('priceFilter').value;
  let filtered = catalog.filter(product => product.name.toLowerCase().includes(searchValue));
  if (priceValue !== 'all') {
    if (priceValue === '9000000+') {
      filtered = filtered.filter(product => product.price > 9000000);
    } else {
      const [min, max] = priceValue.split('-').map(Number);
      filtered = filtered.filter(product => product.price >= min && product.price < max);
    }
  }
  renderCatalog(filtered);
}

document.addEventListener('DOMContentLoaded', function() {
  renderCatalog(catalog);
  const searchInput = document.getElementById('searchInput');
  const priceFilter = document.getElementById('priceFilter');
  if (searchInput && priceFilter) {
    searchInput.addEventListener('input', filterCatalog);
    priceFilter.addEventListener('change', filterCatalog);
  }
});

function displayProduct(event){
    localStorage.setItem('productId', event.target.dataset.productId);
    console.log(localStorage.getItem('productId'));
    
}

