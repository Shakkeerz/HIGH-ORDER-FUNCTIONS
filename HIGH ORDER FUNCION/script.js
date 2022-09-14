const data = [
  { id: 1, name: "carrot", price: 34, category: "veg" },
  { id: 2, name: "betroot", price: 100, category: "veg" },
  { id: 3, name: "banana", price: 99, category: "fru" },
  { id: 4, name: "chilly", price: 12, category: "veg" },
  { id: 5, name: "cabbage", price: 90, category: "veg" },
  { id: 6, name: "pineaplle", price: 17, category: "fru" },
];
// console.log(data)

// map
let newData = data.map((data) => data.name);
let newData1 = data.filter((data) => {
  return data.category;
});
// console.log(newData1);

const onlyFruits = data.filter((data) => {
  return data.category !== "veg" && data.id;
});
console.log(onlyFruits);

const fruitsIds = onlyFruits.map((fruit) => fruit.id);
console.log(fruitsIds);

// console fruits name only
const fruitsNames = data.filter((data) => data.category === "fru" && data.id);
fruitsNames.map((fruit) => console.log(fruit.name));
console.log(fruitsNames);

// get the chilly ids
const chillyArray = data
  .filter((data) => data.name == "chilly")
  .map((data) => data.id);
console.log(chillyArray);

// getting array getecories
const arrayCategory = data.map((data) => data.category);
const cateogryNames = new Set(arrayCategory);
console.log(cateogryNames);

// find price == 90
const price90 = data.find((data) => data.price == 90);
console.log(price90);

// listout veg
// find veg item  that price < 50
// print that array id
const vegLists = data
  .filter((data) => data.category == "veg")
  .filter((data) => data.price < 50)
  .map((data) => data.id);
console.log(vegLists);
