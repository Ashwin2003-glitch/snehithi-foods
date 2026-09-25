// ================================================================
// SNEHITHI HOME GROWN FOODS - Product Data
// ================================================================

const DEFAULT_PRODUCTS = [

  // ── LADOOS ───────────────────────────────────────────────────
  {
    id: 1, name: "Breakfast Ladoos", category: "Ladoos",
    price: 800, originalPrice: 800, image: "images/products/1-breakfast-ladoos.jpg",
    description: "A wholesome mix of nutritious ingredients crafted into energy-packed breakfast ladoos. Perfect start to your day!",
    badge: "Popular", unit: "1 kg", inStock: true, featured: true, rating: 5, reviews: 12,
  },
  {
    id: 2, name: "Pearl Millet Ladoos", category: "Ladoos",
    price: 750, originalPrice: 750, image: "images/products/2-pearl-millet-ladoos.jpg",
    description: "Made from organic pearl millet (kambu), rich in iron and fibre. A traditional healthy treat for all ages.",
    badge: "", unit: "1 kg", inStock: true, featured: false, rating: 5, reviews: 8,
  },
  {
    id: 3, name: "Black Urad Ladoos", category: "Ladoos",
    price: 750, originalPrice: 750, image: "images/products/3-black-urad-ladoos.jpg",
    description: "Protein-rich black urad dal ladoos — a classic recipe known for strength and nourishment.",
    badge: "", unit: "1 kg", inStock: true, featured: false, rating: 4, reviews: 6,
  },
  {
    id: 4, name: "Sprouted Ragi Ladoos", category: "Ladoos",
    price: 700, originalPrice: 700, image: "images/products/4-sprouted-ragi-ladoos.jpg",
    description: "Sprouted ragi (finger millet) ladoos packed with calcium and natural goodness. Great for kids and adults.",
    badge: "", unit: "1 kg", inStock: true, featured: true, rating: 5, reviews: 10,
  },
  {
    id: 5, name: "Wheat Ladoos", category: "Ladoos",
    price: 550, originalPrice: 550, image: "images/products/5-wheat-ladoos.jpg",
    description: "Traditional whole wheat ladoos made with natural jaggery and ghee. A simple, wholesome sweet.",
    badge: "", unit: "1 kg", inStock: true, featured: false, rating: 4, reviews: 5,
  },
  {
    id: 6, name: "Sesame Ladoo", category: "Ladoos",
    price: 600, originalPrice: 600, image: "images/products/6-sesame-ladoo.jpg",
    description: "Crunchy and delicious sesame (ellu) ladoos — high in calcium and antioxidants. A guilt-free snack!",
    badge: "", unit: "1 kg", inStock: true, featured: false, rating: 4, reviews: 7,
  },
  {
    id: 7, name: "Green Dhal Ladoos", category: "Ladoos",
    price: 650, originalPrice: 650, image: "images/products/7-green-dhal-ladoos.jpg",
    description: "Nutritious green moong dal ladoos, lightly spiced and sweetened with jaggery. High in plant protein.",
    badge: "", unit: "1 kg", inStock: true, featured: false, rating: 4, reviews: 4,
  },
  {
    id: 8, name: "Nuts Ladoos", category: "Ladoos",
    price: 1400, originalPrice: 1400, image: "images/products/8-nuts-ladoos.jpg",
    description: "Premium assorted nuts ladoos loaded with cashews, almonds, walnuts and pistachios. A luxurious healthy treat.",
    badge: "Premium", unit: "1 kg", inStock: true, featured: true, rating: 5, reviews: 15,
  },

  // ── HEALTH & NUTRITION ────────────────────────────────────────
  {
    id: 9, name: "ABC Malt", category: "Health & Nutrition",
    price: 400, originalPrice: 400, image: "images/products/9-abc-malt.jpg",
    description: "A power-packed Amla, Banana & Carrot malt blend — a natural energy booster for kids and adults.",
    badge: "Bestseller", unit: "250 g", inStock: true, featured: true, rating: 5, reviews: 20,
  },
  {
    id: 10, name: "Health Mix", category: "Health & Nutrition",
    price: 800, originalPrice: 800, image: "images/products/10-health-mix.jpg",
    description: "A multi-grain health mix made from sprouted cereals and millets — nutritious, easy to prepare and delicious.",
    badge: "Popular", unit: "1 kg", inStock: true, featured: true, rating: 5, reviews: 18,
  },

  // ── SPICES & ESSENTIALS ───────────────────────────────────────
  {
    id: 38, name: "Naturally Prepared Asafoetida", category: "Spices & Essentials",
    price: 65, originalPrice: 65, image: "images/products/38-asafoetida-50g.jpg",
    description: "100% Pure, naturally prepared Asafoetida (Perungayam). Zero maida, zero wheat, zero preservatives, and no added colours or flavours. Aromatic and medicinal.",
    badge: "100% Pure", unit: "50 g", inStock: true, featured: true, rating: 5, reviews: 18,
  },
  {
    id: 39, name: "Naturally Prepared Asafoetida", category: "Spices & Essentials",
    price: 125, originalPrice: 125, image: "images/products/39-asafoetida-100g.jpg",
    description: "100% Pure, naturally prepared Asafoetida (Perungayam). Zero maida, zero wheat, zero preservatives, and no added colours or flavours. Aromatic and medicinal.",
    badge: "Best Value", unit: "100 g", inStock: true, featured: true, rating: 5, reviews: 24,
  },

  // ── TRADITIONAL KANJI & MIXES ────────────────────────────────
  {
    id: 30, name: "Karuppu Kavuni Kanji Mix", category: "Traditional Kanji & Mixes",
    price: 130, originalPrice: 130, image: "images/products/30-karuppu-kavuni-kanji.jpg",
    description: "Antioxidant-rich black rice (Karuppu Kavuni) kanji mix — royal heritage rice known for strength, immunity and diabetes care.",
    badge: "Heritage", unit: "250 g", inStock: true, featured: true, rating: 5, reviews: 14,
  },
  {
    id: 31, name: "Rathasali Rice Kanji Mix", category: "Traditional Kanji & Mixes",
    price: 130, originalPrice: 130, image: "images/products/31-rathasali-rice-kanji.jpg",
    description: "Medicinal ancient red rice (Rathasali) kanji mix known in Ayurveda to purify blood, boost hemoglobin and restore vitality.",
    badge: "Ayurvedic", unit: "250 g", inStock: true, featured: true, rating: 5, reviews: 11,
  },
  {
    id: 32, name: "Kollu Barley Kanji Mix", category: "Traditional Kanji & Mixes",
    price: 130, originalPrice: 130, image: "images/products/32-kollu-barly-kanji.jpg",
    description: "Wholesome horse gram (kollu) & pearl barley kanji mix — powerful blend for weight management, energy and cooling.",
    badge: "Slim & Fit", unit: "250 g", inStock: true, featured: true, rating: 5, reviews: 15,
  },
  {
    id: 33, name: "Varagu Rice Kanji Mix", category: "Traditional Kanji & Mixes",
    price: 110, originalPrice: 110, image: "images/products/33-varagu-rice-kanji.jpg",
    description: "Nutritious Kodo millet (Varagu) kanji mix packed with dietary fiber, minerals and vitamins for easy daily digestion.",
    badge: "Fiber Rich", unit: "250 g", inStock: true, featured: false, rating: 4, reviews: 8,
  },
  {
    id: 34, name: "Karuppu Kavuni Spicy Pongal Mix", category: "Traditional Kanji & Mixes",
    price: 150, originalPrice: 150, image: "images/products/34-karuppu-kavuni-spicy-pongal.jpg",
    description: "Savory black rice ven pongal ready mix tempered with cumin, pepper, ginger and roasted cashews. Delicious and wholesome.",
    badge: "Quick Meal", unit: "250 g", inStock: true, featured: true, rating: 5, reviews: 12,
  },
  {
    id: 35, name: "Karuppu Kavuni Sweet Pongal Mix", category: "Traditional Kanji & Mixes",
    price: 150, originalPrice: 150, image: "images/products/35-karuppu-kavuni-sweet-pongal.jpg",
    description: "Traditional sweet sakkarai pongal mix made with black rice, pure country jaggery, cardamom and aromatic spices.",
    badge: "Traditional", unit: "250 g", inStock: true, featured: true, rating: 5, reviews: 16,
  },
  {
    id: 36, name: "Karuppu Kavuni Rice Dosa Mix", category: "Traditional Kanji & Mixes",
    price: 99, originalPrice: 99, image: "images/products/36-karuppu-kavuni-dosa-mix.jpg",
    description: "Instant healthy black rice dosa mix for making crispy, nutritious, dark-purple dosas loaded with anthocyanin nutrients.",
    badge: "Best Value", unit: "250 g", inStock: true, featured: true, rating: 5, reviews: 21,
  },
  {
    id: 37, name: "Kuthiravali Kitchadi Mix", category: "Traditional Kanji & Mixes",
    price: 120, originalPrice: 120, image: "images/products/37-kuthiravali-kitchadi-mix.jpg",
    description: "Barnyard millet (Kuthiravali) savory vegetable kitchadi mix — high in iron and low in glycemic index. Quick 10-minute breakfast.",
    badge: "Healthy Diet", unit: "250 g", inStock: true, featured: true, rating: 5, reviews: 13,
  },

  // ── GHEE ─────────────────────────────────────────────────────
  {
    id: 11, name: "Pure Ghee", category: "Ghee",
    price: 900, originalPrice: 900, image: "images/products/11-pure-ghee.jpg",
    description: "100% pure cow ghee made using the traditional Bilona method. Rich in flavour, aroma and nutrients.",
    badge: "Pure", unit: "1 kg", inStock: true, featured: true, rating: 5, reviews: 25,
  },

  // ── HERBAL PRODUCTS ───────────────────────────────────────────
  {
    id: 12, name: "Medicinal Jaggery", category: "Herbal Products",
    price: 700, originalPrice: 700, image: "images/products/12-medicinal-jaggery.jpg",
    description: "Infused with medicinal herbs, this special jaggery supports digestion and boosts immunity naturally.",
    badge: "Herbal", unit: "1 kg", inStock: true, featured: true, rating: 5, reviews: 14,
  },
  {
    id: 13, name: "Herbal Hair Wash Powder", category: "Herbal Products",
    price: 800, originalPrice: 800, image: "images/products/13-herbal-hair-wash.jpg",
    description: "A blend of traditional herbs for hair cleansing — chemical-free, nourishing and gentle on the scalp.",
    badge: "Natural", unit: "1 kg", inStock: true, featured: false, rating: 4, reviews: 9,
  },
  {
    id: 14, name: "Charu Kesi Herbal Hair Oil", category: "Herbal Products",
    price: 200, originalPrice: 200, image: "images/products/14-charu-kesi-hair-oil.jpg",
    description: "Handcrafted herbal hair oil with traditional ingredients to promote hair growth and reduce hair fall.",
    badge: "New", unit: "100 ml", inStock: true, featured: true, rating: 5, reviews: 11,
  },
  {
    id: 15, name: "Herbal Body Wash Powder", category: "Herbal Products",
    price: 400, originalPrice: 400, image: "images/products/15-herbal-body-wash.jpg",
    description: "A natural soap-free body wash powder made with skin-friendly herbs. Leaves skin soft and refreshed.",
    badge: "Natural", unit: "250 g", inStock: true, featured: false, rating: 4, reviews: 7,
  },

  // ── NATURAL HONEY PRODUCTS ────────────────────────────────────
  {
    id: 16, name: "Honey", category: "Natural Honey Products",
    price: 500, originalPrice: 500, image: "images/products/16-honey.jpg",
    description: "Pure, raw, unprocessed natural honey — directly from the hive. No additives, no preservatives.",
    badge: "Pure", unit: "1 kg", inStock: true, featured: true, rating: 5, reviews: 30,
  },
  {
    id: 17, name: "Honey Amla", category: "Natural Honey Products",
    price: 200, originalPrice: 200, image: "images/products/17-honey-amla.jpg",
    description: "A potent blend of raw honey and Indian gooseberry (amla) — great for immunity and digestion.",
    badge: "", unit: "250 g", inStock: true, featured: false, rating: 5, reviews: 12,
  },
  {
    id: 18, name: "Gulkhand", category: "Natural Honey Products",
    price: 220, originalPrice: 220, image: "images/products/18-gulkhand.jpg",
    description: "Traditional rose petal preserve with cooling properties — aids digestion and reduces body heat.",
    badge: "New", unit: "250 g", inStock: true, featured: false, rating: 4, reviews: 8,
  },

  // ── THOKKU VARIETIES ──────────────────────────────────────────
  {
    id: 19, name: "Pirandai Thokku", category: "Thokku Varieties",
    price: 200, originalPrice: 200, image: "images/products/19-pirandai-thokku.jpg",
    description: "Pirandai (veldt grape) thokku known for its bone-strengthening and anti-inflammatory properties.",
    badge: "Herbal", unit: "250 g", inStock: true, featured: true, rating: 5, reviews: 10,
  },
  {
    id: 20, name: "Vallarai Thokku", category: "Thokku Varieties",
    price: 200, originalPrice: 200, image: "images/products/20-vallarai-thokku.jpg",
    description: "Vallarai (brahmi) thokku — a brain-boosting herb made into a delicious tangy pickle.",
    badge: "", unit: "250 g", inStock: true, featured: false, rating: 5, reviews: 6,
  },
  {
    id: 21, name: "Sundakai Thokku", category: "Thokku Varieties",
    price: 200, originalPrice: 200, image: "images/products/21-sundakai-thokku.jpg",
    description: "Sundakai (turkey berry) thokku — rich in medicinal value, aids digestion and boosts immunity.",
    badge: "", unit: "250 g", inStock: true, featured: false, rating: 4, reviews: 5,
  },
  {
    id: 22, name: "Mudakarthan Thokku", category: "Thokku Varieties",
    price: 200, originalPrice: 200, image: "images/products/22-mudakarthan-thokku.jpg",
    description: "Mudakarthan keerai (balloon vine) thokku — traditionally used for joint pain and respiratory health.",
    badge: "", unit: "250 g", inStock: true, featured: false, rating: 4, reviews: 4,
  },
  {
    id: 23, name: "Nellikai Karuvepilai Thokku", category: "Thokku Varieties",
    price: 230, originalPrice: 230, image: "images/products/23-nellikai-thokku.jpg",
    description: "A unique blend of gooseberry (nellikai) and curry leaves (karuvepilai) — rich in Vitamin C and antioxidants.",
    badge: "Popular", unit: "250 g", inStock: true, featured: true, rating: 5, reviews: 13,
  },

  // ── PICKLE VARIETIES ──────────────────────────────────────────
  {
    id: 24, name: "Lemon Pickle", category: "Pickle",
    price: 80, originalPrice: 80, image: "images/products/24-lemon-pickle.jpg",
    description: "Traditional homemade tangy and spicy lemon pickle prepared with authentic spices and sesame oil.",
    badge: "Fresh", unit: "100 g", inStock: true, featured: true, rating: 5, reviews: 11,
  },
  {
    id: 25, name: "Mango Pickle", category: "Pickle",
    price: 80, originalPrice: 80, image: "images/products/25-mango-pickle.jpg",
    description: "Classic raw cut mango pickle cured to perfection with aromatic mustard, fenugreek and red chili.",
    badge: "Bestseller", unit: "100 g", inStock: true, featured: true, rating: 5, reviews: 16,
  },
  {
    id: 26, name: "Tomato Pickle", category: "Pickle",
    price: 100, originalPrice: 100, image: "images/products/26-tomato-pickle.jpg",
    description: "Rich, tangy and aromatic country tomato pickle made in traditional homestyle recipe.",
    badge: "", unit: "100 g", inStock: true, featured: false, rating: 5, reviews: 8,
  },
  {
    id: 27, name: "Maa Inji Pickle", category: "Pickle",
    price: 110, originalPrice: 110, image: "images/products/27-maa-inji-pickle.jpg",
    description: "Special Mango Ginger (Maa Inji) pickle offering natural digestive benefits with a wonderful fresh aroma.",
    badge: "Special", unit: "100 g", inStock: true, featured: true, rating: 5, reviews: 14,
  },
  {
    id: 28, name: "Onion Pickle", category: "Pickle",
    price: 110, originalPrice: 110, image: "images/products/28-onion-pickle.jpg",
    description: "Flavor-packed small onion (shallot) pickle prepared with tamarind and roasted ground spices.",
    badge: "", unit: "100 g", inStock: true, featured: false, rating: 4, reviews: 7,
  },
  {
    id: 29, name: "Garlic Pickle", category: "Pickle",
    price: 90, originalPrice: 90, image: "images/products/29-garlic-pickle.jpg",
    description: "Poondu (Garlic) pickle cooked in rich spices, renowned for its intense flavor and heart-healthy qualities.",
    badge: "Popular", unit: "100 g", inStock: true, featured: true, rating: 5, reviews: 19,
  },

];

