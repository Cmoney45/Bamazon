const seperator = "------------------------------------------------------------------------";
const displayTable = require("../functionality/base/showProducts");
const employeePrompts = require(`../functionality/employee/employeePrompts`)

const employeeInteraction = () => {
    console.log(seperator)
    console.log("\n  -------     Welcome Mr. Manager!    --------")
    displayTable(employeePrompts);

};


module.exports = employeeInteraction;