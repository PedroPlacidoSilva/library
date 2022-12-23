let myLibrary = [
  ["The Odin List of Treasures by Odin", "220", "read"],
  ["The Emperor by Shiklun", "145", "read"],
  ["The Girl of the Blue Train by Shiklun", "173", "not read yet"],
  ["The Shinoby of the Sand by Ninpo", "85", "not read yet"],
];

// Create a new Book with all characteristics
class Book {
  constructor(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function () {
      let text = "";
      if (read === "true") {
        text = "read";
      } else {
        text = "not read yet";
      }
      // return `${this.title} by ${this.author}, ${this.pages}, ${text}`;
      return [`${this.title} by ${this.author}`, `${this.pages}`, `${text}`];
    };
  }
}

// Pedro
function displayBooks(books) {
  // Delete all elements inside the cards div element (In order to present the updated library)
  const delBooks = document.getElementById("cards");
  delBooks.innerHTML = "";

  const cardsContainer = document.getElementById("cards");
  for (let i = 0; i < books.length; i++) {
    // Create card for the book and set id to the card+number of index of the array and a class card
    const div = document.createElement("div");
    div.id = "card" + i.toString();
    div.classList.add("card");
    // Create element and set the first element of each book on html
    const titleBook = document.createElement("p");
    titleBook.classList.add("card-content");
    titleBook.textContent = `Book: ${books[i][0]}`;
    // Create element and set the second element of each book on html
    const pagesBook = document.createElement("p");
    pagesBook.classList.add("card-content");
    pagesBook.textContent = `Pages: ${books[i][1]}`;
    // Create element and set the third element of each book on html
    const readBook = document.createElement("p");
    readBook.classList.add("card-content");
    readBook.textContent = `Status: ${books[i][2]}`;
    // Append the card div to the div with id cards
    cardsContainer.appendChild(div);
    // Append the paragraph's to the each card (div element created)
    div.appendChild(titleBook);
    div.appendChild(pagesBook);
    div.appendChild(readBook);
  }
}

// Function to Add Book to Library
function addBookToLibrary(event) {
  // Prevent the page to reload itself when submit
  event.preventDefault();
  // Stores all elements of the user in variables
  let bookTitle = document.getElementById("bookTitle").value;
  let bookAuthor = document.getElementById("bookAuthor").value;
  let bookPages = document.getElementById("bookPages").value;
  let bookRead = selectBookRead.value;

  // myBook will store the array with user input for each book
  let myBook = new Array();
  // Stores information of the new book created
  let newBook = new Array();
  myBook.push(bookTitle);
  myBook.push(bookAuthor);
  myBook.push(bookPages);
  myBook.push(bookRead);

  // reset the user input after storing the array
  formBook.reset();
  // Create a new book ()
  newBook = new Book(myBook[0], myBook[1], myBook[2], myBook[3]);
  // Store the new Book on library in the format required
  console.log(newBook);
  myLibrary.push(newBook.info());
  // Clear the array with user input
  myBook = [];
  // Display the updated version of the lybrary
  displayBooks(myLibrary);
}

// formBook - Store all elements of the form
const formBook = document.getElementById("bookInfo");
// selectBookRead - Store all elements of the select option
const selectBookRead = document.getElementById("read");

// Extract values inputed by the user. Submit event only when all required
// elements have been inputed by the user  (does not start the event otherwise)
formBook.addEventListener("submit", addBookToLibrary);

displayBooks(myLibrary);