// ── Dynamic Sync with Owner Dashboard ─────────────────────────
const savedProducts = JSON.parse(localStorage.getItem("snehithi_products") || "null");
const PRODUCTS = (savedProducts && savedProducts.length > 0) ? savedProducts : DEFAULT_PRODUCTS;

// ── Category Icons ────────────────────────────────────────────
const CATEGORY_ICONS = {
  "All":                        "🛒",
  "Ladoos":                     "🍬",
  "Health & Nutrition":         "💪",
  "Spices & Essentials":        "🌿",
  "Traditional Kanji & Mixes":  "🥣",
  "Ghee":                       "🫙",
  "Herbal Products":            "🌿",
  "Natural Honey Products":     "🍯",
  "Thokku Varieties":           "🥣",
  "Pickle":                     "🌶️",
  "Fruits":                     "🍎",
  "Vegetables":                 "🥦",
  "Grains":                     "🌾",
  "Oils":                       "🫒",
  "Spices":                     "🌶️",
  "Dairy":                      "🥛",
  "Other":                      "📦",
};

// ── Auto-Generate Categories from PRODUCTS ────────────────────
function getCategories() {
  const uniqueCats = [...new Set(PRODUCTS.map(p => p.category))];
  const cats = [{ name: "All", icon: "🛒" }];
  uniqueCats.forEach(cat => {
    cats.push({ name: cat, icon: CATEGORY_ICONS[cat] || "🌿" });
  });
  return cats;
}

