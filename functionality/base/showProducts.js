const { table } = require('table');

const showProductsConnection = require("./mysqlConnection")

function displayTable(runThis) {
    const query = "SELECT id, product_name, department_name, price, quantity_available FROM products";
    let tableDisplay = [
        ["ID", "Product", "Department", "Price", "Quantity"]
    ];

    showProductsConnection.query(query, function (err, res) {
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
    });
};

module.exports = displayTable;