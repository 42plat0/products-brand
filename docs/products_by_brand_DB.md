**Task 2:**

## Read Data from a database, of your choice.

The service should connect to database store, where it can read products with the following structure:

```JSON
{
	"id": 1,
	"name": "Product A",
	"price": 12.99,
	"brand": "Brand A",
	"onSale": true
}
```

Pre-load database with at least 10 products.

## Expected Response

Our Frontend Team expects a response matching the following requirements

- All products are returned
- Products are grouped by `brand`, sorted alphabetically
- Property `brand` should be omitted on products
- Products inside a `brand` should be sorted ascending by `price`
- Property `onSale` should be converted to a property `event` of type String with the value "ON SALE"

```JSON
{
	"Brand A" : [{
		"id": 1,
		"name": "Product A",
		"price": 12.99,
		"event": "ON SALE"
	},
	{
		"id": 2,
		"name": "Product B",
		"price": 7.99
	}],
	"Brand B" : [{
		"id": 3,
		"name": "Product C",
		"price": 14.99
	},
	{
		"id": 4,
		"name": "Product D",
		"price": 10.99
	}]
}
```

