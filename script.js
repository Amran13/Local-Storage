//get input value from input field
function addProduct() {
    const productField = document.getElementById('product-field');
    const qunatiyField = document.getElementById('quantity-field');
    const product = productField.value;
    console.log(product)
    const quantityNumber = qunatiyField.value;
    console.log(quantityNumber)
    displayUI(product, quantityNumber)
    saveToLocalStorage(product, quantityNumber)
}

// display the input field data 
const displayUI = (product, value) => {
    const productContainer = document.getElementById('product-container');
    const li = document.createElement('li');
    li.innerText = `${product} ${value}`
    productContainer.appendChild(li)
}


// **********Local Storage Start Here************** 
// **********Local Storage Start Here************** 

/* retrieve the cart from local storage, if there is no cart
    then set it with an empty object and return the cart */
const getStoredCart = () => {
    let cart = {};
    if(localStorage.getItem('cart')){
        cart = JSON.parse(localStorage.getItem('cart'));
    }
    return cart;
}

// Save the data to local storage
const saveToLocalStorage = (key, value) => {
    const cart = getStoredCart();
    cart[key] = value;
    console.log(cart)
    localStorage.setItem('cart', JSON.stringify(cart))
}

// retrieve data from local storage and display them
const displayFromLocalStorage = () => {
    const cart = getStoredCart();
    for(const prop in cart){
        const property = prop;
        const quantity = cart[prop]
        displayUI(property, quantity)
    }
}

displayFromLocalStorage();

