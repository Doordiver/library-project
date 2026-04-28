// const fruitForm = document.querySelector("#inputSection form")
// const fruitList = document.querySelector("#fruitSection ul")
// const fruitNutrition = document.querySelector("#nutritionSection p")

// fruitForm.addEventListener("submit", extractBook)

// let calories = 0
// const fruitCalories = {}

// function extractBook(e) {
//     e.preventDefault() // Prevents automatic refresh when event occurs
//     fetchBookData(e.target[0].value) // When the form is submitted, take what the user typed and give it to the addFruit function
//     e.target[0].value = ""
// }

// function fetchBookData(fruit) {
//     fetch(`library_table.json`)
//         .then(processResponse)
//         .then((data) => addBook(data))
//         .catch((error) => console.log(error))
// }

// function processResponse(response) {
//     if (response.status === 200) {
//         return response.json()
//     } else {
//         throw "Error: https status code" + response.status
//     }
// }

// function addBook(book) { 
//     console.log(book.name) 
//     const li = document.createElement("li") // Create a new <li> (list item) element in JavaScript (not on the page yet)
//     li.textContent = book.name // Set the text inside the <li> to whatever was passed in (e.g. "apple")
//     li.addEventListener("click", removeBook, {once: true}) // When this <li> is clicked, run removeFruit function
// // NOTE: {once: true} means it will only run once, then the listener is removed
// }

// function removeBook(e) {
//     const bookName = e.target.textContent
//     e.target.remove()
// }

// LIBRARY BOOK FINDER CODE

// const bookForm = document.querySelector("#search-bar")

import bookData from './library_table.json' with {type : "json"};

const queryBook = function(book){
    for (let i = 0; i < bookData.length; i++) {
        if (bookData[i].title === book) {
            return [bookData[i].title, bookData[i].isbn, bookData[i].location]
        }
    }
}

console.log(queryBook("A Game Of Thrones"))

const addBook = function(addTitle, isbn, location) {
    bookData.push({
        title: addTitle,
        isbn: isbn,
        location: location
    })
}

addBook("Winds of Winter", "083274-182357", "A8")

console.log(queryBook("Winds of Winter"))

const removeBook = function(remTitle){
    for (let i = 0; i < bookData.length; i++) {
        if (bookData[i].title === remTitle) {
            bookData.splice(bookData.indexOf(remTitle), 1)
        }
    }
}

removeBook("Winds of Winter")

console.log(queryBook("Winds of Winter"))



