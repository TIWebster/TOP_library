let myLibrary = [];

//Creates Book object
function Book(title, author, releaseYear) {
  this.title = title;
  this.author = author;
  this.releaseYear = releaseYear;
}

//Button asks for input creates Book object and adds it to the myLibrary array
const addBookButton = document.querySelector("#addBook");
addBookButton.onclick = function(){
    let title = prompt("What is the book title?");
    let author = prompt("Who is the author?");
    let releaseYear = prompt("What year was the book released?");
    let newBook = new Book(title, author, releaseYear)
    myLibrary.push(newBook);
    createCard(newBook);
}


// Creates the card for the webpage to display the book details
function createCard(book){
    let shelf = document.querySelector(".shelf");
    let child = document.createElement("div");
    child.className = "bookCard";
    child.innerHTML = `${book.title}<br>${book.author}<br>${book.releaseYear}`;
    shelf.appendChild(child);
    //Creates button to remove book from library
    let del = document.createElement("button");
    del.innerHTML = "Remove Book";
    child.appendChild(del);
    del.onclick = function(){
        //Removes book from myLibrary array, and removes it from webpage
        myLibrary = myLibrary.filter(b => b!=book);
        shelf.removeChild(child);
    }

}
