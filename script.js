let cart = JSON.parse(localStorage.getItem("cart")) || [];

function addToCart(name, price) {
    cart.push({ name, price });
    localStorage.setItem("cart", JSON.stringify(cart));
    updateCartCount();
    alert(name + " added to cart!");
}

function updateCartCount() {
    const cartCountEl = document.getElementById("cart-count");
    if (cartCountEl) {
        cartCountEl.innerText = cart.length;
    }
}

function loadCart() {
    const cartItems = JSON.parse(localStorage.getItem("cart")) || [];
    const list = document.getElementById("cart-items");
    const totalEl = document.getElementById("cart-total");

    list.innerHTML = "";
    let total = 0;

    cartItems.forEach(item => {
        const li = document.createElement("li");
        li.innerText = `${item.name} – ₹${item.price}`;
        list.appendChild(li);
        total += item.price;
    });

    totalEl.innerText = total;
}

updateCartCount();
