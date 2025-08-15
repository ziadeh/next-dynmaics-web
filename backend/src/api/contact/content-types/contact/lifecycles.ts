import { errors } from "@strapi/utils";
const { ApplicationError } = errors;

export default {
  async afterCreate(event) {
    const { result } = event;
    try {
      // Send email notification
      strapi
        .plugin("email")
        .service("email")
        .send({
          to: process.env.ADMIN_CC_EMAIL,
          cc: process.env.SMTP_DEFAULT_REPLY_TO,
          from: process.env.SMTP_DEFAULT_FROM,
          subject: "New Contact Form Submission",
          html: `
          <h3>Website: New Contact Form Submission</h3>
          <p><strong>Name:</strong> ${result.fullname || "Not provided"}</p>
          <p><strong>Email:</strong> ${result.email || "Not provided"}</p>
          <p><strong>Message:</strong></p>
          <p>${result.message || "No message provided"}</p>
          <p><strong>Submitted at:</strong> ${new Date(result.createdAt).toLocaleString()}</p>
        `,
          text: `
          New Contact Form Submission
          Name: ${result.fullname || "Not provided"}
          Email: ${result.email || "Not provided"}
          Message: ${result.message || "No message provided"}
          Submitted at: ${new Date(result.createdAt).toLocaleString()}
        `,
        });
      console.log("Contact form notification email sent successfully");
    } catch (err) {
      strapi.log.error("Failed to send contact notification email", err);
    }
  },
};
