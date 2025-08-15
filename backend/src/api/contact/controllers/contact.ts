/**
 * contact controller
 */

import { factories } from "@strapi/strapi";

export default factories.createCoreController(
  "api::contact.contact",
  ({ strapi }) => ({
    async sendLatestEmail(ctx) {
      try {
        // Send email
        await strapi.plugins["email"].services.email.send({
          to: "ziad.ziadeh@nextdynamicsinc.com",
          subject: "Latest Contact Form Submission",
          html: `
          <h3>Contact Form Submission</h3>
          <p><strong>Name:</strong></p>
          <p><strong>Email:</strong></p>
          <p><strong>Message:</strong></p>
        `,
        });

        return ctx.send({
          message: "Email sent successfully",
        });
      } catch (err) {
        console.error("Failed to send email:", err);
        return ctx.badRequest("Failed to send email");
      }
    },
  })
);
