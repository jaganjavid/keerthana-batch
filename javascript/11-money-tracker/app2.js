// ITEM CONTROLLER, UI CONTROLLER

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
        items:[],
        currentItem: null, // Currently selected item
        totalMoney: 0 // Total money value
    }

    // Public methods for Item Controller
    return {
        // Get all items
        getItems : async () => {
            const response = await fetch('http://localhost:3000/tasks');
            const data = await response.json();
            return data;
        },
        // Get the entire data object
        getData: function () {
            return data;
        },
        // Add a new item to the data.items array
        addItem: async function (name, money) {
            const response = await fetch('http://localhost:3000/tasks', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name, money }),
            });
            const data = await response.json();
            return data;
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
        getItemById: async function (id) {
            let found = null;
            
            const items = await ItemCtrl.getItems();

            
            items.forEach(function (item) {
                if (item.id === id) {
                    found = item;
                }
                
            })
            return found;
        },
        updateItem: async function (id, name, money) {
            const response = await fetch(`http://localhost:3000/tasks/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name, money }),
            });
            const data = await response.json();
            return data;
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
const App = (function (ItemCtrl, UICtrl) {
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
    async function itemAddSubmit(e) {
        e.preventDefault();
        const input = UICtrl.getItemInput(); // Get input from UI
        // Validate input
        if (input.name === "" || input.money === "") {
            alert("Please fill all the fields");
        } else {
            // Add item
            const newItem = await ItemCtrl.addItem(input.name, input.money);

            console.log(newItem);

            // Add item to UI list
            UICtrl.addListItem(newItem);
            // Get total money
            const totalMoney = ItemCtrl.getTotalMoney();
            // Update total money in UI
            UICtrl.showTotalMoney(totalMoney);

            // Clear input fields
            UICtrl.clearInputState();

            UICtrl.removeActive();
        }
    }

    // Function to handle item editing
    async function itemToEdit(e) {
        e.preventDefault();
        if (e.target.parentElement.classList.contains("edit-item")) {
            UICtrl.showEditState(); // Show edit-related buttons
            const listId = e.target.parentElement.parentElement.id; // Get item ID from LI
            const listArr = listId.split("-"); // Split ID string 
            const id = parseInt(listArr[1]); // Get actual ID
            const itemToEdit = await ItemCtrl.getItemById(id); // Get item to edit
            ItemCtrl.setCurrentItem(itemToEdit); // Set current item
            UICtrl.addItemToForm(); // Add item to form for editing
            UICtrl.addActive();
        }
    }

    // Function to handle item updating
    async function itemUpdateSubmit(e) {
        e.preventDefault();
        const input = UICtrl.getItemInput(); // Get item input
        const id = ItemCtrl.getCurrentItem().id;
        const updateItem = await ItemCtrl.updateItem(id, input.name, input.money); // Update item
        UICtrl.updateListItem(updateItem); // Update item in UI
        const totalMoney = ItemCtrl.getTotalMoney(); // Get total money
        UICtrl.showTotalMoney(totalMoney); // Update total money in UI
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
        init: async function () {
            UICtrl.clearEditState(); // Clear edit state
            
            const items = await ItemCtrl.getItems(); 

            // console.log(items);

            if (items.length > 0) {
                UICtrl.populateItemList(items); 
                const totalMoney = ItemCtrl.getTotalMoney(); 
                UICtrl.showTotalMoney(totalMoney); 
            } else {
                console.log("No item Added")
            }
            
            loadEventListeners(); // Load event listeners
        }
    }
})(ItemCtrl, UICtrl);

// Initialize the application
App.init();

