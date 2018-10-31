const inquirer = require("inquirer");

const supervisorNewDepartment = () => {
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
                validate: value => {
                    if (!isNaN(value) && value > 0) {
                        return true;
                    }
                    return false;
                }
            }
        ])
        .then(addDepartmentRes => {

            const newDepartment = require("./updateTable_newDepartment");
            newDepartment(addDepartmentRes.department, addDepartmentRes.cost)

        });
};

module.exports = supervisorNewDepartment;