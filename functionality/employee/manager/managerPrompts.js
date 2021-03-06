const inquirer = require("inquirer");
const managerConnection = require("../../base/mysqlConnection")
const viewProducts = require(`../../base/showProducts`)

const employerActionPrompt = () => {
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

        .then(managerAction => {

            switch (managerAction.action) {
                case "View Products for Sale":
                    viewProducts(employerActionPrompt);
                    break;
                case "View Low Inventory":
                    const lowInventory = require(`./showLowInventory`);
                    lowInventory(employerActionPrompt);
                    break;
                case "Add to Inventory":
                    const addToInventoryPrompts = require(`./addToInventoryPrompts`);
                    viewProducts(addToInventoryPrompts);
                    break;
                case "Add New Product":
                    const distinctDepartment = require(`../../base/distinctDepartment`);
                    const addNewProduct = require(`./newProductPrompts`);
                    distinctDepartment(addNewProduct);
                    break;
                case "Quit":
                    managerConnection.end();
                    break;
            }

        });
};

module.exports = employerActionPrompt;