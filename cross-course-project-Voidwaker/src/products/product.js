const apiUrl = "https://api.noroff.dev/api/v1/rainy-days";

async function fetchProducts() {
    try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const products = await response.json();
        displayProducts(products);
    } catch (error) {
        displayError(error);
    }
}

function displayProducts(products) {
    const productContainer = document.getElementById("product-container");
    productContainer.innerHTML = "";
    products.forEach(product => {
        const productElement = document.createElement("div");
        productElement.className = "product-container";
        productElement.innerHTML = `
            <h2>${product.name}</h2>
            <p>${product.description}</p>
            <a href="product-detail.html?id=${product.id}">View Details</a>
        `;
        productContainer.appendChild(productElement);
    });
}

function displayError(error) {
    const errorElement = document.getElementById("error");
    if (errorElement) {
        errorElement.textContent = "Failed to fetch products: " + error.message;
    } else {
        console.error("Failed to fetch products: " + error.message);
    }
}

async function main() {
    try {
        await fetchProducts();
    } finally {
    }
}

main();