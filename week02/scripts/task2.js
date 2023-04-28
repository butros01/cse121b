/* Lesson 2 */

/* VARIABLES */

// Step 1: declare and instantiate a variable to hold your name
let myName = 'Butros Kioko'

// Step 2: place the value of the name variable into the HTML file (hint: document.querySelector())
document.querySelector('#name').textContent = myName 

// Step 3: declare and instantiate a variable to hold the current year
let currentYear = 2023

// Step 4: place the value of the current year variable into the HTML file

document.querySelector('#year').textContent = currentYear
// Step 5: declare and instantiate a variable to hold the name of your picture
let myPicture = 'butros img'

// Step 6: copy your image into the "images" folder
// Step 7: place the value of the picture variable into the HTML file (hint: document.querySelector().setAttribute())
document.querySelector('img').setAttribute('src', 'images/butros_img.jpg') = myPicture



/* ARRAYS */

// Step 1: declare and instantiate an array variable to hold your favorite foods
const favFood = ['Mokimu', 'Muthokoi']
// Step 2: place the values of the favorite foods variable into the HTML file
document.querySelector('#food').textContent = favFood
// Step 3: declare and instantiate a variable to hold another favorite food
let anotherfavorite = 'Nyama Choma'

// Step 4: add the variable holding another favorite food to the favorite food array

favFood.push(anotherfavorite)
// Step 5: repeat Step 2
document.querySelector('#food').textContent = favFood
// Step 6: remove the first element in the favorite foods array
favFood.pop(0)

// Step 7: repeat Step 2
document.querySelector('#food').textcontent = favFood
// Step 8: remove the last element in the favorite foods array
favFood.pop()
// Step 7: repeat Step 2
ddocument.querySelector('#food').textcontent = favFood


