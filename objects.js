let person = {
  name: 'Rimi',
  age: 20,
  salary: 10000,
  married: true,
  'fav places': ['Dhaka', 'Rome'],
}
console.log(person);
console.log(person.salary); //dot notation
console.log(person['married']); //bracket notation
console.log(person['fav places']);

/////////////////////////////////////////////////

let updateSalary = person.salary = 4000;
let updateAge = person["age"] = 30;
console.log(person);

/////////////////////////////////////////////////

const keys = Object.keys(person);
const values = Object.values(person);
console.log(keys);
console.log(values);

/////////////////////////////////

let human = {
  color: 'fair',
  habit: 'gossiping',
  height: 4.9,
  hobbies: ['reading book', 'watching movies', 'playing games'],
  favorite:{
    dressColor:'black',
    food:{
      vegetable:'Carrot',
      iceCream: 'chocolate',
    }
  }
}

human.height = 5;
human.favorite.dressColor = 'red';
delete human.favorite.food.iceCream;

///////////////////////////////////////////////////

console.log(human.height);
console.log(human.favorite.dressColor);
console.log(human.favorite.food.iceCream);
console.log(human);

for( const keys in human){
  console.log(keys, ':', human[keys]);
}

const key = Object.keys(human);
const value = Object.values(human);
console.log(key);
console.log(value);


