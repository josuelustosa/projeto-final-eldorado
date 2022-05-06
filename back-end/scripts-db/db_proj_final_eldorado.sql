/* Criando o db */
create database proj_final_eldorado;

/* ------------------------------------------------ */

/* criando a tabela category*/
CREATE TABLE category (
	cat_id INT AUTO_INCREMENT PRIMARY KEY,
    cat_name VARCHAR(128) NOT NULL
);

/* ------------------------------------------------ */

/* criando a tabela device*/
CREATE TABLE device (
	dev_id INT AUTO_INCREMENT PRIMARY KEY,
    dev_category_id INT,
    dev_color VARCHAR(16),
    dev_partNumber INT,
    FOREIGN KEY (dev_category_id) REFERENCES category (cat_id)
<<<<<<< HEAD
);
=======
);
>>>>>>> 9d3d1e8e70a66320f728d2d9b96539facb7e12f5
