// STORAGE CONTROLLER, ITEM CONTROLLER, UI CONTROLLER

// STORAGE CONTROLLER
const StorageCtrl = (function () {
    // Storage Controller with a value property "Storage"
    return {
        storeItem: function(item){
           let items;

           // Check if any item in local Storage
           if(localStorage.getItem("items") === null){

              items = [];
              console.log("Step - 1")
           } else {
              
            // Get the existing data from ls
            items = JSON.parse(localStorage.getItem("items"));
            console.log("Step - 2")
           }

           items.push(item);

           localStorage.setItem("items", JSON.stringify(items));

        },
        getItems: function(){
            let items;

           // Check if any item in local Storage
           if(localStorage.getItem("items") === null){
              items = [];
           } else {
            // Get the existing data from ls
            items = JSON.parse(localStorage.getItem("items"));
           }

           return items;
        },
        updateItemLs: function(updatedItem){

          // Get the existing data from ls
          const items = JSON.parse(localStorage.getItem("items"));
          
          items.forEach(function(item, index){
             if(updatedItem.id === item.id){
                items.splice(index, 1, updatedItem);
             }
          })

          localStorage.setItem("items", JSON.stringify(items));
          
        },
        deleteItemLs: function(id){

            // Get the existing data from ls
          const items = JSON.parse(localStorage.getItem("items"));

          items.forEach(function(item, index){
            if(id === item.id){
               items.splice(index, 1);
            }
         })

         localStorage.setItem("items", JSON.stringify(items));
        }
    }
})();


// ITEM CONTROLLER
const ItemCtrl = (function () {
    // Private function constructor for creating items (id, name, money)
    const Item = function (id, name, money) {
        this.id = id;
        this.name = name;
        this.money = money;
    }

    // DATA STRUCTURE / STATE
    const data = {
        // Initial items with id, name, and money
        // items: [
        //     { id: 0, name: "clothes", money: 4000 },
        //     { id: 1, name: "Mobile", money: 1200 },
        //     { id: 2, name: "food", money: 1000 },
        // ],
        items:StorageCtrl.getItems(),
        currentItem: null, // Currently selected item
        totalMoney: 0 // Total money value
    }

    // Public methods for Item Controller
    return {
        // Get all items
        getItems: function () {
            return data.items;
        },
        // Get the entire data object
        getData: function () {
            return data;
        },
        // Add a new item to the data.items array
        addItem: function (name, money) {
            // Create a unique ID for the new item
            let ID;
            if (data.items.length > 0) {
                ID = data.items[data.items.length - 1].id + 1;
            } else {
                ID = 0;
            }
            money = parseInt(money);
            // Create a new item using the Item constructor
            const newItem = new Item(ID, name, money);
            // Add the new item to the items array
            data.items.push(newItem);
            // Return the newly created item
            return newItem;
        },
        // Get the total money of all items in the data.items array
        getTotalMoney: function () {
            let total = 0;
            if (data.items.length > 0) {
                // Loop through items and calculate total money
                data.items.forEach(function (item) {
                    total += item.money;
                    data.totalMoney = total;
                })
            }
            // Return the total money
            return total;
        },
        // Find and return an item by its ID
        getItemById: function (id) {
            let found = null;
            data.items.forEach(function (item) {
                if (item.id === id) {
                    found = item;
                }
            })
            return found;
        },
        // Set the current item to be edited
        setCurrentItem: function (editableItem) {
            data.currentItem = editableItem;
        },
        // Get the currently selected item
        getCurrentItem: function () {
            return data.currentItem;
        },
        // Update the item's name and money value
        updateItem: function (name, money) {
            money = parseInt(money);
            let found = null;
            // Loop through items and update the matching item
            data.items.forEach(function (item) {
                if (item.id === data.currentItem.id) {
                    item.name = name;
                    item.money = money;
                    found = item;
                }
            })
            return found;
        },
        // Delete an item by its ID
        deleteItem: function (id) {
            // Get IDs
            const ids = data.items.map(function (item) {
                return item.id;
            })
            // Get the index of the item to be deleted
            const index = ids.indexOf(id);
            // Remove the item from the items array
            data.items.splice(index, 1);
        },
        // Clear all items from the data.items array
        clearAllItems: function () {
            data.items = [];
        }
    }
})()

