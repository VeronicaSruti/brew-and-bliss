const drinkBuilderConfig = {
  imagePath: "images",

  bases: [
    { label: "Sparkling tea", value: "sparkling", color: "#22d3ee" },
    { label: "Coconut Water", value: "coconut", color: "#fbbf24" },
    { label: "Green Tea", value: "greentea", color: "#a3e635" },
    { label: "Hibiscus Infusion", value: "hibiscus", color: "#f9a8d4" },
  ],

  flavors: [
    { label: "Raspberry", value: "raspberry", color: "#ec4899" },
    { label: "Passionfruit", value: "passion", color: "#f97316" },
    { label: "Cucumber Mint", value: "cucumber", color: "#84cc16" },
    { label: "Lavender", value: "lavender", color: "#8b5cf6" },
  ],
};
function createFlavorLab(config) {
  const baseContainer = document.getElementById("baseOptions");
  const flavorContainer = document.getElementById("flavorOptions");
  const drinkImage = document.getElementById("drinkImage");
  const drinkResult = document.getElementById("drinkResult");

  let selectedBase = config.bases[0].value;
  let selectedFlavor = config.flavors[0].value;

  /* CREATE BASE TITLE */

  baseContainer.innerHTML = `<p class="chip-title">Choose your base</p>`;

  config.bases.forEach((base, i) => {
    const chip = document.createElement("span");

    chip.className = "flavor-chip";

    if (i === 0) chip.classList.add("picked");

    chip.dataset.base = base.value;

    chip.innerHTML = `
<span class="flavor-dot"
style="background:${base.color}">
</span>
${base.label}
`;

    chip.onclick = () => {
      document
        .querySelectorAll("[data-base]")
        .forEach((c) => c.classList.remove("picked"));

      chip.classList.add("picked");

      selectedBase = base.value;

      updateDrink();
    };

    baseContainer.appendChild(chip);
  });

  /* CREATE FLAVOR TITLE */

  flavorContainer.innerHTML = `<p class="chip-title">Choose your flavour</p>`;

  config.flavors.forEach((flavor, i) => {
    const chip = document.createElement("span");

    chip.className = "flavor-chip";

    if (i === 0) chip.classList.add("picked");

    chip.dataset.flavor = flavor.value;

    chip.innerHTML = `
<span class="flavor-dot"
style="background:${flavor.color}">
</span>
${flavor.label}
`;

    chip.onclick = () => {
      document
        .querySelectorAll("[data-flavor]")
        .forEach((c) => c.classList.remove("picked"));

      chip.classList.add("picked");

      selectedFlavor = flavor.value;

      updateDrink();
    };

    flavorContainer.appendChild(chip);
  });

  function updateDrink() {
    drinkImage.src = `${config.imagePath}/${selectedBase}-${selectedFlavor}.jpg`;

    drinkResult.innerHTML = `<h5>✨ Your Drink:
${selectedFlavor.charAt(0).toUpperCase() + selectedFlavor.slice(1)} Fizz
</h5>

<p>${selectedBase} base with ${selectedFlavor} flavour.</p>`;
  }

  updateDrink();
}

createFlavorLab(drinkBuilderConfig);
