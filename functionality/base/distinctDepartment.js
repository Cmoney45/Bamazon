const distinctConnection = require("./mysqlConnection")

function distinctDepartment(runThis) {
    const query = "SELECT DISTINCT department_name FROM products";


    distinctConnection.query(query, function (err, res) {
        if (err) throw err;
        let departments = [];

        for (i in res){
            departments.push(res[i].department_name);
        }
        runThis(departments);
    });
};

module.exports = distinctDepartment;