const { table } = require('table');
const showProductsConnection = require("../../base/mysqlConnection")

function supervisorDisplayTable(runThis) {
    const query = "SELECT id, product_name, department_name, product_sales, price, quantity_available FROM products";
    let tableDisplay = [
        ["ID", "Product", "Department", "Product Sales", "Price", "Quantity"]
    ];

    showProductsConnection.query(query, function (err, res) {
        if (err) throw err;
        let totalCount = 0;
        
        for (i in res) {
            let tableRow = [
                res[i].id,
                res[i].product_name,
                res[i].department_name,
                parseFloat(res[i].product_sales).toFixed(2),
                parseFloat(res[i].price).toFixed(2),
                parseInt(res[i].quantity_available)
            ];

            tableDisplay.push(tableRow);
            totalCount++;
        };

        const tableView = table(tableDisplay);

        console.log(`\n${tableView}`);
        runThis(totalCount);
    });
};

module.exports = supervisorDisplayTable;