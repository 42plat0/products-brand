DROP TABLE products;
CREATE TABLE IF NOT EXISTS "products"(
	id SERIAL PRIMARY KEY,
	name VARCHAR NOT NULL,
	price FLOAT NOT NULL,
	brand VARCHAR NOT NULL,
	on_sale BOOLEAN NOT NULL
);

INSERT INTO products (name,price,brand,on_sale)
VALUES('Product A', 12.99, 'Brand A', true);

INSERT INTO products (name,price,brand,on_sale)
VALUES('Product B', 7.99, 'Brand A', true);

INSERT INTO products (name,price,brand,on_sale)
VALUES('Product C', 14.99, 'Brand B', false);

INSERT INTO products (name,price,brand,on_sale)
VALUES('Product D', 12.99, 'Brand D', true);

INSERT INTO products (name,price,brand,on_sale)
VALUES('Product E', 11.99, 'Brand E', false);

INSERT INTO products (name,price,brand,on_sale)
VALUES('Product F', 5.99, 'Brand B', true);

INSERT INTO products (name,price,brand,on_sale)
VALUES('Product G', 3.99, 'Brand D', true);

INSERT INTO products (name,price,brand,on_sale)
VALUES('Product H', 24.99, 'Brand C', false);

INSERT INTO products (name,price,brand,on_sale)
VALUES('Product I', 19.99, 'Brand C', false);

INSERT INTO products (name,price,brand,on_sale)
VALUES('Product J', 4.99, 'Brand E', false);
