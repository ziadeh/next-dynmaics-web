export default ({ env }) => ({
  email: {
    stmp_host: env("SMTP_HOST"),
    stmp_port: env("SMTP_PORT"),
    stmp_username: env("SMTP_USERNAME"),
    stmp_password: env("SMTP_PASSWORD"),
    stmp_from_email: env("FROM_EMAIL"),
    stmp_to_email: env("TO_EMAIL"),
  },
  auth: {
    secret: env("ADMIN_JWT_SECRET"),
  },
  apiToken: {
    salt: env("API_TOKEN_SALT"),
  },
  transfer: {
    token: {
      salt: env("TRANSFER_TOKEN_SALT"),
    },
  },
  secrets: {
    encryptionKey: env("ENCRYPTION_KEY"),
  },
  flags: {
    nps: env.bool("FLAG_NPS", true),
    promoteEE: env.bool("FLAG_PROMOTE_EE", true),
  },
});
