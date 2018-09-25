const displayTable = require("./showProducts");
const updateTableConnection = require("../base/mysqlConnection")
const seperator = "------------------------------------------------------------------------";


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
                        console.log(`Your total charged was $${(firstRes[0].price * quantityPurchased).toFixed(2)}`)
                        displayTable();

                    })
            }
        })

};

module.exports = updateTable;