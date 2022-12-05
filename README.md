# Family Gains Business Website
## Project Description
A fullstack MERN website created by Phil Garbrecht, for his small business Family Gains. Users can view different products, and the admin has full crud capabilities for the products once logged into the admin dashboard.

## Project Links
* Link to GitHub Repository (Backend): https://github.com/pgarbrecht/family-gains-backend
* Link to GitHub Repository (Frontend): https://github.com/pgarbrecht/family-gains-frontend
* Link to Deployed Application (Backend): https://family-gains-backend.herokuapp.com/products
* Link to Deployed Application (Frontend): https://family-gains.herokuapp.com/

## API Overview
This backend is a RESTFUL API that serves responses to the front end for the Family Gains website. In order to install and access it locally, and for more information on the project overall, please view the front end repo readme. Requests can be made to this API through the front end application or through Postman using raw JSON data that matches the following body format (for POST or PUT request): <br />
{ <br />
"name": "test product name", <br />
"description": "test product description", <br />
"image": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/SNice.svg/1200px-SNice.svg.png", <br />
"price": 12, <br />
"inStock": "yes" <br />
} <br />
GET and DELETE requests do not require a body. <br />

## API Endpoints and responses they provide
GET / provides a list of all products <br />
POST /new accepts a product JSON object and creates it in the database <br />
PUT /:id accepts a product JSON object and updates the existing product matching that id in the database <br />
DELETE /:id accepts a product id and deletes the product matching that id in the database <br />