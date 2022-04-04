const mysql = require('mysql2')

// Conexão do banco de dados
const connection  = mysql.createConnection({
    host: 'localhost',
    user: '',
    password: '',
    database: '',
    //port: 3306
})

connection.end()