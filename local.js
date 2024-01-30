const addProduct = () => {
    const product = document.getElementById('product-field');
    const productValue = product.value;
    console.log(productValue) 

    const quantity = document.getElementById('quantity-field');
    const quantityValue = quantity.value;
    console.log(quantityValue)
    displayProduct(productValue, quantityValue)
    saveToLocalStorage(productValue, quantityValue);
}


const displayProduct = (product, quantity) => {
    const productContainer = document.getElementById('product-container');
    const li = document.createElement('li');
    li.innerText = `${product}, ${quantity}`;
    productContainer.appendChild(li);
}


//Local Storage Part Start Here

const getStoredShoppingCart = () => {
    let cart = {};
    if(localStorage.getItem('cart')){
        cart = JSON.parse(localStorage.getItem('cart'));
    }
    return cart;
}


const saveToLocalStorage = (product, quantity) => {
    const cart = getStoredShoppingCart();
    console.log(cart)
    cart[product] = quantity;
    localStorage.setItem('cart', JSON.stringify(cart))
}


const displayFromLocalStorage = () => {
    const savedCart = getStoredShoppingCart();
    for(const product in savedCart){
        const productName = product;
        const quantityNumber = savedCart[product]
        displayProduct(productName, quantityNumber)
    }
}

displayFromLocalStorage();