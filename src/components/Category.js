var categories = [
    "animal",
    "country",
    "colour",
    "mrt station"
  ];

function Category() {
  return categories[Math.floor(Math.random() * categories.length)];
}
  
export default Category;