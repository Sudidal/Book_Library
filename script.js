const titleInput = document.querySelector("#title-input");
const authorInput = document.querySelector("#author-input");
const pagesInput = document.querySelector("#pages-input");
const readInput = document.querySelector("#read-input");
const addBtn = document.querySelector("#addbtn");
const cancelBtn = document.querySelector("#cancel-btn");
const booksContainer = document.querySelector(".books-container");
const addBookBtn = document.querySelector(".add-book-btn");
const modal = document.querySelector("[data-modal]")
const form = document.querySelector("dialog form")
const bookTemplate = document.querySelector(".book-template")

let books = [];

addBookBtn.addEventListener("click", () => {
    modal.showModal();
});
cancelBtn.addEventListener("click", () => {
    modal.close();
});

addBtn.addEventListener("click", () => {
    if(form.checkValidity())
    {
        addBook();
    }
});

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBook() {
    const title = titleInput.value;
    const author = authorInput.value;
    const pages = pagesInput.value;
    const read = readInput.checked;

    const bookObject = new Book(title, author, pages, read);
    createBookElement(bookObject);
}

function createBookElement(bookObject) {
    const newBook = bookTemplate.cloneNode(true)
    newBook.style = "display: block"
    newBook.classList.remove("book-template")

    const title = newBook.querySelector(".title");
    const author = newBook.querySelector(".author");
    const pages = newBook.querySelector(".pages");
    const read = newBook.querySelector(".read");
    const deleteBtn = newBook.querySelector(".deletebtn")


    title.innerText = bookObject.title;
    author.innerText = bookObject.author;
    pages.innerText = bookObject.pages;
    read.innerText = bookObject.read? "I have read this book" : "I haven't read this book"

    books.push(newBook);
    deleteBtn.addEventListener("click", () => {
        books.splice(books.length - 1, 1);
        booksContainer.removeChild(newBook);
    })
    booksContainer.appendChild(newBook);
}