# REST API With Node.js, Express, & MongoDB

This project is a tutorial n how to create a basic REST API using Express and MongoDB


Reviewing concepts:

## MongoDB

MongoDB is a cross-platform document-oriented database program. Classified as a NoSQL database program, MongoDB uses JSON-like documents with optional schemas.

## Mongoose
Mongoose is an Object Data Modeling (ODM) library for MongoDB and Node.js. It manages relationships between data, provides schema validation, and is used to translate between objects in code and the representation of those objects in MongoDB. Check [frecodecamp article](https://www.freecodecamp.org/news/introduction-to-mongoose-for-mongodb-d2a7aa593c57/)

## Express.js

Express is a back end web application framework for Node.js, released as free and open-source software under the MIT License. It is designed for building web applications and APIs.

## API

An application programming interface is a computing interface that defines interactions between multiple software intermediaries. It defines the kinds of calls or requests that can be made, how to make them, the data formats that should be used, the conventions to follow, etc.

## REST API

Representational state transfer is a software architectural style that defines a set of constraints to be used for creating Web services. Web services that conform to the REST architectural style, called RESTful Web services, provide interoperability between computer systems on the internet.

## Tutorial Steps

- npm init - creates a package.json
- install dependencies: express mongoose
- next install our dev dependencies
- *dotenv* - allows us to pull environement variables from dotenv file
- *nodemon* - refresh our server everytime that we make changes
- create new script *devStart*
- create new file *server.js*
- create *.env file*
- create *.gitignore*
- ignore .env fil because it has sensitive information and node_modules because this can be created with npm install
- follow steps from 1 to 6 from server.js
- remove mongodb://localhost/subscribers from connection and move to env variable
- add DATABASE_URL to mongoose.connection
- require dotenv library
- add routes to our server and make the server to accept json
- step 8 & 9
- create routes folder and subscribers file
- step 10
- we will get an error because our subscriberRouter needs middleware
- set up subscribers.js
- since its going to be a restful api we are going to use restuful endpoints
- create routes for get all. getting one, creating one, updating, deleting one
- in order to test our api's calls we would go into the browser and open it up but we cant really test a REST API very well in a browser because you dont have nothing to interact with, so we are going to use a VS extension, called REST client, that allow us to call a rest api directly from vscode. We could use postman instead
- after install the extension create a route.rest, we can name it what we want, as long it ends with .rest or .http
- The res object represents the HTTP response that an Express app sends when it gets an HTTP request
- The req object represents the HTTP request and has properties for the request query string, parameters, body, HTTP headers, and so on
- try to do a console.log in our get request and see that our routing is working
- next lets create a model that we are going to use for our application
- create a model folder and a subscriber.js file
- for this we require mongoose (rebember what mongoose is used for - this allows us to create a model to interact with the database in a really easy way)
- for this we what to create a *Schema variable*
```js
const subscriberSchema = new mongoose.Schema({})
```
- this is going to take a javascript object and this object is going tohave keys for all the different properties of our subscriber (name, subscriberToChannel, subscribeData)
- with our schema created we want to export that as module.exports = mongoose.model('Subscriber', subscriberSchema)
- then go to subscribers.js and include that schema
- next we use async await in our subscribers file
- after we do the same but for the post request
- then we configure our request with id's
- since all the rest of our routes are going to take an ID, they are all going to do the same code in the beginning, so instead of writing that code in every single one of our routes we're going to use what's called a middleware
- after create the middleware function, getSubscriber, add it at the routers with id's
- play with the different requests
