# Exercise - Swagger

## Getting started

In `packages/server`, create an `.env` file and, following the `.env.example`, fill out the credentials to connect to your local instance.
Don't worry about the schema just yet, we will proceed to get familiar with Swagger first.
<br/>
In a standard case, you should only need to change this property right now, so it at least is able to connect to the local instance:

```
DB_PASSWORD="root"
```

<br/>

## Explore the example routes and Swagger UI

- Navigate to `packages/server/api/routes/exampleResources.router.js` and observe how the routes are written and what the Swagger annotations look like.

- In the terminal, navigate to `packages/server` and run `yarn start` (this runs the server).
- Go to `http://localhost:5000/api/documentation/` and see the rendered Swagger UI.

Compare the rendered interactive parts with the annotations in exampleResources router. If you have not connected to a specific schema yet (which is ok), you will not be able to interact with the UI - see the next step.

<br/>

## Interact with the Swagger UI

- Create a schema in the local instance called `final_project_db` (or another name - just make sure to set in in the `.env` file for the `DB_DATABASE` property).
- In the terminal, navigate to `packages/server` and run `yarn db:setup `. You will hear more about this in week1, but for now just know that this last command runs the migrations which build some tables in your database and seeds which put some mock data into those tables.

You should now have a schema populated with mock data and be able to interact with Swagger UI to test the APIs.

- Rerun `yarn start`, go to the API documentation and try testing out the functionality under `exampleResources`.

<br/>

## Document a route in Swagger

- Navigate to `packages/server/api/routes/products.router.js`.
- Document the existing `'/'` products route in Swagger, and rerun the server.
- Test out the newly documented route in Swagger UI - fetch the products from the database.

<br/>

## Exercise (and homework) - Creating and documenting a new route

- In `packages/server/api/routes/products.router.js`, create a new route for adding a product to the database (POST). The "product" table for now just has the auto-incremented `id`, a string for `name`, and a string for `description`. <br/>
- Run the server again. Test out the newly documented route in Swagger UI - add a product to the database through the Swagger UI.
- Et voilà! Do a happy dance :)
