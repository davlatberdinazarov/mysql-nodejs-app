const mysql = require("mysql2");
// Database connection
const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
})

connection.connect((err) => {
    if (err) throw err;
    console.log("Connected to MySQL server.");
})

// export
module.exports = connection