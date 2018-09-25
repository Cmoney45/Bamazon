DROP DATABASE IF EXISTS bamazon;

CREATE DATABASE bamazon;

USE bamazon;

CREATE TABLE products (
	id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    product_name VARCHAR(255) NOT NULL,
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
           
SELECT * FROM products;



