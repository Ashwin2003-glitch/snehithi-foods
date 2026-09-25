// ================================================================
// JAYAMA FOODS - Cart Management (localStorage)
// ================================================================

let cart = JSON.parse(localStorage.getItem("jayama_cart") || "[]");

function saveCart() {
  localStorage.setItem("jayama_cart", JSON.stringify(cart));
  updateCartBadge();
}

function updateCartBadge() {
  const count = cart.reduce((sum, item) => sum + item.qty, 0);
  document.querySelectorAll(".cart-badge").forEach(el => {
    el.textContent = count;
    el.style.display = count > 0 ? "flex" : "none";
  });
}

function addToCart(productId) {
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product || !product.inStock) return;
  const existing = cart.find(item => item.id === productId);
  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({ id: product.id, name: product.name, price: product.price, qty: 1, unit: product.unit });
  }
  saveCart();
  showToast(`"${product.name}" added to cart!`);
}

function removeFromCart(productId) {
  cart = cart.filter(item => item.id !== productId);
  saveCart();
  renderCart();
}

function updateQty(productId, delta) {
  const item = cart.find(i => i.id === productId);
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0) removeFromCart(productId);
  else { saveCart(); renderCart(); }
}

function getCartTotal() {
  return cart.reduce((sum, item) => sum + item.price * item.qty, 0);
}

function clearCart() {
  cart = [];
  saveCart();
}

function renderCart() {
  const container  = document.getElementById("cartItems");
  const emptyState = document.getElementById("cartEmpty");
  const cartBody   = document.getElementById("cartBody");
  const totalEl    = document.getElementById("cartTotal");
  const subTotalEl = document.getElementById("subTotal");

  if (!container) return;

  if (cart.length === 0) {
    if (emptyState) emptyState.style.display = "flex";
    if (cartBody)   cartBody.style.display   = "none";
    return;
  }

  if (emptyState) emptyState.style.display = "none";
  if (cartBody)   cartBody.style.display   = "block";

  container.innerHTML = cart.map(item => `
    <div class="cart-item" data-id="${item.id}">
      <div class="cart-item-info">
        <span class="cart-item-name">${item.name}</span>
        <span class="cart-item-unit">${item.unit}</span>
      </div>
      <div class="cart-item-controls">
        <button class="qty-btn" onclick="updateQty(${item.id}, -1)">-</button>
        <span class="qty-value">${item.qty}</span>
        <button class="qty-btn" onclick="updateQty(${item.id}, 1)">+</button>
      </div>
      <div class="cart-item-price">
        ${item.price === 0
          ? `<span class="price-free">FREE</span>`
          : `${CONFIG.currencySymbol}${(item.price * item.qty).toFixed(2)}`}
      </div>
      <button class="cart-item-remove" onclick="removeFromCart(${item.id})">
        <i class="fas fa-trash-alt"></i>
      </button>
    </div>
  `).join("");

  const total = getCartTotal();
  if (totalEl)    totalEl.textContent    = total === 0 ? "FREE" : CONFIG.currencySymbol + total.toFixed(2);
  if (subTotalEl) subTotalEl.textContent = total === 0 ? "FREE" : CONFIG.currencySymbol + total.toFixed(2);
}

// Toast Notification
function showToast(message, type = "success") {
  const existing = document.querySelector(".toast");
  if (existing) existing.remove();
  const toast = document.createElement("div");
  toast.className = `toast toast-${type}`;
  toast.innerHTML = message;
  document.body.appendChild(toast);
  setTimeout(() => toast.classList.add("show"), 10);
  setTimeout(() => { toast.classList.remove("show"); setTimeout(() => toast.remove(), 300); }, 3000);
}

// Navbar
function initNavbar() {
  const navbar   = document.getElementById("navbar");
  const toggle   = document.getElementById("navToggle");
  const navLinks = document.getElementById("navLinks");
  if (navbar) {
    window.addEventListener("scroll", () => navbar.classList.toggle("scrolled", window.scrollY > 50));
  }
  if (toggle && navLinks) {
    toggle.addEventListener("click", () => navLinks.classList.toggle("open"));
  }
}

document.addEventListener("DOMContentLoaded", () => {
  updateCartBadge();
  initNavbar();
  renderCart();
});
