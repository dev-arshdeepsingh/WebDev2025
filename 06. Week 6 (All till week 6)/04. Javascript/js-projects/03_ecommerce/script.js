document.addEventListener("DOMContentLoaded", () => {
  const products = [
    { id: 1, name: "Product 1", price: 29.99 },
    { id: 2, name: "Product 2", price: 19.99 },
    { id: 3, name: "Product 3", price: 59.999 },
  ]; //Stored or showed products as an array of objects
  //each product has 3 properties: id, name, price

  const cart = [];

  const productList = document.getElementById("product-list");
  const cartItems = document.getElementById("cart-items");
  const emptyCartMessage = document.getElementById("empty-cart");
  const cartTotalMessage = document.getElementById("cart-total");
  const totalPriceDisplay = document.getElementById("total-price");
  const checkOutBtn = document.getElementById("checkout-btn");

  products.forEach((product) => {
    const productDiv = document.createElement("div"); //create a new div element for each product so that it can be displayed to website.
    productDiv.classList.add("product");
    productDiv.innerHTML = `
    <span>${product.name} - $${product.price.toFixed(2)}</span>
    <button data-id="${product.id}">Add to cart</button>`;   //Here we are adding Id to the button so that when button is clicked, we can identify which product is clicked.
    
    productList.appendChild(productDiv);
  });

//With the for-each loop used above, we can directly add new product to array named products & the product will automatically appear on web page.
// QuesForYou: How are we managing event bubbling here below? As we know when we click on a button, the event bubbles up to the parent element ie the div. So, how are we managing this? The answer is that we are using the event.target.tagName === "BUTTON" to check if the clicked element is a button.
  productList.addEventListener("click", (e) => {
    if (e.target.tagName === "BUTTON") {
      const productId = parseInt(e.target.getAttribute("data-id")); //now, somehow the data-id was converted into string. That's why we used parseInt to convert it back to number. But overall, we are just grabbing the id of button that was clicked.
      const product = products.find((p) => p.id === productId); //find() is used to find the product by looping through every element p. The 1st p whose p.id === productId will be returned & stored in variable product. Its means element(p) of array products[] whose p.id === productId(extracted from button) will be returned & stored in variable product.
      addToCart(product);
    }
  });

  function addToCart(product) {
    cart.push(product);
    renderCart();
  }

  function renderCart() {     //This function is used to render the cart items on the web page. Render means to show or display.
    cartItems.innerText = "";   //The same can be done by adding hidden class ie emptyCartMessage.classList.add("hidden");
    let totalPrice = 0;

    if (cart.length > 0) {
      emptyCartMessage.classList.add("hidden");
      cartTotalMessage.classList.remove("hidden");
      cart.forEach((item, index) => {
        totalPrice += item.price;
        const cartItem = document.createElement("div");
        cartItem.innerHTML = `
        ${item.name} - $${item.price.toFixed(2)}
        `;
        cartItems.appendChild(cartItem);
        totalPriceDisplay.textContent = `${totalPrice.toFixed(2)}`;
      });
    } else {
      emptyCartMessage.classList.remove("hidden");
      totalPriceDisplay.textContent = `$0.00`;
    }
  }

  checkOutBtn.addEventListener("click", () => {
    // cart.forEach(element => {
    //   cart.pop()
      
    // });


    cart.length = 0;        //or we can also set a loop for popping out all the items from cart as done above in comments
    alert("Checkout successfully");
    renderCart();   //so that, it's else part can execute.
  });
});

//for-each: It runs a function for each element in the array. 
//tofixed: It rounds the number to a specified number of decimal places. eg: 1.23456789.toFixed(2) = 1.23
