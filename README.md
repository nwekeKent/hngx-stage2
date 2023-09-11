# Express App Documentation

This documentation provides an overview of our Express application and explains the CRUD operations performed.

## Table of Contents

- [About the Application](#about-the-application)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)

  - [Create User](#create-user)
  - [Get All Users](#get-all-users)
  - [Get User by ID](#get-user-by-id)
  - [Update User Name](#update-user-name)
  - [Delete User by ID](#delete-user-by-id)

  ## About the Application

Our Express application is a simple user management system that allows you to perform CRUD operations on user data. It provides RESTful API endpoints for creating, reading, updating, and deleting user records in a SQLite database.

## Installation

1. Clone the repository:

   ```shell
   git clone https://github.com/nwekeKent/hngx-stage2.git
   cd hngx-stage2
   ```

2. Install dependencies

   ```shell
   npm install
   ```

3. Start Server

   ```shell
     npm start
   ```

## Usage

Once the server is running, you can use API client tools (e.g., Postman, cURL) to interact with the application's endpoints.

## API Endpoints

## Create User

- URL: `/api`
- HTTP Method: POST
- Request Body:

  - `name (string, required)`: The name of the user.

- Response:

  - `201 Created` if the user is successfully created. A an JSON object (`{ message: "User created successfully." }`) is returned.

  - `400 Bad Request` if the request is invalid E.g The name passed is not a string, or the name is not passed at all.

  - `500 Internal Server Error` if there is an issue with database operations.

## Get All Users

- URL: `/api `
- HTTP Method: GET
- Response
  - `200 OK` with a JSON array of users
  - `500 Internal Server Error` if there is an issue with database operations

## Get User by ID

- URL: `/api:id`
- HTTP Method: GET
- Request Parameters:
  - `id` (integer, required): The ID of the user to update.
- Response
  - `200 OK` with a JSON object containing the user's information.
  - `404 Not Found` if the user with the specified ID is not found.
  - `500 Internal Server Error` if there is an issue with database operations

## Update User Name

- URL: `/api:id`
- HTTP Method: PUT
- Request Parameters:
  - `id` (integer, required): The ID of the user to update.
- Request Body:
  - `name` (string, required): The new name for the user.
- Response

  - `200 OK` with a JSON object containing the user's information.
  - `400 Bad Request` if the request is invalid E.g The name passed is not a string, or the name is not passed at all.
  - `404 Not Found` if the user with the specified ID is not found.
  - `500 Internal Server Error` if there is an issue with database operations.

  ## Delete User by ID

- URL: `/api:id`
- HTTP Method: DELETE
- Request Parameters:
  - `id` (integer, required): The ID of the user to update.
- Response
  - `200 OK` with a JSON object containing the user's information.
  - `404 Not Found` if the user with the specified ID is not found.
  - `500 Internal Server Error` if there is an issue with database operations
