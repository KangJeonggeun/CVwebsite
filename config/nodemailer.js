import nodemailer from "nodemailer";
import userMail from "../components/home/emailContact";

const email = process.env.EMAIL;
const pass = process.env.EMAIL_PASS;
const userEmail = userMail;

export const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: email,
    pass,
  },
});

export const mailOptions = {
  from: email,
  to: [email, userEmail],
};
