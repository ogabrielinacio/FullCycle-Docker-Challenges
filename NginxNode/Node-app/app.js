const express = require("express");
const mysql = require("mysql2/promise");
const app = express();
const port = 3000;

const dbConfig = {
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
};


async function connectWithRetry() {
  let connection;
  let attempts = 5;

  while (attempts > 0) {
    try {
      connection = await mysql.createConnection(dbConfig);
      return connection;
    } catch (error) {
      console.error('Error connecting to MySQL, retrying...', error);
      attempts--;
      await new Promise(resolve => setTimeout(resolve, 2000)); 
    }
  }

  throw new Error('Could not connect to MySQL after several attempts.');
}


app.get("/", async (req, res) => {
  try {
    const connection = await connectWithRetry();
    await connection.execute(
      "CREATE TABLE IF NOT EXISTS people (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255))",
    );
    await connection.execute(
      'INSERT INTO people (name) VALUES ("Wesley Willians")',
    );

    const [rows] = await connection.execute("SELECT name FROM people");
    await connection.end();

    const names = rows.map((row) => row.name).join("<br>");

    res.send(`<h1>Full Cycle Rocks!</h1><br>${names}`);
  } catch (error) {
    console.error(error);
    res.status(500).send("Error connecting to the database.");
  }
});

app.listen(port, () => {
  console.log(`Node server running on port ${port}`);
});
