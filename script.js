let cart = JSON.parse(localStorage.getItem("cart")) || [];

function addToCart(name, price) {
    cart.push({ name, price });
    localStorage.setItem("cart", JSON.stringify(cart));
    updateCartCount();
    alert(name + " added to cart!");
}

function updateCartCount() {
    const count = cart.length;
    const cartCountEl = document.getElementById("cart-count");
    if (cartCountEl) {
        cartCountEl.innerText = count;
    }
}

function loadCart() {
    const cartItems = JSON.parse(localStorage.getItem("cart")) || [];
    const list = document.getElementById("cart-items");
    const totalEl = document.getElementById("cart-total");

    let total = 0;
    list.innerHTML = "";

    cartItems.forEach(item => {
        const li = document.createElement("li");
        li.innerText = `${item.name} – ₹${item.price}`;
        list.appendChild(li);
        total += item.price;
    });

    totalEl.innerText = total;
}

updateCartCount();
