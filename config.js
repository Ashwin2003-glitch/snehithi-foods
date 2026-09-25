// ================================================================
// SNEHITHI HOME GROWN FOODS - Business Configuration
// ================================================================

const DEFAULT_CONFIG = {
  storeName:      "SNEHITHI Home grown foods",
  tagline:        "Fresh. Organic. Delivered.",
  logoIcon:       "🌿",
  ownerWhatsApp:  "919171133442",
  ownerEmail:     "Snehithi.hr.helpdesk@gmail.com",
  phone:          "+91 9171133442",
  address:        "Your Store Address Here",
  city:           "Your City, State",
  currency:       "INR",
  currencySymbol: "₹",
  adminPin:       "9171", // Default Owner PIN

  // ── UPI Payment ──────────────────────────────────────────────
  upiId:         "deepa30101988@okhdfcbank",
  upiName:       "SNEHITHI Home grown foods",

  // ── Social Media & Hours ─────────────────────────────────────
  instagram:      "#",
  facebook:       "#",
  whatsappLink:   "https://wa.me/919171133442",
  hours:          "Mon-Sat: 9:00 AM - 6:00 PM",
  announcement:   "🏡 100% Traditional Homemade Foods | Freshly Prepared & Pure"
};

// Automatically read any updates saved from the Owner Dashboard
const savedConfig = JSON.parse(localStorage.getItem("snehithi_config") || "null");
const CONFIG = Object.assign({}, DEFAULT_CONFIG, savedConfig || {});
