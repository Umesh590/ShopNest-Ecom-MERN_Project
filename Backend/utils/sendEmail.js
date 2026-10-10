const { BrevoClient } = require('@getbrevo/brevo');

const brevo = new BrevoClient({
  apiKey: process.env.BREVO_API_KEY,
});

const sendEmail = async ({ email, subject, message }) => {
  try {
    const result = await brevo.transactionalEmails.sendTransacEmail({
      sender: {
        name: 'ShopNest Support',
        email: process.env.BREVO_SENDER_EMAIL,
      },
      to: [{ email }],
      subject,
      htmlContent: message,
    });

    console.log(`Email successfully sent to ${email}`);
    return result;
  } catch (error) {
    console.error(
      `Failed to send email: ${error.message || error}`
    );
    throw error;
  }
};

module.exports = sendEmail;