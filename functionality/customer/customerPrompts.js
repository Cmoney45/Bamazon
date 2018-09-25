const inquirer = require("inquirer");

function customerPrompts() {
    inquirer
        .prompt([
            {
                name: "product",
                type: "input",
                message: "Which product would you like to purchase?",
            },
            {
                name: "quantityPurchased",
                type: "input",
                message: "How much do you want to purchase?",
                validate: function (value) {
                    if (!isNaN(value) || value < 1) {
                        return true;
                    }
                    return false;
                }
            }
        ])
        .then(function (loginResponse) {

            const updateTable = require("./updateTable_customerPurchase")
            updateTable(loginResponse.product, loginResponse.quantityPurchased);

        });
};

module.exports = customerPrompts;