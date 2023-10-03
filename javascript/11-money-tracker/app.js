// STORAGE CONTROLLER, ITEM CONTROLLER, UI CONTROLLER

// STORAGE CONTROLLER

const StorageCtrl = (function () {
    return {
        value: "Storage"
    }
})();

const ItemCtrl = (function () {

    const Item = function (id, name, money) {
        this.id = id;
        this.name = name;
        this.money = money;
    }

    // DATA STRUCTURE / STATE

    const data = {
        items: [
            { id: 0, name: "clothes", money: 4000 },
            { id: 1, name: "Mobile", money: 1200 },
            { id: 2, name: "food", money: 1000 },
        ],
        currentItem: null,
        totalMoney: 0
    }

    return {
        getItems: function () {
            return data.items;
        },
        getData: function () {
            return data;
        },
        addItem: function (name, money) {
            let ID;

            //   Create a ID
            if (data.items.length > 0) {
                ID = data.items[data.items.length - 1].id + 1;
            } else {
                ID = 0;
            }

            money = parseInt(money);

            // Create a New Item
            const newItem = new Item(ID, name, money);

            // Add TO ITEM ARRAY
            data.items.push(newItem);

            return newItem;

        },
        getTotalMoney: function () {
            let total = 0;

            if (data.items.length > 0) {
                data.items.forEach(function (item) {

                    total += item.money;

                    data.totalMoney = total;
                })
            }

            return total;

        }
    }
})()

const UICtrl = (function () {
    return {
        populateItemList: function (items) {
            let html = "";

            items.forEach(function (item) {
                html += `<li class="collection-item" id=${item.id}>
             <strong>${item.name} : <em>${item.money}$</em></strong>
             <a href="#" class="secondary-content edit-item">
                 <i class="fa fa-pencil"></i>
             </a>
            </li>`;

                // Insert list Item
                document.querySelector("#item-list").innerHTML = html;

            })
        },
        clearEditState: function () {
            document.querySelector(".add-btn").style.display = "inline";
            document.querySelector(".update-btn").style.display = "none";
            document.querySelector(".delete-btn").style.display = "none";
            document.querySelector(".back-btn").style.display = "none";
        },
        showEditState: function () {
            document.querySelector(".add-btn").style.display = "none";
            document.querySelector(".update-btn").style.display = "inline";
            document.querySelector(".delete-btn").style.display = "inline";
            document.querySelector(".back-btn").style.display = "inline";
        },
        getItemInput: function () {
            return {
                name: document.querySelector("#item-name").value,
                money: document.querySelector("#item-money").value
            }
        },
        addListItem: function (item) {
            //   Create a LI element
            const li = document.createElement("li");

            // Add Class to LI
            li.className = "collection-item";

            // Add ID
            li.id = `item-${item.id}`;

            // InsertHTML
            li.innerHTML = `<strong>${item.name} : <em>${item.money}$</em></strong>
                <a href="#" class="secondary-content edit-item">
                    <i class="fa fa-pencil"></i>
                </a>`;

            // Insert li to UL
            document.querySelector(".collection").appendChild(li);
        },
        showTotalMoney: function (totalMoney) {
            document.querySelector(".total-money").textContent = totalMoney;
        },
        clearInputState: function () {
            document.querySelector("#item-name").value = "";
            document.querySelector("#item-money").value = "";
        }
    }
})()

// Test

// Test

const App = (function (ItemCtrl, UICtrl, StorageCtrl) {

    const loadEventListeners = function () {

        //  Add item Event
        document.querySelector(".add-btn").addEventListener("click", itemAddSubmit);

        // Item to edit
        document.querySelector(".collection").addEventListener("click", itemToEdit);


    }

    function itemAddSubmit(e) {
        e.preventDefault();

        // Get INPUT FROM UI
        const input = UICtrl.getItemInput();

        if (input.name === "" || input.money === "") {
            alert("Please fill all the fields");
        } else {
            // Add Item
            const newItem = ItemCtrl.addItem(input.name, input.money);

            // Add Item to ui list
            UICtrl.addListItem(newItem);

            // Get Total Money
            const totalMoney = ItemCtrl.getTotalMoney();

            // Add Total money to UI
            UICtrl.showTotalMoney(totalMoney);

            // Clear Input Fields
            UICtrl.clearInputState();

        }
    }

    function itemToEdit(e) {
        e.preventDefault();

        if (e.target.parentElement.classList.contains("edit-item")) {

            // Show three button

            UICtrl.showEditState();
        }
    }

    return {
        init: function () {

            UICtrl.clearEditState();

            const items = ItemCtrl.getItems();

            if (items.length > 0) {
                UICtrl.populateItemList(items);

                ItemCtrl.getTotalMoney();
            } else {
                console.log("No item Added")
            }

            loadEventListeners();
        }
    }
})(ItemCtrl, UICtrl, StorageCtrl);

App.init();



