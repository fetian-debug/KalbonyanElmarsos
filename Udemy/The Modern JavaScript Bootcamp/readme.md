## The Modern JavaScript Bootcamp
<br />

- ![100%](https://progress-bar.dev/40/?title=Done)

- [x] ![#0D64C3](https://via.placeholder.com/12/0D64C3/000000?text=+) `done`[Course Overview](#overview)
- [x] ![#0D64C3](https://via.placeholder.com/12/0D64C3/000000?text=+) `done`[Setting Up Your Computer](#setting-up)
- [x] ![#0D64C3](https://via.placeholder.com/12/0D64C3/000000?text=+) `done`[JavaScript Basics: Variables And Flow Control](#variables-and-flow-control)
- [x] ![#0D64C3](https://via.placeholder.com/12/0D64C3/000000?text=+) `done`[JavaScript Functions](#functions)
- [x] ![#0D64C3](https://via.placeholder.com/12/0D64C3/000000?text=+) `done`[JavaScript Objects](#objects)
- [x] ![#0D64C3](https://via.placeholder.com/12/0D64C3/000000?text=+) `done`[JavaScript Arrays](#arrays)
- [ ] ![#0D64C3](https://via.placeholder.com/12/0D64C3/000000?text=+) `in progress`[JavaScripts In The Browser](#js-in-browser)
- [ ] ![#0D64C3](https://via.placeholder.com/12/0D64C3/000000?text=+) `in progress`[DataStorage, Libraries And More]
- [ ] ![#0D64C3](https://via.placeholder.com/12/0D64C3/000000?text=+) `in progress`[Expanding Our JavaScript Knowledge]
- [ ] ![#0D64C3](https://via.placeholder.com/12/0D64C3/000000?text=+) `in progress`[Advanced Objects And Functions]
- [ ] ![#0D64C3](https://via.placeholder.com/12/0D64C3/000000?text=+) `in progress`[Asynchronous JavaScript]
- [ ] ![#0D64C3](https://via.placeholder.com/12/0D64C3/000000?text=+) `in progress`[App Themes]
- [ ] ![#0D64C3](https://via.placeholder.com/12/0D64C3/000000?text=+) `in progress`[Cutting Edge JavaScript With Babel]
- [ ] ![#0D64C3](https://via.placeholder.com/12/0D64C3/000000?text=+) `in progress`[Wrapping UP]


## Overview

- JavaScript is a greate language to know, JavaScript used from web apps to server side code to native mobile applications.

- we're going to build incrementally on your knowledge, starting with the fundamentals and moving on to the most advanced language features along the way.

- There's also 90 challenges to give you real world problem solving experience.

- The course itself is broken into three parts.

	- In part one, we're going to start with the very fundamentals of the language will be installing some program and going to start to build the task manager and note taking applications.

	- In part two, we're going to take what we learned about JavaScript and we're going to connect it to a interface, we'll be putting the finishing touches on the task manager and note applications.

	- In part three, we're going to move on to the third and final app, our hangmen word game,we're going to explore asynchronous programming with JavaScript, and going to learn how to connect your application to third party data sources, This is going to allow us to send data off to be saved or to fetch data that we want to use in our applications, such as a new puzzle for the hangman game.

	- Being able to connect your app to third party data sources is essential for creating something real world.

## Setting Up

1. Inatalling Visual Studio Code [VScode](https://code.visualstudio.com/download)

- This is text editor that we will be using to write code.
- Install some extenstion like 
	- JavaScript (ES6) code snippets 
	- Sublime Text Keymap 

2. Installing Node.js [Nodejs](https://nodejs.org/en/download/)

- This is going to allow us to run JavaScript files on your machine.


3. Install cmder [Windows Only] [Cmder](https://cmder.net/)

- This is a console emulator for Windows.

## Variables And Flow Control

#### Rules Variable Names
1. You can't define a variable more than once
2. There are rules related to variable names
    *  Variable names cannot contain spaces.
    * Variable names must begin with a letter, an underscore _ or a dollar sign ($).
    * Variable names can only contain letters, numbers, underscores, or dollar signs.
    * Variable names are case-sensitive.
    * Variable names cannot be reserved keywords.

#### Notes 1
* === - equality operator
* !== - no equal operator
*  <  - less than operator
* &lt;  - grater than operator
* <=  - less than or equal to operator
* &lt;=  - greater than or equal to operator 
* &&  - Logical And operator - True if both sides are true.
* ||  - Logical Or operator - True if at least one side is ture.

#### Notes 2
- Lexical Scope (Static Scope)
- Global Scope - Defined outside of all code blocks
- Local Scope - Defined insde a code block
- In a scope you can access variables defined in that scope, or in any parent/ancestor scope.



- Challenge 1 : Solution
```js
// create variable to store city
let city = 'Kafr Elsheikh'
// create variable to store country
let country = 'Egypt'
// create variable to combine city and country
let location = city + ',' + country
// print location
console.log(location)

/* node strings.js */
```
- Challenge 2 : Solution
```js
// create variable to store fahrenheit value
let fahrenheit = 50
// create variable to store equation convert from fahrenheit to celsius
let celsius = (fahrenheit - 32) * 5 / 9
// create variable to store equation convert from fahrenheit to kelvin
let kelvin = (fahrenheit + 459.67) * 5 /9
// print celsius value 
console.log('celsius: ' + celsius)
// print kelvin vlaue
console.log('kelvin: '+ kelvin)

/* node numbers.js */
```

- Challenge 3 : Solution

```js

// create age set to your age 
let age = 70
// calculate is child - if they are 7 or under
let isChild = age <= 7
// calculate is senior - if they are 65 or older
let isSenior = age >= 65
// print is child value
console.log(isChild)
// print is senior value
console.log(isSenior)

/* node boolean.js */
```

- Challenge 4 : Solution

```js
// create age set you age
let age = 6
// If 7 or under print message about child pricing
if ( age <= 7) {
 console.log('You will get a child discount')
}

// If 65 or older print massage about senior discount
if (age >= 65){
 console.log('You will get a senior discount')
}

/* node boolean.js */
```

- Challenge 5 : Solution 

```js
// 
let temp = 45

// It is freezing outside!
if (temp <= 32){
 console.log('It is freezing outside')
}
// It is hot outside!
else if (temp >= 100){
 console.log('It is hot outside')
}
// Go for it. It is pretty nice.
else{
 console.log('Go for it. It is pretty nice')
}
/* node boolean-advanced.js */
```

- Challenge 6 : Solution
``` js
// create boolen variable one guest is vegan
let isGuestOneVegan = true
// create boolen variable two guest is vegan
let isGuestTwoVegan = false 
// Are both vegan? Only offer up vegan dishes.
if (isGuestOneVegan && isGuestTwoVegan) {
 console.log('Only offer up vegan dishes.')
}
// At least one Vegan? Make sure to offer up some vegan options.
else if (isGuestOneVegan || isGuestTwoVegan){
 console.log('Make sure to offer up some vegan options')
}
// Else, Offer up anything on the menue
else {
 console.log('Offer up anything on the menue')
}

/* node logical-and-or.js */
```

## Functions

#### Notes 3
* Function - input (argument), code, output (return vlaue)
* Undefined - undefined value when no value is assigned before using it.
    * undefined for variable
    * undefined for function arguments
    * undefined as function return default value
* Null - null as assined value
* arguments - Multiple arguments, Default arguments, 

- Challenge 7 : Solution

```js
// convertFahrenheitToCelsius
let convertFahrenheitToCelsius = function(fahrenheit){
    let celsius = (fahrenheit - 32) * 5 / 9
    return celsius
}
// call a couple of times (32) (68)
let tempOne = convertFahrenheitToCelsius(32)
let tempTwo = convertFahrenheitToCelsius(68)
// Print the converted values
console.log(tempOne)
console.log(tempTwo)

/* node functions-101.js */
```

- Challenge 8 : Solution 

```js
// function to get tip percent take two arguments total and tipPercent 
let getTip = function(total, tipPercent = .2){
    return total * tipPercent
}
let tip = getTip(100, .25)
console.log(tip)

/* node arguments.js */
```

- Challenge 9 : Solution 
```js

// Output is A 25% tip on $40 would be $10 using templete String
// function to get tip percent take two arguments total and tipPercent 
let getTip = function(total, tipPercent = .2){
    let percent = tipPercent * 100
    let tip = total * tipPercent
    return `A ${percent} tip on $${total} would be $${tip}`
}
let tip = getTip(100, .25)
console.log(tip)

/* node arguments.js */
```

- Challenge 10 : Solution
```js
// students score, total possible score
// 15/20 -> You get a C (75%)
// A 90-100, B 80-89, C 70-79, D 60-69, F 0-59

let gradeCalc = function(score, totalScore){
    let percent = (score / totalScore) * 100
    let letterGrade = ''
    
    if(percent >= 90){
        letterGrade = 'A'
    }else if (percent >= 80) {
        letterGrade = 'B'
    }else if (percent >= 70){
        letterGrade = 'C'
    }else if (percent >= 60){
        letterGrade = 'D'
    }else{
        letterGrade = 'F'
    }

    return `You get a ${letterGrade} (${percent}%)!` 

}

let result = gradeCalc(19,20)
console.log(result)

/* node grade-calc.js */
```

## Objects

#### Notes 4
- [String Methods](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)  
- [Number Methods](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)
- [Math Methods](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math)

- let - allows you to declare local variable whose scope is limited to the block statement.

- var - allows you to declare a variable globally or locally to an entire function scope,can access before declared(hosting) and can redeclaring variable.

- Const - just like let, are block-scoped. It's value can't be reassigned and it can't be redeclared.


- Challenge 11 : Solution
```
// create object with properties name, age, location

let me = {
    name: 'fetian',
    age: 22,
    location: 'Egypt'
}
// print msg name is age and location
console.log(`${me.name} is ${me.age} and lives in ${me.location}.`)
// Increase age by 1 and print msg again
me.age = me.age + 1
console.log(`${me.name} is ${me.age} and lives in ${me.location}.`)

/* node objects-101.js */
```

- Challenge 12 : Solution
```js

// create function - take fahrenheit in - return object with all three 

let convertFahrenheit = function (fahrenheit){
    return {
        fahrenheit: fahrenheit,
        kelvin: (fahrenheit + 459.67) * (5 / 9),
        celsius: (fahrenheit -32) * (5 /9)
    }
}

let temps = convertFahrenheit(32)
console.log(temps)

/* node objects-functions.js */
```
- Challenge 13 : Solution
```js
// create myAcount object with properites name, expenses, income
let myAccount = {
    name: 'Fetian',
    expenses: 0 , 
    income: 0
}
// addExpenses
let addExpenses = function (account, amount){
    account.expenses = account.expenses + amount
}
// addIncome
let addIncome = function (account, income) {
    account.income = account.income + income
}

// reset Account
let restAccount = function(account) {
    account.expenses = 0
    account.income = 0
}

// get Account Summary
let getAccountSummary = function(account) {
    let balance = account.income - account.expenses
    return `Account for ${account.name} has $${balance}. $${account.income} in income , $${account.expenses} in expenses.`
}

addIncome(myAccount, 2000)
addExpenses(myAccount, 2.50)
addExpenses(myAccount, 160)
console.log(getAccountSummary(myAccount))
restAccount(myAccount)
console.log(getAccountSummary(myAccount))

/* node objects-references.js */
```

- Challenge 14 : Solution
```js
// create restaurant with methods to check Availabilty seats, set seat party and remove it.
let restaurant = {
    name:'ASB',
    guestCapacity:75,
    guestCount:0,
    checkAvailability: function (partySize) {
        let seatsLeft = this.guestCapacity - this.guestCount
        return partySize <= seatsLeft
    },
    seatParty: function (partySize) {
        this.guestCount = this.guestCount + partySize
    },
    removeParty: function (partySize){
        this.guestCount = this.guestCount - partySize

    }
}
restaurant.seatParty(72)
console.log(restaurant.checkAvailability(4))
restaurant.removeParty(5)
console.log(restaurant.checkAvailability(4))

/* node objects-methods.js */
```
- Challenge 15 : Solution

```js
// create function password is valid
// length is more than 8 - and it does't contain the word password

let isValidPassword = function (password){
    return password.length > 8 && !password.include('password')
}

console.log(isValidPassword('asdfp'))
console.log(isValidPassword('abc123!@#$&^'))
console.log(isValidPassword('asdfpassdfpoijpassword'))

/* node string-methods.js */
```
- Challenge 16 : Solution

```js
// create guess function random numver 1-5 - true if correct - false if not correct
let makeGuess = function(guess) {
    let min = 1
    let max = 5
    let randomNum = Math.floor(Math.random() * (max - min +1)) + min

    return guess === randomNum 
}

console.log(makeGuess(1))

/* node number-methods.js */
```

- Challenge 17 : Solution
```js
// change variable to const if possible
// students score, total possible score
// 15/20 -> You get a C (75%)
// A 90-100, B 80-89, C 70-79, D 60-69, F 0-59

const gradeCalc = function(score, totalScore){
    const percent = (score / totalScore) * 100
    let letterGrade = ''
    
    if(percent >= 90){
        letterGrade = 'A'
    }else if (percent >= 80) {
        letterGrade = 'B'
    }else if (percent >= 70){
        letterGrade = 'C'
    }else if (percent >= 60){
        letterGrade = 'D'
    }else{
        letterGrade = 'F'
    }

    return `You get a ${letterGrade} (${percent}%)!` 

}

const result = gradeCalc(19,20)
console.log(result)

/* node grade-calc.js */
```

## Arrays

#### Notes 5
- [Array Methods](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)
- [For Statement](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for)
- [Filter Methods](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)
- [Sort Methods](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)

- Challenge 18 : Solution
```js
// create an array with five todos
const todos = ['Order cat food','watering the tree', 'Do work', 'Read book', 'Go to Gym']
// You have x todo
console.log(`You have ${todos.length} todo`)
// Print the first and second to last items 
console.log(`Todo: ${todos[0]}`)
console.log(`Todo: ${todos[todos.length - 2]}`)

/* node todo.js
```

- Challenge 19 : Solution
```js
// create an array with five todos
const todos = ['Order cat food','watering the tree', 'Do work', 'Read book', 'Go to Gym']
//Delete the 3rd item
todos.splice(2,1)
// Add a new item onto the end
todos.push('Buy coffe')
// Remove the first item from the list
todos.shift()
// You have x todo
console.log(`You have ${todos.length} todo`)
console.log(todos)

/* node todo.js */
```

- Challenge 20 : Solution

```js
// create an array with five todos
const todos = ['Order cat food','watering the tree', 'Do work', 'Read book', 'Go to Gym']
//Delete the 3rd item
todos.splice(2,1)
// Add a new item onto the end
todos.push('Buy coffe')
// Remove the first item from the list
todos.shift()
// You have x todo
console.log(`You have ${todos.length} todo`)
// print Order todos like 1. todo , 2. todo ....
todos.forEach(function (todo, index){
    const num = index + 1
    console.log(`${num}. ${todo}`)
})

/* node todo.js */
```

- Challenge 21 : Solution

```js
// create an array with five todos
const todos = ['Order cat food','watering the tree', 'Do work', 'Read book', 'Go to Gym']
//Delete the 3rd item
todos.splice(2,1)
// Add a new item onto the end
todos.push('Buy coffe')
// Remove the first item from the list
todos.shift()
// You have x todo
console.log(`You have ${todos.length} todo`)
// Using for statement print Order todos like 1. todo , 2. todo .
for (let count= 0; count < todos.length; count++){
    const num = count + 1
    const todo = todos[count]
    console.log(`${num}. ${todo}`)
}

/* node todo.js */
```

- Challenge 22 : Solution

```js
// create an array with five todos
//const todos = ['Order cat food','watering the tree', 'buy food', 'Do work', 'Exercise']
// 1. convert array to array of objects -> text, completed
const todos =[{
    text: 'Order cat food',
    completed:true
},{
    text: 'watering the tree',
    completed:true
},{
    text: 'buy food',
    completed:true
},{
    text: 'Do work',
    completed:true
},{
    text: 'Exercise',
    completed:true
}]
// 2. create function to remove a todo by text value
const deleteTodo = function ( todos, todoText){
    const index = todos.findIndex(function (todos){
        return todo.text.toLowerCase() === todoText.toLowerCase()
    })
    if (index > -1){
        todos.splice(index, 1)
    }
}
deleteTodo(todos, 'buy food')
console.log(todos)
/* node todo.js */
```
- Challenge 23 : Solution

```js
const todos =[{
    text: 'Order cat food',
    completed:true
},{
    text: 'watering the tree',
    completed:true
},{
    text: 'buy food',
    completed: false
},{
    text: 'Do work',
    completed: false
},{
    text: 'Exercise',
    completed: false
}]
// get things not completed
const getThingsToDo = function (todos) {
    return todos.filter(function (todo){
        return !todo.completed
    })
}
console.log(getThingsToDo(todos))

/* node todo.js */
```
- Challenge 24 : Solution

```js
const todos =[{
    text: 'Order cat food',
    completed:true
},{
    text: 'watering the tree',
    completed:true
},{
    text: 'buy food',
    completed: false
},{
    text: 'Do work',
    completed: false
},{
    text: 'Exercise',
    completed: false
}]
// sort todos 
const sortTodos= function (todos) {
    return todos.sort(function (a, b){
        if (!a.completed && b.completed){
            return -1
        }else if (!b.completed && a.completed){
            return 1
        }else{
            return 0
        }

    })
}
console.log(sortTodos(todos))

/* node todo.js */
```
- Challenge 25 : Solution
```js
// Expense -> description, amount
// addExpense -> description, amount
// getAccountSummary -> total up all expenses -> Fetian has $1235 in expenses
const account = {
    name: 'Fetian',
    expenses: [],
    addExpenses: function (description, amount){
        this.expenses.push({
            description: description,
            amount: amount
        })
    },
    getAccountSummary: function(){
        let totalExpenses = 0
        this.expenses.forEach(function (expenses){
            totalExpenses = totalExpenses + expenses.amount
        })
        return `${this.name} has $${totalExpenses} in expenses`
    }
}
account.addExpenses('Rent', 690)
account.addExpenses('Coffe', 2)
console.log(account.getAccountSummary())

/* node expense-tracker.js */
```


- Challenge 26 : Solution
```js
// 1. add income array to account
// 2. addIncome method => description, amount
// 3. Tweak getAccountSummary -> Fetian has a balance of $10. $100 in income. $90 in expenses
const account = {
    name: 'Fetian',
    expenses: [],
    income: []
    addExpenses: function (description, amount){
        this.expenses.push({
            description: description,
            amount: amount
        })
    },
    addIncome: function (description, amount) {
        this.income.push({
            description: description,
            amount: amount
        })
    }
    getAccountSummary: function(){
        let totalExpenses = 0
        let totalIncome = 0
        let accountBalence =0
        this.expenses.forEach(function (expenses){
            totalExpenses = totalExpenses + expenses.amount
        })

        this.income.forEach(function (income) {
            totalIncome = totalIncome + income.amount
        })

        accountBalence = totalIncome - totalExpenses

        return `${this.name} has a balance of $${accountBalence}. $${totalIncome} in income. $${totalExpenses} in expenses`
    }
}
account.addExpenses('Rent', 690)
account.addExpenses('Coffe', 2)
account.addIncome('Job', 1000)
console.log(account.getAccountSummary())

/* node expense-tracker.js */
```

## JS In Browser

#### Notes 6
- [Script Tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/script) - HTML element is used to embed executable code or data; this is typically used to embed or refer to JavaScript code. 
- live-server - npm install -g live-server or yarn global add live-server
- DOM - Doument Object Model
- [addEventListener](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener)


- Challenge 27 : Solution

```html
<!-- 
1. Create a new HTML file
2. An h1 and 5 p tags
3. Server that folder and view the doc in the browser -->
<!DOCTYPE html>
<html>
    <head>
        <title>Todos</title>
    </head>
    <body>
        <h1>Todos</h1>
        <p>wake up early</p>
        <p>Reading a book</p>
        <p>Coding</p>
        <p>Finish Courses</p>
        <script src="todo-app.js"></script>
    </body>
</html>

<!-- index.html -->
 ``` 

```js
//4. Create an link a JavaScript file to the HTML
//5. Remove all p tags that have "the" in the text

const paragraphs = document.querySelectorAll('p')

paragraphs.forEach(function (paragraph){
    if (paragraph.textContent.include('the')){
        paragraph.remove()
    }
})

/* live-server todo-app.js */
```

- Challenge 28 : Solution

```js
const todos = [{
    text: 'Order cat food',
    completed: false
}, {
    text: 'Clean kitchen',
    completed: true
}, {
    text: 'Buy food',
    completed: true
}, {
    text: 'Do work',
    completed: false
}, {
    text: 'Exercise',
    completed: true
}]

const incompleteTodos = todos.filter(function (todo) {
    return !todo.completed
})

const summary = document.createElement('h2')
summary.textContent = `You have ${incompleteTodos.length} todos left`
document.querySelector('body').appendChild(summary)

todos.forEach(function (todo) {
    const p = document.createElement('p')
    p.textContent = todo.text
    document.querySelector('body').appendChild(p)
})

// You have 2 todos left (p element)
// Add a p for each todo above (use text value)

/* live-server todo-app.js */
```

```html
<!DOCTYPE html>

<html>
    <head></head>
    <body>
        <h1>Todos</h1>
        <script src="todo-app.js"></script>
    </body>
</html>
<!-- index.html -->
```
