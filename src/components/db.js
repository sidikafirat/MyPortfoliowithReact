const mysql = require('mysql');

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '', // MySQL root şifreniz, XAMPP'de genelde boştur
  database: 'contact_form'
});

db.connect((err) => {
  if (err) {
    console.log('MySQL connection error:', err);
  } else {
    console.log('Connected to MySQL');
  }
});

module.exports = db;