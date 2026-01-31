const flavorString = prompt(
  "Please enter a comma separted list of your favorite froyo flavors",
  "vanilla,vanilla,vanilla,strawberry,coffee,coffee",
);
const flavors = flavorString.split(",");

// console.log(flavors);
// checking to make sure it works

function flavorCount(flavors) {
  const counts = {};
  for (const flavor of flavors) {
    if (counts[flavor]) {
      counts[flavor] += 1;
    } else {
      counts[flavor] = 1;
    }
  }
  return counts;
}

// console.log(flavorCount(flavors));
// checking to make sure it works
