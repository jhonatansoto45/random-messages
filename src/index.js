const names = [
  "Jhonatan",
  "Sebastian",
  "Diego",
  "Andrea",
  "Laura",
  "Maria",
  "Paula",
  "Carolina", 
  "Vanessa"
];

const randomMsg = () => {
  const message = names[Math.floor(Math.random() * names.length)];
  console.log(message);
};

module.exports = { randomMsg };
