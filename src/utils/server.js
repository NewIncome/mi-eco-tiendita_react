const express = require("express");
const router = express.Router();
const cors = require("cors");
const nodemailer = require("nodemailer");
const creds = require('./config');

// Setup the server that’ll run on port 5000
const app = express();
app.use(cors());
app.use(express.json());
app.use("/", router);
app.listen(5000, () => console.log("Server Running"));

// Setup SMTP service, Nodemailer with Gmail
const contactEmail = nodemailer.createTransport({
  service: 'mailgun',
  secure: false,
  port: 587, // 465 or 587
  auth: {
    user: creds.USER,
    pass: creds.PASS,
  },
  debug: false,
  logger: true
});

contactEmail.verify((error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Ready to Send");
  }
});

// Setup the router before sending the email
router.post("/contact", (req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const message = req.body.message; 
  const mail = {
    from: name,
    to: "devjtesting@gmail.com",
    subject: "Mi-eco-tiendita, Contact Form Submission",
    html: `<p>Name: ${name}</p>
           <p>Email: ${email}</p>
           <p>Message: ${message}</p>`,
  };
  contactEmail.sendMail(mail, (error) => {
    if (error) {
      res.json({ status: "ERROR" });
    } else {
      res.json({ status: "Message Sent" });
    }
  });
});
