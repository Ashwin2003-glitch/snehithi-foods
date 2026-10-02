// ================================================================
// SNEHITHI HOME GROWN FOODS - WhatsApp Order Notification
// ================================================================

function formatOrderMessage(orderData) {
  const { name, phone, address, pincode, items, total, utrNumber } = orderData;
  const date    = new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });
  const orderId = "ORD-" + Date.now().toString().slice(-6);

  let itemList = items.map(i =>
    `  • ${i.name} x${i.qty} = ${i.price === 0 ? "FREE" : CONFIG.currencySymbol + (i.price * i.qty).toLocaleString("en-IN")}`
  ).join("\n");

  const isFree = total === 0;

  const ownerMsg =
    `🌿 *NEW ORDER - ${CONFIG.storeName}*\n` +
    `━━━━━━━━━━━━━━━━━━━━━\n` +
    `📦 *Order ID:* ${orderId}\n` +
    `📅 *Date:* ${date}\n` +
    `━━━━━━━━━━━━━━━━━━━━━\n` +
    `👤 *Customer:* ${name}\n` +
    `📱 *Phone:* +91 ${phone}\n` +
    `📍 *Address:* ${address}, Pincode: ${pincode}\n` +
    `━━━━━━━━━━━━━━━━━━━━━\n` +
    `🛒 *Items Ordered:*\n${itemList}\n` +
    `━━━━━━━━━━━━━━━━━━━━━\n` +
    `💰 *Total Amount:* ${isFree ? "FREE" : CONFIG.currencySymbol + total.toLocaleString("en-IN")}\n` +
    `💳 *Payment Status:* ${isFree ? "Free Order" : "Paid through UPI"}\n` +
    (!isFree ? `🔖 *UPI Ref / UTR No:* ${utrNumber}\n` : "") +
    `━━━━━━━━━━━━━━━━━━━━━`;

  const customerMsg =
    `🌿 *Order Confirmed! - ${CONFIG.storeName}*\n` +
    `━━━━━━━━━━━━━━━━━━━━━\n` +
    `Hi ${name}! Your order has been placed successfully. 🎉\n\n` +
    `📦 *Order ID:* ${orderId}\n` +
    `━━━━━━━━━━━━━━━━━━━━━\n` +
    `🛒 *Your Items:*\n${itemList}\n` +
    `━━━━━━━━━━━━━━━━━━━━━\n` +
    `💰 *Total Paid:* ${isFree ? "FREE" : CONFIG.currencySymbol + total.toLocaleString("en-IN")}\n` +
    `💳 *Payment Mode:* ${isFree ? "Free Order" : "Paid through UPI"}\n` +
    (!isFree ? `🔖 *Transaction / UTR:* ${utrNumber}\n` : "") +
    `📍 *Delivery Address:* ${address}, ${pincode}\n` +
    `━━━━━━━━━━━━━━━━━━━━━\n` +
    `We will verify your UPI payment and process your dispatch quickly. Thank you for choosing ${CONFIG.storeName}! 🙏`;

  return { ownerMsg, customerMsg, orderId };
}

function sendWhatsAppNotifications(orderData) {
  const { phone } = orderData;
  const { ownerMsg, customerMsg } = formatOrderMessage(orderData);

  // Send to Owner
  const ownerUrl = `https://wa.me/${CONFIG.ownerWhatsApp}?text=${encodeURIComponent(ownerMsg)}`;
  window.open(ownerUrl, "_blank");

  // Send to Customer (slight delay)
  setTimeout(() => {
    const customerPhone = phone.replace(/\D/g, "");
    const fullPhone     = customerPhone.startsWith("91") ? customerPhone : "91" + customerPhone;
    const customerUrl   = `https://wa.me/${fullPhone}?text=${encodeURIComponent(customerMsg)}`;
    window.open(customerUrl, "_blank");
  }, 1500);

  // Save order locally
  const orders = JSON.parse(localStorage.getItem("snehithi_orders") || "[]");
  orders.push({ date: new Date().toISOString(), ...orderData });
  localStorage.setItem("snehithi_orders", JSON.stringify(orders));
}
