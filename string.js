let firstName = `Farjana  `;
let lastName = `  FARJANA   `;

console.log(firstName);
console.log(lastName);

//////////////////////////////////////////////////////////////////////
/* we use toLowerCase or toUpperCase method to check data's accuracy */
let lowerFirstName = firstName.toLowerCase();
console.log(lowerFirstName === firstName.toLowerCase());

/* trim method helps to remove unnecessary or unintentional spaces at the starting or end for reliable storage and display. */

console.log(firstName.trim() + lastName.trim());

////////////////////////////////////////////////////////////////////////////////////////////

let fullName = `Farjana Yeasmin Rimi`;

/* Reverse is used rarely. We apply it while doing animation on any string*/
let fullNameReverse = "";
for (let letter = fullName.length - 1; letter >= 0; letter--) {
  // console.log(fullName[letter]);
  fullNameReverse += fullName[letter];
}
console.log(fullNameReverse);

//////////////////////////////////////////////////////////////////////

const tagString = "JavaScript, Web Development, Programming, Front End";
/* Slice is used to show a portion of a string to the user such as in whatsapp text preview, we can see half of the text as an overview*/

let middleName = fullName.slice(8, 15);
console.log(fullName);
console.log(middleName);

/* Split method is used to transform a string to an array*/
console.log(fullName.split(` `));

const arrayString = ["JavaScript", "Web Development", "Programming", "Front End"];
/* Join method is used to transform an array elements to strings*/
console.log(arrayString.join(" | "));

const name = `Farjana`;
const sureName = `Rimi`;
/* Concat method is  used to joint two name from user input */
let concatName = name.concat(" ", sureName);
console.log(concatName);
