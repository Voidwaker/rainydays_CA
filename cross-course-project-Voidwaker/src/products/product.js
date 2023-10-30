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
    productContainer.innerHTML = ""; // Clear any existing content
    products.forEach(product => {
    const productElement = document.createElement("div");
    productElement.className = "product-container";

    const imageElement = document.createElement("img");
      imageElement.src = product.image; // Assuming 'image' is the key in your product object that holds the image URL
    imageElement.alt = product.name;

    const nameElement = document.createElement("h2");
    nameElement.textContent = product.name;

    const descriptionElement = document.createElement("p");
    descriptionElement.textContent = product.description;

    const buttonElement = document.createElement("a");
    buttonElement.href = `product-detail.html?id=${product.id}`;
    buttonElement.textContent = "View Details";
    buttonElement.className = "view-details-button";

    productElement.appendChild(imageElement);
    productElement.appendChild(nameElement);
    productElement.appendChild(descriptionElement);
    productElement.appendChild(buttonElement);

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