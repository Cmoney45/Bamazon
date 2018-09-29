const inquirer = require("inquirer");

function supervisorNewDepartment() {
    inquirer
        .prompt([
            {
                name: "department",
                type: "input",
                message: "What is the name of the department?",
            },
            {
                name: "cost",
                type: "input",
                message: "What is the overhead cost of the department?",
                validate: function (value) {
                    if (!isNaN(value) && value > 0) {
                        return true;
                    }
                    return false;
                }
            }
        ])
        .then(function (addDepartmentRes) {

            const newDepartment = require("./updateTable_newDepartment");
            newDepartment(addDepartmentRes.department, addDepartmentRes.cost)

        });
};

module.exports = supervisorNewDepartment;