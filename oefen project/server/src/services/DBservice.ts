const mysql = require('mysql');

const connection = mysql.createConnection({
    host: '10.10.1.6',
    user: 'Niek',
    password: 'niek',
    database: 'Niek'
});

connection.connect();


export function GetAll() {
    console.log("test");
    connection.query(`SELECT * FROM Deelnemers`, function (error, results, fields) {
        if (error) throw error;
        console.log(results);
    });
}

module.exports = {
    GetAll
}