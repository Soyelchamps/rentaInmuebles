import dotenv from 'dotenv';

dotenv.config();

const config = {
  server: {
    port: process.env.PORT || 3000,
    url: process.env.URL || `http://localhost:${process.env.PORT || 3000}`,
  },
  database: {
    uri: process.env.DB_URI || 'mongodb://localhost/cinemadatabase',
  },
  jwtSecret: process.env.JWT_SECRET,
  mailCredentials: {
    userMail: process.env.MAIL_EMAIL,
    pass: process.env.MAIL_PASSWORD,
  },
};

if (
  !config.mailCredentials.userMail ||
  !config.mailCredentials.pass ||
  !config.jwtSecret
) {
  console.error('Missing env variables');
  process.exit(1);
}

export default config;