// UI CONTROLLER
const UICtrl = (function () {
    // Public methods for UI Controller
    return {
        // Populate the item list in the UI with provided items
        populateItemList: function (items) {
            let html = "";
            // Loop through items and create list elements
            items.forEach(function (item) {
                html += `<li class="collection-item" id="item-${item.id}">
             <strong>${item.name} : <em>${item.money}$</em></strong>
             <a href="#" class="secondary-content edit-item">
                 <i class="fa fa-pencil"></i>
             </a>
            </li>`;
            })
            // Insert the list items into the DOM
            document.querySelector("#item-list").innerHTML = html;
        },
        // Clear the edit state by hiding edit-related buttons
        clearEditState: function () {
            document.querySelector(".add-btn").style.display = "inline";
            document.querySelector(".update-btn").style.display = "none";
            document.querySelector(".delete-btn").style.display = "none";
            document.querySelector(".back-btn").style.display = "none";
        },
        // Show the edit state by displaying edit-related buttons
        showEditState: function () {
            document.querySelector(".add-btn").style.display = "none";
            document.querySelector(".update-btn").style.display = "inline";
            document.querySelector(".delete-btn").style.display = "inline";
            document.querySelector(".back-btn").style.display = "inline";
        },
        // Get item input values from the UI
        getItemInput: function () {
            return {
                name: document.querySelector("#item-name").value,
                money: document.querySelector("#item-money").value
            }
        },
        // Add a new list item to the UI
        addListItem: function (item) {
            const li = document.createElement("li"); // Create a new LI element
            li.className = "collection-item"; // Add class to LI
            li.id = `item-${item.id}`; // Set ID
            li.innerHTML = `<strong>${item.name} : <em>${item.money}$</em></strong>
                <a href="#" class="secondary-content edit-item">
                    <i class="fa fa-pencil"></i>
                </a>`; // Insert HTML into LI
            document.querySelector(".collection").appendChild(li); // Insert LI into UL
        },
        // Display the total money in the UI
        showTotalMoney: function (totalMoney) {
            document.querySelector(".total-money").textContent = totalMoney;
        },
        // Clear input fields in the UI
        clearInputState: function () {
            document.querySelector("#item-name").value = "";
            document.querySelector("#item-money").value = "";
        },
        // Add current item values to the input fields for editing
        addItemToForm: function () {
            document.querySelector("#item-name").value = ItemCtrl.getCurrentItem().name;
            document.querySelector("#item-money").value = ItemCtrl.getCurrentItem().money;
        },
        // Update the corresponding list item in the UI after editing
        updateListItem: function (item) {
            let listItems = document.querySelectorAll("li");
            listItems.forEach(function (listItem) {
                const itemId = listItem.getAttribute("id");
                if (itemId === `item-${item.id}`) {
                    document.querySelector(`#${itemId}`).innerHTML = `
                    <strong>${item.name} : <em>${item.money}$</em></strong>
                    <a href="#" class="secondary-content edit-item">
                        <i class="fa fa-pencil"></i>
                    </a>`;
                }
            })
        },
        // Delete the corresponding list item from the UI
        deleteListItem: function (id) {
            const itemId = `#item-${id}`;
            const item = document.querySelector(itemId);
            item.remove();
        },
        // Clear all items from the UI
        clearItems: function () {
            const itemLi = document.querySelectorAll(".collection-item");
            itemLi.forEach(function (li) {
                li.remove();
            })
        },
        addActive: function(){
            const labels = document.querySelectorAll("label");
            
            labels.forEach(function(label){
                label.classList.add("active");
            })
        },
        removeActive: function(){
            const labels = document.querySelectorAll("label");
            
            labels.forEach(function(label){
                label.classList.remove("active");
            })
        }
    }
})()

