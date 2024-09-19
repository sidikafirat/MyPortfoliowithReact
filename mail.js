const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');/*e posta gonderimi icin kullanilan kutuphane */
const cors = require('cors');/*farkli originlerden gelen istekleri kabul etmek icin kullanilir */
const dotenv = require('dotenv');

// .env dosyasini yukler
dotenv.config();

const app = express();//express uygulamasini olusturdum
app.use(cors());//tum originden gelen istekleri kabul eder
app.use(bodyParser.json());//json verilerini ayristirmak icin

app.post('/contact', async (req, res) => {//iletisim formu icin post istegi
    const { firstName, lastName, email, typecontact, message } = req.body;//form verilerini aldim

    // Nodemailer ayarlari (process.env ile .env dosyasından degerleri cekiyoruz)
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.REACT_APP_EMAIL_USER, // .env dosyasindaki EMAIL_USER degeri
            pass: process.env.REACT_APP_EMAIL_PASS  // .env dosyasindaki EMAIL_PASS degeri
        }
    });

    let mailOptions = {
        from: email,
        to: process.env.REACT_APP_EMAIL_USER,
        subject: `Yeni İletişim Formu Mesajı (${typecontact})`,
        text: `
            İsim: ${firstName} ${lastName}
            Email: ${email}
            Mesaj Türü: ${typecontact}
            Mesaj: ${message}
        `
    };

    try {
        await transporter.sendMail(mailOptions);
        res.status(200).json({ code: 200, message: 'Mail başarıyla gönderildi.' });
    } catch (error) {
        res.status(500).json({ code: 500, message: 'Mail gönderme işlemi başarısız oldu.' });
    }
});

app.listen(5002, () => {
    console.log('Server is running on port 5002');
});