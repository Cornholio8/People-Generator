const fs = require('fs');

const genders = ["M", "F"];
const maleNames = ["Andrzej", "Janusz", "Mariusz", "Marian", "Dariusz", "Norbert", "Bogdan", "Jakub", "Mirek", "Piotr"];
const femaleNames = ["Magdalena", "Natalia", "Anna", "Agata", "Monika", "Klaudia", "Aleksandra", "Marta", "Marzena", "Paulina"];
const lastNames = ["Korcz", "Nawet", "Monit", "Suchy", "Piekara"];

function randChoice(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
};

const people = [];

for (i = 0; i < 20; i++) {
    let obj = {};
    const gender = randChoice(genders);
    obj.gender = gender;
    if (gender === "M") obj.name = randChoice(maleNames);
    if (gender === "F") obj.name = randChoice(femaleNames);
    obj.lastName = randChoice(lastNames);
    obj.age = Math.floor(Math.random() * (78 - 18 + 1)) + 18;
    people.push(obj);
  };

  const data = JSON.stringify(people);

  fs.writeFile("people.json", data, (err) => {
    if (err) {
        console.log('Something went wrong!');
        throw err;
    }
    console.log(people, "File has been successfully generated! Check people.json");
  });