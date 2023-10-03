// BOOK CONSTRUCTOR

function Book(title, author, isbn){
    this.title = title,
    this.author = author, 
    this.isbn = isbn
}

// UI CONSTRUCTOR


function UI(){

    // Add book to list

    UI.prototype.addBookToList = function(book){
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

    // Clear fileds
    UI.prototype.clearFileds = function(){
      document.getElementById("title").value = "";
      document.getElementById("author").value = "";
      document.getElementById("isbn").value = "";
    }

    // DELETE 
    UI.prototype.deleteBook = function(target){
        if(target.classList.contains("delete")){
           target.parentElement.parentElement.remove();
        }
    }

    // UI ALERT
    UI.prototype.showAlert = function(message, className){
      
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
        ui.showAlert("Book removed successfully", "alert-success");
    }
})


