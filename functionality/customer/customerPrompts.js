const inquirer = require("inquirer");
const customerPromptConnection = require("../base/mysqlConnection")

function customerPrompts(totalProducts) {
    inquirer
        .prompt([
            {
                name: "product",
                type: "input",
                message: "Which is the ID of the product you would like to purchase? [Quit with Q]",
                validate: function (value1) {
                    if (value1 === "q" || value1 === "Q") {
                        customerPromptConnection.end();
                        customerPromptConnection.end();
                        return;
                    } else if (!isNaN(value1) && value1 <= totalProducts && value1 > 0) {
                        return true;
                    } else {
                        return false;
                    }
                }
            },
            {
                name: "quantityPurchased",
                type: "input",
                message: "How much do you want to purchase?",
                validate: function (value2) {
                    if (!isNaN(value2) && value2 > 0) {
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