const inquirer = require("inquirer");

const managerNewProductPrompts = departmentList => {
    inquirer
        .prompt([
            {
                name: "product",
                type: "input",
                message: "What is the name of the product you would like to add?",
            },
            {
                name: "department",
                type: "list",
                message: "Which department does this product fall into?",
                choices: departmentList
            },
            {
                name: "cost",
                type: "input",
                message: "How much does it cost?",
                validate: value => {
                    if (!isNaN(value) && value > 0) {
                        return true;
                    }
                    return false;
                }
            },
            {
                name: "quantity",
                type: "input",
                message: "How many do we have?",
                validate: value => {
                    if (!isNaN(value) && value > 0) {
                        return true;
                    }
                    return false;
                }
            }
        ])
        .then(addProductRes => {

            const newProduct = require("./updateTable_newProduct");
            newProduct(addProductRes.product, addProductRes.department, addProductRes.cost, addProductRes.quantity)

        });
};

module.exports = managerNewProductPrompts;