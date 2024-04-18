# Node.js REST API with MongoDB

This is a simple REST API built with Node.js and Express, using MongoDB as the database. It provides endpoints for managing subscribers.

## Prerequisites

Before running this project, make sure you have the following installed:

- Node.js
- MongoDB
- Docker (optional, for running with Docker Compose)

## Getting Started

1. Clone the repository:

   ```bash
   git clone https://github.com/zdbrig/nodemongo.git
   cd nodemongo
   ```

2. Install the dependencies:

   ```bash
   npm install
   ```

3. Set up the environment variables:

   - Create a `.env` file in the root directory of the project.
   - Add the following variable to the `.env` file:

     ```
     DATABASE_URL=mongodb://localhost:27017/myapp
     ```

     Replace `myapp` with your desired database name.

4. Start the server:

   ```bash
   npm start
   ```

   The server will start running at `http://localhost:3000`.

## API Endpoints

The following endpoints are available:

- `GET /subscribers`: Get all subscribers.
- `GET /subscribers/:id`: Get a specific subscriber by ID.
- `POST /subscribers`: Create a new subscriber.
- `PATCH /subscribers/:id`: Update a subscriber by ID.
- `DELETE /subscribers/:id`: Delete a subscriber by ID.

## Running with Docker Compose

To run the application using Docker Compose, follow these steps:

1. Make sure you have Docker and Docker Compose installed on your machine.

2. Build and run the containers:

   ```bash
   docker-compose up --build
   ```

   This will start the Node.js application and MongoDB containers.

3. Access the application at `http://localhost:3000`.

## Testing the API

You can test the API endpoints using a tool like [Postman](https://www.postman.com/) or by running the provided `index.js` script.

To run the `index.js` script:

1. Make sure you have the `axios` package installed:

   ```bash
   npm install axios
   ```

2. Run the script:

   ```bash
   node index.js
   ```

   The script will make requests to the API endpoints and log the responses.

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, please open an issue or submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).
```

