//Connection Info

var mysql = require("mysql");

var connection = mysql.createConnection({
    port:3306,
    host: "localhost",
    user: "root",
    password: "gwpswd",
    database: "burgers_db"
});

//Database Connection
connection.connect(function(err) {
    if (err) {
        console.error("error conncting: " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
});

// Export connection
module.exports = connection

