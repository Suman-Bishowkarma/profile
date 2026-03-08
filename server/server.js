const express = require("express");
const cors = require("cors");
const { Resend } = require("resend");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors({ origin: "*" }));
app.use(express.json());

const resend = new Resend(process.env.RESEND_API_KEY);

// Contact form endpoint
app.post("/api/contact", async (req, res) => {
  try {
    const { name, email, message } = req.body;
    if (!name || !email || !message) {
      return res
        .status(400)
        .json({ success: false, message: "All fields are required" });
    }
    const { data, error } = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: [process.env.GMAIL_USER],
      subject: `Portfolio Contact: Message from ${name}`,
      html: `<div><h2>New Contact Form Message</h2><p><strong>Name:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p><h3>Message:</h3><p>${message.replace(
        /\n/g,
        "<br>"
      )}</p></div>`,
      reply_to: email,
    });
    if (error) {
      return res
        .status(500)
        .json({
          success: false,
          message: "Failed to send message. Please try again later.",
        });
    }
    res
      .status(200)
      .json({ success: true, message: "Message sent successfully!" });
  } catch (error) {
    res
      .status(500)
      .json({
        success: false,
        message: "Failed to send message. Please try again later.",
      });
  }
});

// Health check endpoint
app.get("/api/health", (req, res) => {
  res.status(200).json({ success: true, message: "Server is running" });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
