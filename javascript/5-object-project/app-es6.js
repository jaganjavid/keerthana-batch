
class Book {
    constructor(title, author, isbn){
        this.title = title,
        this.author = author, 
        this.isbn = isbn
    }
}


class UI{
    addBookToList(book){
        const bodyList = document.querySelector("#book-lists");

        // create a tr element

        const row = document.createElement("tr");

        row.innerHTML = `
            <td>${book.title}</td>
            <td>${book.author}</td>
            <td>${book.isbn}</td>
            <td><i class="delete fa-solid fa-trash"></i></td>
        `;

        bodyList.appendChild(row);
    }

    clearFileds(){
        document.getElementById("title").value = "";
        document.getElementById("author").value = "";
        document.getElementById("isbn").value = "";
    }

    deleteBook(target){
        if(target.classList.contains("delete")){
            target.parentElement.parentElement.remove();
        }
    }

    showAlert(message, className){
        // Create a div element
        const div = document.createElement("div");

        // Add Class
        div.className = `alert ${className}`;

        // Add Text
        div.appendChild(document.createTextNode(message));

        const insertAlert = document.querySelector(".app-alert");

        insertAlert.appendChild(div);

        setTimeout(function(){
            div.remove();
       }, 3000)
    }
}

class Store{
    static getBooks(){
        let books;

        if(localStorage.getItem("books") === null){
            books = [];
        } else{
            books = JSON.parse(localStorage.getItem("books"));
        }

        return books;

    }

    static addBook(book){
        const books = Store.getBooks(); 

        books.push(book);

        localStorage.setItem("books", JSON.stringify(books));
    }

    static displayBooks(){
        const books = Store.getBooks(); 

        books.forEach(function(book){
           const ui = new UI();

           ui.addBookToList(book);
        })
    }

    static removeBook(isbn){
        const books = Store.getBooks();
        
        books.forEach(function(book, index){
            const ui = new UI();
 
            if(book.isbn === isbn){
                books.splice(index, 1);
            }
         })

         localStorage.setItem("books", JSON.stringify(books));

    }

}

// DOM LOAD EVENT

document.addEventListener("DOMContentLoaded", Store.displayBooks)


// EVENT LISTENER FOR ADD BOOK

document.getElementById("book-form").addEventListener("submit", function(e){

    e.preventDefault();
   
    const title = document.getElementById("title").value;
    const author = document.getElementById("author").value;
    const isbn = document.getElementById("isbn").value;

    // INSTANTIATE BOOK

    const book = new Book(title, author, isbn);
    const ui = new UI();

    // Validation

    if(title === "" || author === "" || isbn === ""){
        ui.showAlert("Please fill the form", "alert-danger");
    }else{
        ui.addBookToList(book);
        Store.addBook(book);
        ui.clearFileds();
        ui.showAlert("Book added successfully", "alert-success");
    }
    
})

// EVENT LISTENER FOR DELETE BOOK

document.querySelector("#book-lists").addEventListener("click", function(e){
    e.preventDefault();

    if(e.target.classList.contains("delete")){

        const ui = new UI();

        // Delete Book
        ui.deleteBook(e.target);

        const isbn = e.target.parentElement.previousElementSibling.textContent;

        Store.removeBook(isbn);

        ui.showAlert("Book removed successfully", "alert-success");
    }
})



// console.log(localStorage.getItem("test"));

// const obj = {
//     name:'jagan'
// }

// console.log(obj);

// const str = JSON.stringify(obj);

// console.log(str);
// console.log(typeof str);

// const convertToObj = JSON.parse(str);

// console.log(convertToObj);
// console.log(typeof convertToObj);

// const fruits = ["kiwi", "Orange", "Apple"];

// fruits.splice(1, 1, "Lemon");

// console.log(fruits);




























// const ui = new UI();

// console.log(ui);


// class Person{
//     constructor(firstName, lastName){
//         this.firstName = firstName;
//         this.lastName = lastName;
//     }
    
//     getFullName(){
//         return this.firstName + " " + this.lastName;
//     }
    
// }

// const jagan = new Person("jagan", "javid");


// console.log(jagan.getFullName());