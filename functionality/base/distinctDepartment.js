const distinctConnection = require("./mysqlConnection")

function distinctDepartment(runThis) {

    const query = "SELECT DISTINCT department_name FROM departments";

    distinctConnection.query(query, function (firstErr, firstRes) {
        if (firstErr) throw firstErr;
        let departments = [];

        for (i in firstRes) {
            departments.push(firstRes[i].department_name);

        }

        runThis(departments);

    });
};

module.exports = distinctDepartment;