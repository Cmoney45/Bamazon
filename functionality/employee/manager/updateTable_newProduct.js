const updateTableConnection = require("../../base/mysqlConnection")
const seperator = "------------------------------------------------------------------------";
const managerPrompts = require(`./managerPrompts`);

const updateTable = (
    productName,
    departmentName,
    price,
    quantityAvailable
    ) => {

    updateTableConnection.query(
        `INSERT INTO products (product_name, department_name, price, quantity_available)
            VALUES ("${productName}", 
            "${departmentName}", 
            ${parseFloat(price).toFixed(2)}, 
            ${parseInt(quantityAvailable)})`,

            (err, res) => {
                if (err) throw err;

                console.log(seperator);
                console.log(`${productName} ADDED TO BAMazon!\n`);
                managerPrompts();
        })

};

module.exports = updateTable;