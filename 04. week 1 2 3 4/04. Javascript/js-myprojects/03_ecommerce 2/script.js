document.addEventListener('DOMContentLoaded', () => {

let productList = document.getElementById('product-list')
let cartItems = document.getElementById('cart-items')
let emptyCartMessage = document.getElementById('empty-cart')
let cartTotal = document.getElementById('cart-total')
let totalPriceDisplay = document.getElementById('total-price')
let checkOutBTN = document.getElementById('checkout-btn')


let products = [
    {id: 1, name: 'product 1', price: 20.99},
    {id: 2, name: 'product 2', price: 49.99},
    {id: 3, name: 'product 3', price: 99.99}

]


let cart = [];

products.forEach(product => {

    let Product = document.createElement('div')
    Product.classList.add('product')
    Product.innerHTML = ` <span>${product.name} - Price:$${product.price}</span>
                          <button data-id="${product.id}">Add To Cart</button>`
    
    productList.appendChild(Product)
    
});

//whenever there is event bubbling pass the event in func.
productList.addEventListener('click', (e) => {
    if(e.target.tagName === "BUTTON"){ //Make sure to add ===
       let productId = parseInt(e.target.getAttribute('data-id'));  //here i made a mistake. i was using productList.getAttribute('data-id') instead of e.target.getAttribute('data-product-id')
       
       let finalProduct = products.find(p => p.id == productId);
       addToCart(finalProduct)
        
        
    }
})


function addToCart(product){
    cart.push(product);
    renderCart();

}

function renderCart(){

    cartItems.innerHTML = '';
    let totalPrice = 0;



    if(cart.length > 0){
        cartTotal.classList.remove('hidden')  //hidden is just a CSS class in which we just added display:none
        emptyCartMessage.classList.add('hidden')

        
        //cartItem.classList.add('product')

        

        cart.forEach(item => {
            let cartItem = document.createElement('div')
            cartItem.innerHTML = `${item.name} - Price:$${item.price}`;

            cartItems.appendChild(cartItem)

            //let totalPrice = 0; //can't be used here otherwise it will be reset to 0 every time in every iteration.

            totalPrice += item.price
            
            totalPriceDisplay.textContent = `${totalPrice}`

            
        });

        


    }else{
        cartTotal.classList.add('hidden')
        emptyCartMessage.classList.remove('hidden')
        totalPriceDisplay.textContent = `$0.00`
    }
}


checkOutBTN.addEventListener('click', () => {

    alert('Order Placed')
    cart = [];
     //cart.forEach(element => {
         //cart.pop(element);  //due to some reasons it is not working.
     //});

    renderCart();
})






})

//Find those methods in which we have to use quotes. Actually just hover over the (), u will know what input they take