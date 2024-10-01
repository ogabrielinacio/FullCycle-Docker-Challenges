# Full Cycle Course Challenge

This project is part of the Full Cycle course challenge. The objective is to create a Go application that prints a message and a Node.js application that interacts with a MySQL database through an Nginx reverse proxy.

## Challenge Descriptions

1. **Go Challenge**:
   - Create a Go application that, when executed, prints `Full Cycle Rocks!!`.
   - Ensure the Docker image for the Go application is less than 2MB.
   - Publish the image on Docker Hub.

2. **Nginx + Node.js Challenge**:
   - When a user accesses Nginx on port 8080, it should make a call to the Node.js application.
   - The Node.js application will add a record to the MySQL database, registering a name in the `people` table.
   - The response from the Node.js application to Nginx should be:
     ```html
     <h1>Full Cycle Rocks!</h1>
     ```
     followed by a list of names registered in the database.

## Running the Application

1. **Nginx + Node.js Challenge**:
   - Clone this repository to your local machine.
   - Ensure that Docker and Docker Compose are installed.
   - Navigate to the project directory.
    ```bash
    cd NginxNode
    ```
   - Run the following command to start all services:

    ```bash
    docker-compose up -d
    ```

   - Access the application in your browser at `http://localhost:8080`.
   - Refresh the page to include more names.

2. **Go Challenge**:
   - Ensure Docker is installed on your machine.
   - Run the following command to execute the Go application:

    ```bash
     docker run <your-user>/fullcycle
    ```