// APP CONTROLLER
const App = (function (ItemCtrl, UICtrl, StorageCtrl) {
    // Function to load event listeners
    const loadEventListeners = function () {
        // Add item event listener
        document.querySelector(".add-btn").addEventListener("click", itemAddSubmit);
        // Edit item event listener
        document.querySelector(".collection").addEventListener("click", itemToEdit);
        // Update item event listener
        document.querySelector(".update-btn").addEventListener("click", itemUpdateSubmit);
        // Delete item event listener
        document.querySelector(".delete-btn").addEventListener("click", itemDeleteSubmit);
        // Clear all items event listener
        document.querySelector(".clear-btn").addEventListener("click", clearAllItemClick);
        // Back button event listener
        document.querySelector(".back-btn").addEventListener("click", function (e) {
            e.preventDefault();
            UICtrl.clearEditState();
            UICtrl.clearInputState();
            UICtrl.removeActive();
        })
    }

    // Function to handle item addition
    function itemAddSubmit(e) {
        e.preventDefault();
        const input = UICtrl.getItemInput(); // Get input from UI
        // Validate input
        if (input.name === "" || input.money === "") {
            alert("Please fill all the fields");
        } else {
            // Add item
            const newItem = ItemCtrl.addItem(input.name, input.money);
            // Add item to UI list
            UICtrl.addListItem(newItem);
            // Get total money
            const totalMoney = ItemCtrl.getTotalMoney();
            // Update total money in UI
            UICtrl.showTotalMoney(totalMoney);

            StorageCtrl.storeItem(newItem);

            // Clear input fields
            UICtrl.clearInputState();

            UICtrl.removeActive();
        }
    }

    // Function to handle item editing
    function itemToEdit(e) {
        e.preventDefault();
        if (e.target.parentElement.classList.contains("edit-item")) {
            UICtrl.showEditState(); // Show edit-related buttons
            const listId = e.target.parentElement.parentElement.id; // Get item ID from UI
            const listArr = listId.split("-"); // Split ID string 
            const id = parseInt(listArr[1]); // Get actual ID
            const itemToEdit = ItemCtrl.getItemById(id); // Get item to edit
            ItemCtrl.setCurrentItem(itemToEdit); // Set current item
            UICtrl.addItemToForm(); // Add item to form for editing
            UICtrl.addActive();
        }
    }

    // Function to handle item updating
    function itemUpdateSubmit(e) {
        e.preventDefault();
        const input = UICtrl.getItemInput(); // Get item input
        const updateItem = ItemCtrl.updateItem(input.name, input.money); // Update item
        UICtrl.updateListItem(updateItem); // Update item in UI
        const totalMoney = ItemCtrl.getTotalMoney(); // Get total money
        UICtrl.showTotalMoney(totalMoney); // Update total money in UI
        StorageCtrl.updateItemLs(updateItem);
        UICtrl.clearInputState(); // Clear input fields
        UICtrl.clearEditState(); // Clear edit state
        UICtrl.removeActive();
    }

    // Function to handle item deletion
    const itemDeleteSubmit = function (e) {
        e.preventDefault();
        const currentItem = ItemCtrl.getCurrentItem(); // Get current item
        ItemCtrl.deleteItem(currentItem.id); // Delete item from data structure
        UICtrl.deleteListItem(currentItem.id); // Delete item from UI
        const totalMoney = ItemCtrl.getTotalMoney(); // Get total money
        UICtrl.showTotalMoney(totalMoney); // Update total money in UI
        StorageCtrl.deleteItemLs(currentItem.id);
        UICtrl.clearInputState(); // Clear input fields
        UICtrl.clearEditState(); // Clear edit state
        UICtrl.removeActive();
    }

    // Function to handle clearing all items
    function clearAllItemClick(e) {
        e.preventDefault();
        ItemCtrl.clearAllItems(); // Clear all items from data structure
        UICtrl.clearItems(); // Clear all items from UI
        const totalMoney = ItemCtrl.getTotalMoney(); // Get total money
        UICtrl.showTotalMoney(totalMoney); // Update total money in UI
        localStorage.removeItem("items");
    }

    // Public initialization function
    return {
        init: function () {
            UICtrl.clearEditState(); // Clear edit state
            const items = ItemCtrl.getItems(); // Get items from data structure
            if (items.length > 0) {
                UICtrl.populateItemList(items); // Populate item list in UI
                const totalMoney = ItemCtrl.getTotalMoney(); // Get total money
                UICtrl.showTotalMoney(totalMoney); // Update total money in UI
            } else {
                console.log("No item Added")
            }
            
            loadEventListeners(); // Load event listeners
        }
    }
})(ItemCtrl, UICtrl, StorageCtrl);

// Initialize the application
App.init();

