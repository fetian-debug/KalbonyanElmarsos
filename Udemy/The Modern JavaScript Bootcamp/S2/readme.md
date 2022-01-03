## The Modern JavaScript Bootcamp

## Setting up Your Machine

1. Inatalling Visual Studio Code [VScode](https://code.visualstudio.com/download)

- This is text editor that we will be using to write code.
- Install some extenstion like 
	- JavaScript (ES6) code snippets 
	- Sublime Text Keymap 

2. Installing Node.js [Nodejs](https://nodejs.org/en/download/)

- This is going to allow us to run JavaScript files on your machine.


3. Install cmder [Windows Only] [Cmder](https://cmder.net/)

- This is a console emulator for Windows.

## Introduction to the Terminal

- Common Commands

```bash
# Print the full path to the current working directory 
pwd 

```
```bash
# Clear the terminal output 
clear 
```
```bash
# List the contents of the working directory 
ls 
```
```sh
# Change directories to home 
cd ~
```
```sh 
# Navigate up a directory then into a nested directory 
cd ../Downloads 
```


## Hello JavaScript

- create and run your first JavaScript script.

```js
# hello-world.js
console.log("Hello World!")
```
- Runing using Terminal

```sh
# Run a JavaScript file though Node.js
node hello-world.js

``` 

# chapter 2 : JavaScript fundamentals

## Strings and Variables 

- A variable is a way to store a value for later, We might want to store a value and access it later in the program.

- The syntax of the language is just the rules that govern what you can type in a JavaScript file.

- String can be declared using three ways can be written inside single quotes ( ' ' ), double quotes ( " " ), or backticks ( ` ` ).

- Semicolons are optional. 

- Example : Print Full Name.
```js
// Create a variable to store the first name
let firstName = 'Fetian'

// Create a variable to store the last name
let lastName = 'Anas'

// Create a variable to store the full name
let fullName = firstName + ' ' + lastName

// Print the full name to the terminal
console.log(fullName)
````

