const { table } = require('table');
const showProductsConnection = require("../../base/mysqlConnection")

function viewDepartmentSales(runThis) {
    const query = `SELECT departments.id, departments.department_name, sum(products.product_sales) as sales, departments.over_head_costs 
	FROM departments LEFT JOIN products ON (products.department_name = departments.department_name)
    GROUP BY department_name`;

    let tableDisplay = [
        ["ID", "Department", "Sales", "Overhead Costs", "Profit/(Loss)"]
    ];

    showProductsConnection.query(query, function (err, res) {
        if (err) throw err;
        
        for (i in res) {
            let tableRow = [
                res[i].id,
                res[i].department_name,
                parseFloat(res[i].sales).toFixed(2),
                parseFloat(res[i].over_head_costs).toFixed(2),
                parseFloat(parseFloat(res[i].sales) - parseFloat(res[i].over_head_costs)).toFixed(2)
            ];

            tableDisplay.push(tableRow);
        };

        const tableView = table(tableDisplay);

        console.log(`\n${tableView}`);

        runThis();
    });
};

module.exports = viewDepartmentSales;