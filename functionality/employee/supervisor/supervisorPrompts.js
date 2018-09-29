const inquirer = require("inquirer");
const supervisorConnection = require("../../base/mysqlConnection")
const supervisorViewProducts = require(`./supervisorShowProducts`);
const viewDepartmentSales = require(`./viewDepartmentSales`);

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

        .then(function (supervisorAction) {

            switch (supervisorAction.action) {
                case "View Products Sales by Department":
                    viewDepartmentSales(supervisorActionPrompt)
                    break;
                case "Create New Department":
                    const createDepartment = require(`./newDepartmentPrompts`);
                    createDepartment();
                    break;
                case "Quit":
                    supervisorConnection.end();
                    break;
            }

        });
};

module.exports = supervisorActionPrompt;