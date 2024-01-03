# cookie and session based login

This API is a Node.js Express backend that allows you to do session based login and signup


## Getting Started

These instructions will help you set up and run the API on your local machine for development and testing purposes.

### Prerequisites

Before getting started, make sure you have the following software installed on your system:

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/) (Node Package Manager)
- [MongoDB](https://www.mongodb.com/)

### Installation

1. Clone this repository to your local machine:

   ```shell
   git clone https://github.com/PCoder23/session-cookie-example.git
   ```

2. Install all the dependencies:
    ```shell
    npm install
    ```    

3. Start the server:
    ```shell
    npm start
    ```

    The server will be running on http://localhost:3000 


## API Endpoints
### 1. Signup
- URL: `/signup`
- Method: POST
- Payload:
    ```shell
    {
    "username": "your-username",
    "password": "your-password",
    }
    ```

### 2. Login
- URL: `/login`
- Method: POST
- Payload:
    ```shell
    {
    "username": "your-username",
    "password": "your-password",
    }
    ```

### 3. Logout
- URL: `/logout`
- Method: POST

### 4. Dashboard
- URL: `/`
- Method: GET
