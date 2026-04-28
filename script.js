// const fruitForm = document.querySelector("#inputSection form")
// const fruitList = document.querySelector("#fruitSection ul")
// const fruitNutrition = document.querySelector("#nutritionSection p")

// fruitForm.addEventListener("submit", extractBook)

// LIBRARY BOOK FINDER CODE

// const bookForm = document.querySelector("#search-bar")

import bookData from './library_table.json' with {type : "json"};

const bookForm = document.querySelector("#functions form")
bookForm.addEventListener("submit", queryBook)

function extractBook(e){
    e.preventDefault()
    queryBook(e)
    e.target[0].value = ""
}

const queryBook = function(book){
    book.preventDefault()
    for (let i = 0; i < bookData.length; i++) {
        if (bookData[i].title === book) {
            const data =[bookData[i].title, bookData[i].isbn, bookData[i].location, bookData[i].author,bookData[i].genre]
            return data
        }
    }
}

function searchBook(book){
    console.log(queryBook(book))
}
console.log(queryBook("A Game Of Thrones"))

import fs from 'fs'

const addBook = function(addTitle, isbn, author, genre, location) {
    bookData.push({
        title: addTitle,
        isbn: isbn,
        location: location,
        author : author,
        genre: genre
    })
    fs.writeFileSync(
        './library_table.json',
        JSON.stringify(bookData, null, 2))
}

addBook("Winds of Winter", "083274-182357", "A8", "George RR Martin", "Fantasy")

console.log(queryBook("Winds of Winter"))

const removeBook = function(remTitle){
    for (let i = 0; i < bookData.length; i++) {
        if (bookData[i].title === remTitle) {
            bookData.splice(bookData.indexOf(remTitle), 1)
        }
    }
        fs.writeFileSync(
        './library_table.json',
        JSON.stringify(bookData, null, 2))
}

// removeBook("Winds of Winter")

console.log(queryBook("Winds of Winter"))