const inquirer = require("inquirer");
const managerConnection = require("../../base/mysqlConnection")

function employerActionPrompt() {
    inquirer
        .prompt(
            {
                name: "action",
                type: "list",
                message: "What would you like to do?",
                choices: [
                    "View Products for Sale",
                    "View Low Inventory",
                    "Add to Inventory",
                    "Add New Product",
                    "Quit"
                ]
            }
        )

        .then(function (managerAction) {

            switch (managerAction.action) {
                case "View Products for Sale":
                    const viewProducts = require(`../../base/showProducts`)
                    viewProducts(employerActionPrompt);
                    break;
                case "View Low Inventory":
                    const lowInventory = require(`./showLowInventory`);
                    lowInventory(employerActionPrompt);
                    break;
                case "Add to Inventory":

                    break;
                case "Add New Product":

                    break;
                case "Quit":
                    managerConnection.end();
                    break;
            }

        });
};

module.exports = employerActionPrompt;