const seperator = "------------------------------------------------------------------------";
const displayTable = require("../functionality/customer/showProducts");


function customerInteraction() {
    console.log(seperator)
    console.log("\n  -------     Welcome Customer!    --------")
    displayTable();

};


module.exports = customerInteraction;