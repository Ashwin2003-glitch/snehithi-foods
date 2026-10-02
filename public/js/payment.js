// ================================================================
// SNEHITHI HOME GROWN FOODS - Payment (UPI Only)
// ================================================================

async function initiatePayment() {
  const name    = document.getElementById("custName")?.value.trim();
  const phone   = document.getElementById("custPhone")?.value.trim();
  const address = document.getElementById("custAddress")?.value.trim();
  const pincode = document.getElementById("custPincode")?.value.trim();
  const email   = document.getElementById("custEmail")?.value.trim();
  const utr     = document.getElementById("utrNumber")?.value.trim();

  // Validation
  if (!name || !phone || !address || !pincode) {
    showToast("Please fill in all required fields!", "error"); return;
  }
  if (!/^\d{10}$/.test(phone)) {
    showToast("Enter a valid 10-digit phone number!", "error"); return;
  }
  if (cart.length === 0) {
    showToast("Your cart is empty!", "error"); return;
  }

  const total = getCartTotal();

  // For free items, skip UTR
  if (total > 0 && !utr) {
    showToast("Please enter your UPI Transaction ID after paying!", "error");
    document.getElementById("utrNumber")?.focus();
    return;
  }

  const orderData = {
    name, phone, address, pincode, email,
    items:         [...cart],
    total,
    paymentMethod: "UPI",
    utrNumber:     utr || "Free Order",
  };

  placeOrder(orderData);
}

function placeOrder(orderData) {
  const btn = document.getElementById("placeOrderBtn");
  if (btn) {
    btn.disabled = true;
    btn.innerHTML = `<i class="fas fa-spinner fa-spin"></i> Placing Order...`;
  }
  setTimeout(() => {
    sendWhatsAppNotifications(orderData);
    clearCart();
    window.location.href =
      "order-success.html?name=" + encodeURIComponent(orderData.name) +
      "&utr=" + encodeURIComponent(orderData.utrNumber) +
      "&total=" + orderData.total;
  }, 800);
}
