const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: '18root04',
    database: 'lirassol'
});

connection.connect((err) => {
    if (err) {
        console.error('Erro ao conectar:', err);
        return;
    }
    console.log('Conectado ao MySQL com sucesso!');
});