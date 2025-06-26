const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const nodemailer = require("nodemailer");
const path =require('path')

// Load .env variables
dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// static files
app.use(express.static(path.join(__dirname, './client/build')))

// POST route to handle email
app.post("/send-email", async (req, res) => {
  const { templateParams } = req.body;
  const { from_name, to_name, message } = templateParams;

  try {
    // Create transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Email content
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: to_name,
      subject: `Message from ${from_name}`,
      text: message,
    };

    // Send email
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: "Email sent successfully!" });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ message: "Failed to send email", error });
  }
});

// Portfolio route (if you have it)
app.use("/api/v1/portfolio", require("./routes/portfolioRoute"));

app.get('*', function(req,res){
  res.sendFile(path.join(__dirname, './client/build/index.html'))
})

// Start server
const PORT = process.env.PORT || 8000;
app.listen(PORT,'0.0.0.0', () => {
  console.log(`Server running on PORT ${PORT}`);
});