// ── Render Products Grid ──────────────────────────────────────
function renderProducts(list) {
  const grid     = document.getElementById("productGrid");
  const emptyMsg = document.getElementById("emptyMessage");
  if (!grid) return;

  if (!list || list.length === 0) {
    grid.innerHTML = "";
    if (emptyMsg) emptyMsg.style.display = "block";
    return;
  }
  if (emptyMsg) emptyMsg.style.display = "none";

  grid.innerHTML = list.map(p => `
    <div class="product-card" data-id="${p.id}">
      ${p.badge ? `<span class="product-badge">${p.badge}</span>` : ""}
      <div class="product-img-wrap">
        ${p.image
          ? `<img src="${p.image}" alt="${p.name}" loading="lazy" onerror="this.parentElement.innerHTML='<div class=\\'product-img-placeholder\\'><span>${CATEGORY_ICONS[p.category] || "🌿"}</span></div>'"/>`
          : `<div class="product-img-placeholder">
               <span>${CATEGORY_ICONS[p.category] || "🌿"}</span>
             </div>`}
      </div>
      <div class="product-info">
        <div style="display:flex; justify-content:space-between; align-items:center;">
          <span class="product-category">${p.category}</span>
          <span style="font-size:0.75rem; font-weight:600; color:var(--gray); background:var(--light-gray); padding:2px 8px; border-radius:4px;">${p.unit}</span>
        </div>
        <h3 class="product-name">${p.name}</h3>
        <p class="product-desc">${p.description}</p>
        <div class="product-rating">
          ${"★".repeat(p.rating)}${"☆".repeat(5 - p.rating)}
          <span>(${p.reviews})</span>
        </div>
        <div class="product-footer">
          <div class="product-price">
            ${p.price === 0
              ? `<span class="price-free">FREE</span>`
              : `<span class="price-current">${CONFIG.currencySymbol}${p.price.toLocaleString("en-IN")}</span>
                 ${p.originalPrice > p.price
                   ? `<span class="price-original">${CONFIG.currencySymbol}${p.originalPrice.toLocaleString("en-IN")}</span>`
                   : ""}`}
          </div>
          <button class="btn-add-cart ${!p.inStock ? "disabled" : ""}"
            onclick="addToCart(${p.id})"
            ${!p.inStock ? "disabled" : ""}>
            ${p.inStock ? `<i class="fas fa-cart-plus"></i> Add` : "Out of Stock"}
          </button>
        </div>
      </div>
    </div>
  `).join("");
}

