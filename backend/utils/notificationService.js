// Simulate Email
exports.sendEmail = async (to, subject, message) => {
  console.log("EMAIL SENT");
  console.log("To:", to);
  console.log("Subject:", subject);
  console.log("Message:", message);
};

// Simulate SMS
exports.sendSMS = async (phone, message) => {
  console.log("SMS SENT");
  console.log("To:", phone);
  console.log("Message:", message);
};

