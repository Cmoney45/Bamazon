const mysql = require("mysql");
const inquirer = require("inquirer");
const seperator = "-------------------------------";

const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "",
    database: "bamazon"
  });



function customerInteraction () {
    console.log(seperator)
    console.log("\nWelcome Customer!\n\n")
    connection.connect(function(err) {
        if (err) throw err;
        const query ="SELECT * FROM products";
          
        inquirer
            .prompt({
                name: "product",
                type: "list",
                message: "Which product would you like to purchase?",
                choices: ["Customer", "Employee"]
            })
            .then( function(loginResponse) {
        });
    });
};


module.exports = customerInteraction;