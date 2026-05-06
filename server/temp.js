const express = require('express');
const oracledb = require('oracledb');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const dbConfig = {
  user: "price",              // your Oracle username
  password: "Prince@6366",    // your Oracle password
  connectString: "localhost/XEPDB1" // host/service name (adjust for your DB)
};

app.get('/api/employees', async (req, res) => {
  let connection;
  try {
    connection = await oracledb.getConnection(dbConfig);
    const result = await connection.execute(`SELECT * FROM employees`);

    // ✅ Print rows to console
    console.log("Employees table data:");
    result.rows.forEach(row => {
      console.log(row);
    });

    // Send rows back to client
    res.json(result.rows);

  } catch (err) {
    console.error("Error executing query:", err);
    res.status(500).send("Database error");
  } finally {
    if (connection) {
      try {
        await connection.close();
      } catch (err) {
        console.error("Error closing connection:", err);
      }
    }
  }
});

app.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});
