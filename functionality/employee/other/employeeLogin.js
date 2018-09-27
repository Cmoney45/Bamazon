const inquirer = require("inquirer");
const employeeConnection = require("../../base/mysqlConnection")


function whichEmployerPrompt() {
    inquirer
        .prompt([
            {
                name: "employerLogin",
                type: "list",
                message: "Which employer type are you logging in as?",
                choices: ["Manager", "Supervisor"]
            },
            {
                name: "password",
                type: "password",
                message: "What is the employee's super secret password?"
            }
        ])

        .then(function (employerLoginResponse) {

            switch (employerLoginResponse.employerLogin) {
                case "Manager":
                    if (employerLoginResponse.password === "password") {
                        const manager = require(`../manager/managerPrompts`);
                        manager();
                    } else {
                        console.log("That password was incorrect. Good bye!")
                        employeeConnection.end();
                    };
                    break;
                case "Supervisor":
                    if (employerLoginResponse.password === "password1") {
                        const supervisor = require(`../supervisor/supervisorPrompts`);
                        supervisor();
                    } else {
                        console.log("That password was incorrect. Good bye!")
                        employeeConnection.end();
                    };
                    break;
            }

        });
};

module.exports = whichEmployerPrompt;