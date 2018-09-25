const mysql = require("mysql");
const inquirer = require("inquirer");
const seperator = "-------------------------------";

// create the connection information for the sql database
const connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "",
  database: "bamazon"
});

// connect to the mysql server and sql database
connection.connect(function(err) {
  if (err) throw err;
  // run the start function after the connection is made to prompt the user
  start();
});

function start() {
    console.log(seperator)
    console.log("\nWelcome to BAMazon! The second-cousin, twice removed of Amazon!\n\n")
    inquirer
        .prompt({
            name: "userLogin",
            type: "list",
            message: "Which user type are you logging in as?",
            choices: ["Customer", "Employee"]
        })
        .then( function(loginResponse) {
            switch (loginResponse.userLogin) {
                case "Customer":
                    const customer = require(`./users/bamazonCustomer`);
                    console.log("Cool, we are still setting this part up. GIVE US TIME!!!");
                    connection.end();
                    break;
                case "Employee":
                    console.log("Beep-boop, this process is not setup. Error 1991239234. Now Exiting program. Goodbye!")
                    connection.end();
                    break;
            }

        })

}