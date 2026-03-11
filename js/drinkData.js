const drinksData = [
  /* TROPICAL */

  {
    category: "Tropical",
    icon: "🌴",
    name: "Tropical Sunset",
    price: "$7.50",
    tag: "Bestseller",
    image: "images/tropical-sunset.jpg",
    desc: "Mango, passionfruit, coconut water with a chilli-salt rim.",
    gradient: "linear-gradient(90deg,#f97316,#fbbf24)",
  },

  {
    category: "Tropical",
    icon: "🌴",
    name: "Island Splash",
    price: "$7.20",
    tag: "Fresh",
    image:
      "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=600&q=80",
    desc: "Pineapple juice, lime and sparkling coconut foam.",
    gradient: "linear-gradient(90deg,#fb923c,#facc15)",
  },

  {
    category: "Tropical",
    icon: "🌴",
    name: "Golden Mango",
    price: "$7.00",
    tag: "Signature",
    image: "images/golden-mango.jpg",
    desc: "Fresh mango puree with citrus sparkle.",
    gradient: "linear-gradient(90deg,#f59e0b,#f97316)",
  },

  {
    category: "Tropical",
    icon: "🌴",
    name: "Coconut Breeze",
    price: "$6.90",
    tag: "Smooth",
    image: "images/coconut-breeze.jpg",
    desc: "Coconut water, lime and pineapple foam.",
    gradient: "linear-gradient(90deg,#fbbf24,#f97316)",
  },

  /* BERRY */

  {
    category: "Berry",
    icon: "🍓",
    name: "Berry Smash",
    price: "$6.90",
    tag: "New",
    image:
      "https://images.unsplash.com/photo-1497534446932-c925b458314e?w=600&q=80",
    desc: "Muddled blueberries with hibiscus syrup.",
    gradient: "linear-gradient(90deg,#ef4444,#ec4899)",
  },

  {
    category: "Berry",
    icon: "🍓",
    name: "Strawberry Spritz",
    price: "$7.10",
    tag: "Popular",
    image: "images/strawberry-spritz.jpg",
    desc: "Fresh strawberries, soda and mint.",
    gradient: "linear-gradient(90deg,#f43f5e,#fb7185)",
  },

  {
    category: "Berry",
    icon: "🍓",
    name: "Crimson Cooler",
    price: "$7.20",
    tag: "Signature",
    image: "images/crimson-cooler.jpg",
    desc: "Raspberry syrup with citrus bubbles.",
    gradient: "linear-gradient(90deg,#ec4899,#be185d)",
  },

  {
    category: "Berry",
    icon: "🍓",
    name: "Wild Berry Fizz",
    price: "$7.00",
    tag: "Fresh",
    image: "images/wild-berry-fizz.jpg",
    desc: "Mixed berries topped with sparkling tonic.",
    gradient: "linear-gradient(90deg,#db2777,#f43f5e)",
  },

  /* FLORAL */

  {
    category: "Floral",
    icon: "🌸",
    name: "Pink Paradise",
    price: "$8.00",
    tag: "Signature",
    image: "images/pink-paradise.jpg",
    desc: "Butterfly pea flower and lychee foam.",
    gradient: "linear-gradient(90deg,#ec4899,#8b5cf6)",
  },

  {
    category: "Floral",
    icon: "🌸",
    name: "Lavender Dream",
    price: "$7.40",
    tag: "Elegant",
    image:
      "https://images.unsplash.com/photo-1544145945-f90425340c7e?w=600&q=80",
    desc: "Lavender syrup with citrus mist.",
    gradient: "linear-gradient(90deg,#a78bfa,#8b5cf6)",
  },

  {
    category: "Floral",
    icon: "🌸",
    name: "Rose Bloom",
    price: "$7.30",
    tag: "Romantic",
    image: "images/rose-bloom.jpg",
    desc: "Rose water lemonade with petals.",
    gradient: "linear-gradient(90deg,#f472b6,#fb7185)",
  },

  {
    category: "Floral",
    icon: "🌸",
    name: "Violet Mist",
    price: "$7.50",
    tag: "New",
    image: "images/violet-mist.jpg",
    desc: "Butterfly pea flower with citrus sparkle.",
    gradient: "linear-gradient(90deg,#6366f1,#a855f7)",
  },

  /* CITRUS */

  {
    category: "Citrus",
    icon: "🍋",
    name: "Lemon Spark",
    price: "$6.80",
    tag: "Fresh",
    image: "images/lemon-spark.jpg",
    desc: "Fresh lemon juice with sparkling tonic.",
    gradient: "linear-gradient(90deg,#fde047,#facc15)",
  },

  {
    category: "Citrus",
    icon: "🍋",
    name: "Orange Glow",
    price: "$7.00",
    tag: "Smooth",
    image: "images/orange-glow.jpg",
    desc: "Orange juice with citrus bubbles.",
    gradient: "linear-gradient(90deg,#fb923c,#f97316)",
  },

  {
    category: "Citrus",
    icon: "🍋",
    name: "Lime Zest",
    price: "$6.90",
    tag: "Cool",
    image:
      "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=600&q=80",
    desc: "Fresh lime soda with mint.",
    gradient: "linear-gradient(90deg,#84cc16,#22c55e)",
  },

  {
    category: "Citrus",
    icon: "🍋",
    name: "Sunshine Spritz",
    price: "$7.20",
    tag: "Bright",
    image: "images/sunshine-spritz.jpg",
    desc: "Lemon, orange and sparkling soda.",
    gradient: "linear-gradient(90deg,#fde047,#fb923c)",
  },
];

const container = document.getElementById("drinkContainer");

drinksData.forEach((drink) => {
  container.innerHTML += `

<div class="col-md-6 col-lg-3 drink-item" data-category="${drink.category}">

<div class="mood-drink-card">

<div class="color-bar" style="background:${drink.gradient}"></div>

<img src="${drink.image}" alt="${drink.name}">

<div class="mood-card-body">

<span class="mood-tag">${drink.icon} ${drink.category}</span>

<h5>${drink.name}</h5>

<p>${drink.desc}</p>

<div class="mood-card-footer">

<span class="mood-price">${drink.price}</span>
<span class="mood-tag">${drink.tag}</span>

</div>

</div>
</div>
</div>

`;
});
const tabs = document.querySelectorAll(".mood-tab");
const drinks = document.querySelectorAll(".drink-item");

function filterDrinks(category) {
  drinks.forEach((drink) => {
    if (drink.dataset.category === category) {
      drink.style.display = "block";
    } else {
      drink.style.display = "none";
    }
  });
}

/* run default filter */

filterDrinks("Tropical");

tabs.forEach((tab) => {
  tab.onclick = () => {
    tabs.forEach((t) => t.classList.remove("active-tab"));
    tab.classList.add("active-tab");

    const selectedCategory = tab.dataset.tab;

    filterDrinks(selectedCategory);
  };
});
