const inquirer = require("inquirer");

const managerAddInventoryPrompts = totalProducts => {
    inquirer
        .prompt([
            {
                name: "product",
                type: "input",
                message: "What is the ID of the item you would like to add?",
                validate: value1 => {
                    if (!isNaN(value1) && value1 <= totalProducts && value1 > 0) {
                        return true;
                    }
                    return false;
                }
            },
            {
                name: "quantityToAdd",
                type: "input",
                message: "How many would you like to add?",
                validate: value => {
                    if (!isNaN(value) && value > 0) {
                        return true;
                    }
                    return false;
                }
            }
        ])
        .then(addInventoryResponses => {

            const updateInventory = require("./addToInventory")
            updateInventory(addInventoryResponses.product, addInventoryResponses.quantityToAdd);

        });
};

module.exports = managerAddInventoryPrompts;