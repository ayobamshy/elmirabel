/*
- Get the catalog container
- Put a div that contains an anchor image and two paragraphs
- Do it Iteratively
*/

wineContainerDiv = document.querySelector('.js-catalog-container');
wineContainerDiv.innerHTML = '';
catalog.forEach((product, index) => {
    wineContainerDiv.innerHTML += `
        <div class="product-item">
            <a href="product.html">
                <img src="${product.image}" alt="${product.name}" onclick="displayProduct(event)" data-product-id=${product.id}>
            </a>
            <p>${product.name}</p>
            <p>NGN ${(Math.round(product.price)/100).toFixed(2)}</p>
            <button>Add to Cart</button>
        </div> 
    `
});

function displayProduct(event){
    localStorage.setItem('productId', event.target.dataset.productId);
    console.log(localStorage.getItem('productId'));
    
}

