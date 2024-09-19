const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors());

// MySQL bağlantı ayarları
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '', // MySQL şifrenizi buraya ekleyin
    database: 'contact_form'
});

db.connect((err) => {
    if (err) throw err;
    console.log('MySQL connected...');
});

app.post('/contact', (req, res) => {
    const { firstName, lastName, email, typecontact, message } = req.body;

    const query = 'INSERT INTO messages (first_name, last_name, email, type_contact, message) VALUES (?, ?, ?, ?, ?)';
    db.query(query, [firstName, lastName, email, typecontact, message], (err, result) => {
        if (err) {
            console.error(err);
            res.status(500).json({ code: 500, message: 'Database error' });
            return;
        }
        res.status(200).json({ code: 200, message: 'Message sent successfully' });
    });
});

app.listen(5001, () => {
    console.log('Server running on port 5001');
});
