import type { NextApiRequest, NextApiResponse } from "next";
import { transporter } from "../../../config/nodemailer";
// import mjml2html from "mjml";
import path from "path";
import fs from "fs";

type Data = {
  name: string;
  email: string;
  message: string;
};

type Response = {
  error?: string;
  status?: string;
  message?: string;
};

const handler = async (req: NextApiRequest, res: NextApiResponse<Response>) => {
  const { name, email, message } = req.body as Data;

  if (req.method !== "POST") {
    return res.status(404).send({ status: "fail", error: "Begone." });
  }

  //   const mjmlTemplate = path.join(__dirname, "../../email.mjml");
  //   const mjmlContent = fs.readFileSync(mjmlTemplate, "utf-8");

  //   const { html } = mjml2html(mjmlContent, {
  //     filePath: mjmlTemplate,
  //     validationLevel: "strict",
  //     minify: true,
  //     beautify: false,
  //     actualPath: __dirname,
  //     name,
  //     surname,
  //     phone,
  //     email,
  //     pickUpAdress,
  //     dropOffAdress,
  //     date,
  //     message,
  //   });

  try {
    await transporter.sendMail({
      to: "laraxlara97@gmail.com",
      from: `${email}`,
      replyTo: email,
      subject: `Test`,
      html: `<h1>${name}</h1>`,
    });

    res.status(200).send({ status: "done", message: "Message has been sent" });
  } catch (error) {
    res.status(500).send({ status: "fail" });
    console.log(error.message);
  }
};

export default handler;
