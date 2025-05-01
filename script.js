let cartCount = 0;
let cartItems = [];
let cartTotal = 0;

function addToCart(productName, price) {
  cartItems.push({ name: productName, price: price });
  cartCount++;
  cartTotal += price;
  document.getElementById('cart-count').textContent = cartCount;
}

function showCart() {
  const cartSection = document.getElementById('cart');
  const cartList = document.getElementById('cart-items');
  cartList.innerHTML = "";
  cartItems.forEach(item => {
    const li = document.createElement('li');
    li.textContent = ${item.name} - ${item.price} lei;
    cartList.appendChild(li);
  });
  document.getElementById('cart-total').textContent = cartTotal;
  cartSection.classList.remove('hidden');
}

function hideCart() {
  document.getElementById('cart').classList.add('hidden');
}

function checkout() {
  if (cartItems.length === 0) {
    alert("Coșul este gol!");
    return;
  }
  alert("Comanda a fost plasată cu succes!");
  cartItems = [];
  cartCount = 0;
  cartTotal = 0;
  document.getElementById('cart-count').textContent = 0;
  hideCart();
}

function filterProducts(category) {
  const products = document.querySelectorAll('.product');
  products.forEach(product => {
    if (category === 'toate' || product.dataset.category === category) {
      product.style.display = 'block';
    } else {
      product.style.display = 'none';
    }
  });
}

function showLogin() {
  document.getElementById('login').classList.remove('hidden');
}

function