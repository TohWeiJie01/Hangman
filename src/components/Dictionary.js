var animals = [
  "mouse",
  "cow",
  "tiger",
  "rabbit",
  "snake",
  "horse",
  "goat",
  "monkey",
  "chicken",
  "dog",
  "pig"
];

function Dictionary() {
  return animals[Math.floor(Math.random() * animals.length)];
}

export default Dictionary;
