const apiUrl = "https://api.noroff.dev/api/v1/rainy-days";
export async function getProducts() {
    try {
        const response = await fetch(apiUrl);
        const products = await response.json();
        return products;
    } catch (error) {
        console.log(error);
    }
}
function dispalProducts(Products) {
    const productlistelements= document.getElementById("product-list");
    productliustelements.innerHTML = "";
    Products.forEach(product => {
        const productelement = document.createElement("div");
        productelement = document.createElement("div");
        productelement.className = "product";
        productelement.innerHTML = `
        <h2>${product.name}</h2>
        <p>${product.description}</p>
        <a href="product.html?id=${product.id}">View Product</a>
        :`;
        productlistelements.appendChild(productelement);
    });
}

function dispalyError(error) {
    console.log(error);
    const errorElement = document.getElementById("error");
    errorElement.innerHTML = error.message;
}