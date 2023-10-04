const mysql = require('mysql');

const connection = mysql.createConnection({
    host: '10.10.1.6',
    user: 'Niek',
    password: 'niek',
    database: 'Niek'
});

connection.connect();


export function InsertInto(name: string, city: string) {
    console.log("test");
    connection.query(`INSERT INTO Deelnemers (name, city) VALUES ('${name}', '${city}')`, function (error, results, fields) {
        if (error) throw error;
        console.log(results);
    });
}

module.exports = {
    InsertInto
}