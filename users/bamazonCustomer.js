const seperator = "------------------------------------------------------------------------";
const displayTable = require("../functionality/base/showProducts");
const customerPrompts = require(`../functionality/customer/customerPrompts`)

const customerInteraction = () => {
    console.log(seperator)
    console.log("\n  -------     Welcome Customer!    --------")
    displayTable(customerPrompts);

};


module.exports = customerInteraction;