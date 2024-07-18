import express from 'express';
import cors from 'cors';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

// Створюємо екземпляр сервера express
const app = express();
const router = express.Router();

// Налаштовуємо CORS і обробку JSON
app.use(cors());
app.use(express.json());

// Виводимо значення змінних середовища, зчитаних з файлу .env
console.log(process.env.EMAIL_USER);
console.log(process.env.EMAIL_PASS);

// Створюємо об'єкт transporter для відправки електронних листів
const contactEmail = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// Перевіряємо підключення до поштового сервера
contactEmail.verify(error => {
  if (error) {
    console.log(error);
  } else {
    console.log('Ready to Send');
  }
});

// Обробник POST-запиту на маршрут '/contact'
router.post('/contact', (req, res) => {
  const name = req.body.firstName + ' ' + req.body.lastName;
  const email = req.body.email;
  const message = req.body.message;
  const phone = req.body.phone;

  const mail = {
    from: name,
    to: process.env.EMAIL_USER, // Використовуємо значення змінної середовища
    subject: 'Contact Form Submission - Portfolio',
    html: `<p>Name: ${name}</p>
           <p>Email: ${email}</p>
           <p>Phone: ${phone}</p>
           <p>Message: ${message}</p>`,
  };

  // Відправляємо електронний лист і відповідаємо на запит залежно від результату
  contactEmail.sendMail(mail, error => {
    if (error) {
      res.json(error);
    } else {
      res.json({ code: 200, status: 'Message Sent' });
    }
  });
});

// Встановлюємо маршрутизатор для основного додатку
app.use('/', router);

// Прослуховуємо порт 5000 і виводимо повідомлення про запуск сервера
app.listen(5000, () => console.log('Server Running'));
