const { table } = require('table');
const showProductsConnection = require("../../base/mysqlConnection")

const viewDepartmentSales = runThis => {
    const query = `SELECT departments.id, departments.department_name, sum(products.product_sales) as sales, departments.over_head_costs 
	FROM departments LEFT JOIN products ON (products.department_name = departments.department_name)
    GROUP BY department_name`;

    let tableDisplay = [
        ["ID", "Department", "Sales", "Overhead Costs", "Profit/(Loss)"]
    ];

    showProductsConnection.query(query, (err, res) => {
        if (err) throw err;

        for (i in res) {
            let salesValue = parseFloat(res[i].sales).toFixed(2);

            // Check for value if no department sales in product list
            if (isNaN(salesValue)) {
                salesValue = parseFloat(0.00).toFixed(2);
            };

            let tableRow = [
                res[i].id,
                res[i].department_name,
                salesValue,
                parseFloat(res[i].over_head_costs).toFixed(2),
                parseFloat(salesValue - parseFloat(res[i].over_head_costs)).toFixed(2)
            ];

            tableDisplay.push(tableRow);
        };

        const tableView = table(tableDisplay);

        console.log(`\n${tableView}`);

        runThis();
    });
};

module.exports = viewDepartmentSales;