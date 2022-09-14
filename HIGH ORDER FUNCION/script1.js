const data = [
  { id: 1, name: "mubile", price: 34, category: "ele" },
  { id: 2, name: "fridge", price: 100, category: "ele" },
  { id: 3, name: "shirt", price: 99, category: "dre" },
  { id: 4, name: "pant", price: 12, category: "dre" },
  { id: 5, name: "cabbage", price: 90, category: "veg" },
  { id: 6, name: "pineaplle", price: 17, category: "fru" },
];

data
  .map(({ id, name, price, category }) =>
    console.log(id, name, price, category)
  )
  .includes(({ id, name}) => console.log(data.id == 1));

  const ul = document.getElementById('ul')
  const li = document.createElement('li')
  ul.appendChild(li)
  
 ul.innerHTML=  data.map(data=>{
    return `<li>${data.name}</li>`
 })