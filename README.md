# BAMazon

## Description

  This application is a simple command line storefront using the npm [inquirer](https://www.npmjs.com/package/inquirer) package and the MySQL database together with the npm [mysql](https://www.npmjs.com/package/mysql) package. It also uses the npm [table](https://www.npmjs.com/package/table) package to make our display look more uniform for the command line. 
  
The application presents three main interfaces run from the single app: **customer**, **manager**, and **supervisor**.

## Install Instructions

### MySQL Database Setup

  You should have MySQL already set up on your machine. If you don't, visit the [MySQL installation page](https://dev.mysql.com/doc/refman/5.6/en/installing.html) to install the version you need for your operating system. Once you have MySQL installed, you will be able to create the *Bamazon* database and the *products* table with the SQL code found in [bamazonSchema.sql](bamazonSchema.sql).

### Clone Repository

To get the program running, you need to clone it to your machine. Open up GIT on your machine and use the following commands.

    git clone git@github.com:Cmoney45/bamazon.git
	  cd bamazon
	  npm i
	  node bamazon


## Running the Program
![alt text](https://github.com/Cmoney45/Bamazon/blob/master/images/start.PNG)
![alt text](https://github.com/Cmoney45/Bamazon/blob/master/images/mainMenu.PNG)
### Customer Interface

  The customer interface allows the user to view the current inventory of store items: item IDs, descriptions, department in which the item is located and price.

![alt text](https://github.com/Cmoney45/Bamazon/blob/master/images/customerMain.PNG)

 The user is then able to purchase one of the existing items by entering the item ID and the desired quantity. If the selected quantity is currently in stock, the user's order is fulfilled, displaying the total purchase price and updating the store database. If the desired quantity is not available, the user is prompted to redo their order. You can see in the image below, when the table is brought up again the quantity available for the purchase has gone down in the table.
 
 ![alt text](https://github.com/Cmoney45/Bamazon/blob/master/images/customerPurchase.PNG)
 
### Employee Menu

![alt text](https://github.com/Cmoney45/Bamazon/blob/master/images/employeeMainMenu.PNG)

If the user is an employee, they are brought to the employee menu. They then select which employee role they are and enter that role's super secret password.

![alt text](https://github.com/Cmoney45/Bamazon/blob/master/images/managerPasswordPrompt.PNG)

### Manager Interface

The manager interface presents a list of four options: 

![alt text](https://github.com/Cmoney45/Bamazon/blob/master/images/managerMenu.PNG)
	  
The **View Products for Sale** option allows the user to view the current inventory of store items: item IDs, descriptions, department in which the item is located, price, and the quantity available in stock. 

![alt text](https://github.com/Cmoney45/Bamazon/blob/master/images/managerMenu-viewproducts.PNG)

The **View Low Inventory** option shows the user the items which currently have less than or equal to 5 units available.

![alt text](https://github.com/Cmoney45/Bamazon/blob/master/images/managerMenu-lowInventory.PNG)

The **Add to Inventory** option allows the user to select a given item ID and add additional inventory to the target item.

![alt text](https://github.com/Cmoney45/Bamazon/blob/master/images/managermenu-addItem.PNG)

The **Add New Product** option allows the user to enter details about a new product which will be entered into the database upon completion of the form. The department menu looks at the department table (only available to the supervisor role) and gives them a list of options from that table.

![alt text](https://github.com/Cmoney45/Bamazon/blob/master/images/managerMenu-addProduct-departmentPrompt.PNG)

Once all completed, it will looke like the below image:

![alt text](https://github.com/Cmoney45/Bamazon/blob/master/images/managerMenu-addProduct-completed.PNG)

### Supervisor Interface

The supervisor interface initall shows the current products available. Their view has an additional column for the total sales of the product as well. The supvervisor also has a list of three options: 

![alt text](https://github.com/Cmoney45/Bamazon/blob/master/images/supervisorMenu.PNG)
	  
The **View Products Sales by Department** option allows the supervisor to see how each department is doing in total sales. It takes the total current sales less the prespecified Overhead costs to get a profit/(loss) for each department. 

![alt text](https://github.com/Cmoney45/Bamazon/blob/master/images/supervisorMenu-ProductSales.PNG)

The **Create New Department** option allows the supervisor to add a brand new department to a department table only available to the supervisor.

![alt text](https://github.com/Cmoney45/Bamazon/blob/master/images/supervisorMenu-newDepartment.PNG)

You can see above the Food department is now added. If we use the **View products Sales by Department** prompt, you will see the new department show up.

![alt text](https://github.com/Cmoney45/Bamazon/blob/master/images/supervisorMenu-showDepartmentCreated.PNG)

Additionally, the manager employee can now select the department when they want to add a new product.

![alt text](https://github.com/Cmoney45/Bamazon/blob/master/images/supervisorMenu-showNewDepartmentAdded.PNG)
