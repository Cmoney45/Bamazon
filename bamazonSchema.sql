DROP DATABASE IF EXISTS bamazon;

CREATE DATABASE bamazon;

USE bamazon;

CREATE TABLE products (
	id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    product_name VARCHAR(255) NOT NULL,
    product_sales DECIMAL(10,2) DEFAULT 0.00,
    department_name VARCHAR(255) NOT NULL,
    price DECIMAL(10,2) DEFAULT 0.01,
    quantity_available INT
    
);

INSERT INTO products (product_name, department_name, price, quantity_available)
	VALUES ("Toothbrush", "Toiletry", 17.95, 15), 
		   ("Dry dog Food", "Pets", 41.99, 10),
           ("Headphones", "Electronics", 29.99, 10),
           ("Solid black T-shirt", "Apparel", 15.29, 5),
           ("Socks", "Apparel", 5.07, 5),
           ("Two-slice Toaster", "Electronics", 18.99, 3),
           ("Oalka Women's Yoga Capris Power Flex Running Pants", "Apparel", 15.19, 10),
           ("No Mess Belgian Waffle Maker", "Electronics", 31.99, 3),
           ("Prime Test Testosterone Booster for Men", "Medicine", 17.97, 10),
           ("Toilet Paper (6 Rolls)", "Toiletry", 15.99, 6);

CREATE TABLE departments (
	id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
	department_name VARCHAR(255) NOT NULL,
    over_head_costs DECIMAL(10,2) DEFAULT 0.00
);

INSERT INTO departments (department_name, over_head_costs)
	VALUES ("Toiletry", 20.00),
		   ("Pets", 5.00),
           ("Electronics", 25.00),
           ("Apparel", 5.00),
           ("Medicine", 1.00);

SELECT * FROM products

SELECT departments.id, departments.department_name, SUM(products.product_sales) as sales, departments.over_head_costs 
	FROM products INNER JOIN departments ON (products.department_name = departments.department_name);