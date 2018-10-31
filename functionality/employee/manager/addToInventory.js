const updateInventoryConnection = require("../../base/mysqlConnection")
const seperator = "------------------------------------------------------------------------";
const managerPrompts = require(`./managerPrompts`);

const updateInventory = (id, quantityToAdd) => {

    updateInventoryConnection.query(
        `SELECT * FROM products WHERE id=${id}`, (firstErr, firstRes) => {
            if (firstErr) throw firstErr;

            const updateQuery = "UPDATE products SET ? WHERE ?"

            updateInventoryConnection.query(
                updateQuery,
                [
                    {
                        quantity_available: firstRes[0].quantity_available + parseInt(quantityToAdd)
                    },
                    {
                        id
                    }
                ],
                (updateErr, updateRes) => {
                    if (updateErr) throw updateErr;
                    console.log(seperator);
                    console.log(`\nSuccessfully added ${quantityToAdd} ${firstRes[0].product_name}!\n`)
                    managerPrompts();
                })
        });

};

module.exports = updateInventory;