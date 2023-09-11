# Express App Documentation

This documentation provides detailed information about the API endpoints, including standard request and response formats, sample usage, known limitations, and setup instructions.

## API Endpoints

### Create User

- **Endpoint:** `/api`
- **HTTP Method:** POST
- **Request Format:**

  - Content-Type: application/json
  - Body:

    - `name` (string, required): The name of the user.

  - **Response Format:**
  - Status Code: 201 Created
  - Content-Type: application/json
  - Body:

    - `message`: "User created successfully."

  - Other Responses:

    - `201 Created` if the user is successfully created. A an JSON object (`{ message: "User created successfully." }`) is returned.

    - `400 Bad Request` if the request is invalid E.g The name passed is not a string, or the name is not passed at all.

    - `500 Internal Server Error` if there is an issue with database operations.

### Get All Users

- **Endpoint:** `/api`
- **HTTP Method:** GET

- **Response Format:**

  - Status Code: 200 OK
  - Content-Type: application/json
  - Body: An array of user objects.
    - `id` (integer): The user's ID.
    - `name` (string): The user's name.

- Other Responses:
  - `200 OK` with a JSON array of users
  - `500 Internal Server Error` if there is an issue with database operations

### Get User by ID or Name

- **Endpoint:** `/api/:idOrName`
- **HTTP Method:** GET
- **URL Parameters:**

  - `idOrName` (integer or string, required): The user's ID or name.

- **Response Format:**

  - Status Code: 200 OK
  - Content-Type: application/json
  - Body: The user object.
    - `id` (integer): The user's ID.
    - `name` (string): The user's name.

- Other Responses:

  - `200 OK` with a JSON object containing the user's information.
  - `404 Not Found` if the user with the specified ID or name is not found.
  - `500 Internal Server Error` if there is an issue with database operations

### Update User Name

- **Endpoint:** `/api/:id`
- **HTTP Method:** PUT
- **URL Parameters:**
  - `id` (integer, required): The user's ID.
- **Request Format:**

  - Content-Type: application/json
  - Body:
    - `name` (string, required): The new name for the user.

- **Response Format:**

  - Status Code: 200 OK
  - Content-Type: application/json
  - Body:
    - `message`: "User name updated successfully."

- Other Responses:
  - `400 Bad Request` if the request is invalid E.g The name passed is not a string, or the name is not passed at all.
  - `404 Not Found` if the user with the specified ID is not found.
  - `500 Internal Server Error` if there is an issue with database operations.

### Delete User by ID

- **Endpoint:** `/api/:id`
- **HTTP Method:** DELETE
- **URL Parameters:**

  - `id` (integer, required): The user's ID.

- **Response Format:**

  - Status Code: 200 OK
  - Content-Type: application/json
  - Body:
    - `message`: "User deleted successfully."

- Other Responses:
  - `404 Not Found` if the user with the specified ID is not found.
  - `500 Internal Server Error` if there is an issue with database operations

## Sample Usage

### Create User

**Request:**

```json
POST /api
Content-Type: application/json

{
  "name": "John Doe"
}
```

### Get User by ID or Name

**Request:**

```json
GET /api/1
or
GET /api/Festus

Status: 200 OK
Content-Type: application/json

{
  "id": 1,
  "name": "Festus"
}
```

### Update User Name

**Request:**

```json
PUT /api/1
Content-Type: application/json

{
  "name": "Jane Doe"
}

Status: 200 OK
Content-Type: application/json

{
  "message": "User name updated successfully."
}


```

### Delete User

**Request:**

```json
DELETE /api/1

Status: 200 OK
Content-Type: application/json

{
  "message": "User deleted successfully."
}

```

## Known Limitations and Assumptions

- This API assumes that a user's ID is a unique identifier.
- Only the user's name can be updated, and only one user can be updated or deleted at a time.
- The user's name is unique.

## Local Setup and Deployment

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

   The server will run locally on http://localhost:3050. You can deploy it on a server following your deployment strategy.

```javascript
This `DOCUMENTATION.md` file provides detailed documentation for the Express app, including API endpoints, request and response formats, sample usage, known limitations, and setup instructions for both local development and deployment.
```