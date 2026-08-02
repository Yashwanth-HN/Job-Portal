const axios = require("axios");

const sendEmail = async (options) => {
  try {
    const response = await axios.post(
      "https://api.brevo.com/v3/smtp/email",
      {
        sender: {
          name: "CareerNest",
          email: process.env.SENDER_EMAIL,
        },
        to: [
          {
            email: options.email,
          },
        ],
        subject: options.subject,
        textContent: options.message,
      },
      {
        headers: {
          "api-key": process.env.BREVO_API_KEY,
          "Content-Type": "application/json",
        },
      }
    );

    console.log("Email Sent:", response.data);
  } catch (error) {
    console.error(
      "Brevo Email Error:",
      error.response?.data || error.message
    );
    throw error;
  }
};

module.exports = sendEmail;