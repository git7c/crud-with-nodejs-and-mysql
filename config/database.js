const mysql = require('mysql2');

const connection = mysql.createConnection({
    host     : 'localhost', // MYSQL HOST NAME
    user     : 'root',        // MYSQL USERNAME
    password : '',    // MYSQL PASSWORD
    database : 'node_mysql'      // MYSQL DB NAME
});

module.exports = connection;