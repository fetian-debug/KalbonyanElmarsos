var nameVar = 'Fetian';
var nameVar = 'Anas';
console.log('nameVar', nameVar);

let nameLet = 'Fet';
nameLet = 'FetAnas';
console.log('nameLet', nameLet);

const nameConst = 'Frank';
console.log('nameConst', nameConst);

// Block scoping

const fullName = 'fet Anas';
let firstName;

if (fullName) {
  firstName = fullName.split(' ')[0];
  console.log(firstName);
}

console.log(firstName);
