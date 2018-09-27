const inquirer = require("inquirer");
const supervisorConnection = require("../../base/mysqlConnection")

function supervisorActionPrompt() {
    inquirer
        .prompt(
            {
                name: "action",
                type: "list",
                message: "What would you like to do?",
                choices: [
                    "View Products Sales by Department",
                    "Create New Department",
                    "Quit"
                ]
            }
        )

        .then(function (managerAction) {

            switch (managerAction.action) {
                case "View Products Sales by Department":
                    console.log("\nEverybody is doing great! No one needs to be fired!\n")
                    supervisorActionPrompt();
                    break;
                case "Create New Department":
                    console.log("\nWe're fine, we dont need any more of these.\n")
                    supervisorActionPrompt();
                    break;
                case "Quit":
                    supervisorConnection.end();
                    break;
            }

        });
};

module.exports = supervisorActionPrompt;