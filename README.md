## E-Commerce Backend API

This Express application provides endpoints for managing products and orders in an e-commerce system.

### Product Management

- **Create a New Product**
  - Endpoint: `/api/products`
  - Method: POST
  - Description: Creates a new product with the provided details.

- **Retrieve a List of All Products**
  - Endpoint: `/api/products`
  - Method: GET
  - Description: Retrieves a list of all products available.

- **Retrieve a Specific Product by ID**
  - Endpoint: `/api/products/:productId`
  - Method: GET
  - Description: Retrieves the details of a specific product based on its ID.

- **Update Product Information**
  - Endpoint: `/api/products/:productId`
  - Method: PUT
  - Description: Updates the information of a specific product.

- **Delete a Product**
  - Endpoint: `/api/products/:productId`
  - Method: DELETE
  - Description: Deletes a specific product based on its ID.

- **Search a Product**
  - Endpoint: `/api/products?searchTerm=pixel`
  - Method: GET
  - Description: Searches for products containing the provided search term.

### Order Management

- **Create a New Order**
  - Endpoint: `/api/orders`
  - Method: POST
  - Description: Creates a new order for a product.

- **Retrieve All Orders**
  - Endpoint: `/api/orders`
  - Method: GET
  - Description: Retrieves a list of all orders placed.

- **Retrieve Orders by User Email**
  - Endpoint: `/api/orders?email=arman@gmail.com`
  - Method: GET
  - Description: Retrieves a list of orders for a specific user email.
