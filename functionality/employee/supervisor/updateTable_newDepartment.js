const updateTableConnection = require("../../base/mysqlConnection")
const seperator = "------------------------------------------------------------------------";
const supervisorPrompts = require(`./supervisorPrompts`);

const updateTable = (departmentName, overheadCosts) => {

    updateTableConnection.query(
        `INSERT INTO departments (department_name, over_head_costs )
            VALUES ("${departmentName}","${overheadCosts}")`,

        (err, res) => {
            if (err) throw err;

            console.log(seperator);
            console.log(`Department ${departmentName} ADDED!!!\n`);
            supervisorPrompts();
        })

};

module.exports = updateTable;