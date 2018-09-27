const lowInventoryConnection = require("../../base/mysqlConnection")
const { table } = require('table');
const seperator = "------------------------------------------------------------------------";
const managerPrompts = require(`./managerPrompts`);

function lowInventory(runThis) {
    let tableDisplay = [
        ["ID", "Product", "Department", "Price", "Quantity"]
    ];

    lowInventoryConnection.query(
        `SELECT id, product_name, department_name, price, quantity_available
         FROM products 
         WHERE quantity_available<=5`,

        function (err, res) {
            if (err) throw err;
            for (i in res) {
                let tableRow = [
                    res[i].id,
                    res[i].product_name,
                    res[i].department_name,
                    res[i].price,
                    res[i].quantity_available
                ];

                tableDisplay.push(tableRow);
            };

            const tableView = table(tableDisplay);

            console.log(`\n${tableView}`);
            runThis();

        })

};

module.exports = lowInventory;