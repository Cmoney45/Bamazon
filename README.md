# BAMazon

## Description

  This application is a simple command line storefront using the npm [inquirer](https://www.npmjs.com/package/inquirer) package and the MySQL database together with the npm [mysql](https://www.npmjs.com/package/mysql) package. The application presents three main interfaces run from the single app: **customer**, **manager**, and **supervisor**.

## Install Instructions

### MySQL Database Setup

  You should have MySQL already set up on your machine. If you don't, visit the [MySQL installation page](https://dev.mysql.com/doc/refman/5.6/en/installing.html) to install the version you need for your operating system. Once you have MySQL installed, you will be able to create the *Bamazon* database and the *products* table with the SQL code found in [bamazonSchema.sql](Bamazon.sql).

### Clone Repository

To get the program running, you need to clone it to your machine. Open up GIT on your machine and use the following commands.

    git clone git@github.com:Cmoney45/bamazon.git
	  cd bamazon
	  npm i
	  node bamazon


## Running the Program

### Customer Interface

  The customer interface allows the user to view the current inventory of store items: item IDs, descriptions, department in which the item is located and price. The user is then able to purchase one of the existing items by entering the item ID and the desired quantity. If the selected quantity is currently in stock, the user's order is fulfilled, displaying the total purchase price and updating the store database. If the desired quantity is not available, the user is prompted to redo their order.

### Manager Interace

The manager interface presents a list of four options: 

	  View Products for Sale 
	  View Low Inventory 
	  Add to Inventory 
	  Add New Product
	  
The **View Products for Sale** option allows the user to view the current inventory of store items: item IDs, descriptions, department in which the item is located, price, and the quantity available in stock. 

The **View Low Inventory** option shows the user the items which currently have fewer than 100 units available.

The **Add to Inventory** option allows the user to select a given item ID and add additional inventory to the target item.

The **Add New Product** option allows the user to enter details about a new product which will be entered into the database upon completion of the form.

### Bamazon Demo

You can download and watch the demo of the Bamazon customer and manager interfaces at the link below. Make sure to download the video, as opposed to watching it in your Browser, which will display a compressed version making the CLI output illegible.

[Bamazon Demo](https://)