// ── Filter & Search Logic ─────────────────────────────────────
function filterProducts() {
  const searchEl  = document.getElementById("searchInput");
  const activeBtn = document.querySelector(".filter-btn.active");
  const sortEl    = document.getElementById("sortSelect");
  const priceEl   = document.getElementById("priceRange");

  const search   = searchEl  ? searchEl.value.toLowerCase()  : "";
  const category = activeBtn ? activeBtn.dataset.category    : "All";
  const sort     = sortEl    ? sortEl.value                  : "default";
  const maxPrice = priceEl   ? parseInt(priceEl.value)       : 99999;

  let list = PRODUCTS.filter(p => {
    const matchSearch   = p.name.toLowerCase().includes(search) ||
                          p.description.toLowerCase().includes(search);
    const matchCategory = category === "All" || p.category === category;
    const matchPrice    = p.price <= maxPrice;
    return matchSearch && matchCategory && matchPrice;
  });

  if (sort === "price-asc")  list.sort((a, b) => a.price - b.price);
  if (sort === "price-desc") list.sort((a, b) => b.price - a.price);
  if (sort === "name-asc")   list.sort((a, b) => a.name.localeCompare(b.name));

  renderProducts(list);
}

// ── Category Filter Buttons (Products Page) ───────────────────
function initCategoryFilters() {
  const container = document.getElementById("categoryFilters");
  if (!container) return;
  const categories = getCategories();
  container.innerHTML = categories.map(c => `
    <button class="filter-btn ${c.name === "All" ? "active" : ""}"
      data-category="${c.name}" onclick="setCategory(this)">
      ${c.icon} ${c.name}
    </button>
  `).join("");
}

