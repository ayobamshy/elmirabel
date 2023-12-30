
prodId = localStorage.getItem('productId');
console.log(localStorage.getItem('productId'));
var clickedProduct = '';
catalog.forEach((product) => {
    if (prodId == product.id) {
        clickedProduct = product;
    }
displayProduct(clickedProduct);
});


function displayProduct(product){
    productContainer = document.querySelector('.js-product-container');
    productContainer.innerHTML = `
        <div class="product-item">
            <a href="#">
                <img src="${product.image}" alt="${product.name}" data-product-id=${product.id}>
            </a>
        </div>
        <div class="product-price">
            <p>${product.name}</p>
            <p>NGN ${(Math.round(product.price)/100).toFixed(2)}</p>
            <button>Add to Cart</button>
            <a href="catalog.html">
                <button>Continue Shopping</button>
            </a>
        </div>
    `;
}