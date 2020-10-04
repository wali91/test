const mysql = require('postgres')
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'database_production'
})

connection.connect()
module.exports = connection