var animal = [
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

var country = [
  "singapore",
  "france",
  "malaysia",
  "japan",
  "finland",
  "brazil",
  "china",
  "australia",
  "poland",
  "denmark",
  "iceland"
];

var colour = [
  "blue",
  "cyan",
  "red",
  "yellow",
  "green",
  "purple",
  "brown",
  "black",
  "orange",
  "pink",
  "gray"
];

var mrt = [
  "bishan",
  "sengkang",
  "punggol",
  "bedok",
  "tampines",
  "novena",
  "bugis",
  "orchard",
  "hougang",
  "serangoon",
  "pioneer"
];

var hashmap = {
  "animal": animal,
  "country": country,
  "colour": colour,
  "mrt station": mrt
};

function Dictionary(type) {
  let cat = hashmap[type];
  return cat[Math.floor(Math.random() * cat.length)];
}

export default Dictionary;
