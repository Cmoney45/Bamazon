const displayTable = require("../base/showProducts");
const updateTableConnection = require("../base/mysqlConnection")
const seperator = "------------------------------------------------------------------------";
const customerPrompts = require(`./customerPrompts`);

function updateTable(id, quantityPurchased) {

    updateTableConnection.query(
        `SELECT * FROM products WHERE id=${id}`, function (firstErr, firstRes) {
            if (firstErr) throw firstErr;

            if ((firstRes[0].quantity_available - quantityPurchased) < 0) {
                console.log("\nSorry, there is not enough of that item to purchase. Please choose a lower quantity.")
                displayTable();

            } else {
                const updateQuery = "UPDATE products SET ? WHERE ?"

                updateTableConnection.query(
                    updateQuery,
                    [
                        {
                            quantity_available: firstRes[0].quantity_available - quantityPurchased
                        },
                        {
                            id
                        }
                    ],
                    function (updateErr, updateRes) {
                        if (updateErr) throw updateErr;
                        console.log(seperator);
                        console.log(`\nThank you for your purchase of ${quantityPurchased} ${firstRes[0].product_name}!`)
                        console.log(`The total charged to you was $${(firstRes[0].price * quantityPurchased).toFixed(2)}`)
                        displayTable(customerPrompts);

                    })
            }
        })

};

module.exports = updateTable;