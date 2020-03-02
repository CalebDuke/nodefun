const path = require('path');
const fs = require('fs');
const rp = require('request-promise')

let chirps = [
  { name: "Caleb", message: "Helpa me plese." },
  { name: "Jake", message: "oka buddy" },
  { name: "Caleb", message: "Helpa me plese." },
  { name: "Jake", message: "Ia heard you the first time." },
  { name: "Caleb", message: "stop." }
];

let post = JSON.stringify(chirps);
fs.writeFileSync('chirps.json', post)