function setCategory(btn) {
  document.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
  btn.classList.add("active");
  filterProducts();
}

// ── Dynamic Category Grid (Home Page) ────────────────────────
function renderHomepageCategories() {
  const container = document.getElementById("homeCategoryGrid");
  if (!container) return;
  const categories = getCategories().filter(c => c.name !== "All");
  container.innerHTML = categories.map(c => `
    <a href="products.html?cat=${encodeURIComponent(c.name)}" class="category-card">
      <span class="category-icon">${c.icon}</span>
      <div class="category-name">${c.name}</div>
      <div class="category-count">${PRODUCTS.filter(p => p.category === c.name).length} product(s)</div>
    </a>
  `).join("");
}

// ── Featured Products (Home Page) ────────────────────────────
function renderFeaturedProducts() {
  const grid = document.getElementById("featuredGrid");
  if (!grid) return;
  const featured = PRODUCTS.filter(p => p.featured && p.inStock).slice(0, 8);
  grid.innerHTML = featured.map(p => `
    <div class="product-card">
      ${p.badge ? `<span class="product-badge">${p.badge}</span>` : ""}
      <div class="product-img-wrap">
        ${p.image
          ? `<img src="${p.image}" alt="${p.name}" loading="lazy" onerror="this.parentElement.innerHTML='<div class=\\'product-img-placeholder\\'><span>${CATEGORY_ICONS[p.category] || "🌿"}</span></div>'"/>`
          : `<div class="product-img-placeholder">
               <span>${CATEGORY_ICONS[p.category] || "🌿"}</span>
             </div>`}
      </div>
      <div class="product-info">
        <div style="display:flex; justify-content:space-between; align-items:center;">
          <span class="product-category">${p.category}</span>
          <span style="font-size:0.75rem; font-weight:600; color:var(--gray); background:var(--light-gray); padding:2px 8px; border-radius:4px;">${p.unit}</span>
        </div>
        <h3 class="product-name">${p.name}</h3>
        <div class="product-footer">
          <div class="product-price">
            ${p.price === 0
              ? `<span class="price-free">FREE</span>`
              : `<span class="price-current">${CONFIG.currencySymbol}${p.price.toLocaleString("en-IN")}</span>`}
          </div>
          <button class="btn-add-cart" onclick="addToCart(${p.id})">
            <i class="fas fa-cart-plus"></i> Add
          </button>
        </div>
      </div>
    </div>
  `).join("");
}

// ── Init on Page Load ─────────────────────────────────────────
document.addEventListener("DOMContentLoaded", () => {
  initCategoryFilters();
  filterProducts();
  renderHomepageCategories();
  renderFeaturedProducts();

  // Pre-select category from URL ?cat=
  const urlCat = new URLSearchParams(window.location.search).get("cat");
  if (urlCat) {
    setTimeout(() => {
      const btn = document.querySelector(`.filter-btn[data-category="${urlCat}"]`);
      if (btn) {
        document.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        filterProducts();
      }
    }, 50);
  }
});

