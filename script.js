let myLibrary = [];

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
  myLibrary.push(newBook.info());
  // Clear the array with user input
  myBook = [];
  console.log(newBook.info());
}

// formBook - Store all elements of the form
const formBook = document.getElementById("bookInfo");
// selectBookRead - Store all elements of the select option
const selectBookRead = document.getElementById("read");

// Extract values inputed by the user. Submit event only when all required
// elements have been inputed by the user  (does not start the event otherwise)
formBook.addEventListener("submit", addBookToLibrary);

function addBookToLibrary() {}

myLibrary.push(["The Odin List of Treasures by Odin", "220", "read"]);
myLibrary.push(["The Emperor by Shiklun", "145", "read"]);
myLibrary.push([
  "The Girl of the Blue Train by Shiklun",
  "173",
  "not read yet",
]);
myLibrary.push(["The Shinoby of the Sand by Ninpo", "85", "not read yet"]);
// const theHobbit = new Book("The Hobbit", "J.R.R. Tolkien", 295, true);

// console.log(theHobbit.info());
