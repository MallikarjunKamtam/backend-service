import { SESClient, SendEmailCommand } from "@aws-sdk/client-ses";
import dotenv from "dotenv";
dotenv.config();

const sesClient = new SESClient({ region: process.env.AWS_REGION });

export async function sendContactEmail(data: {
  name: string;
  email: string;
  subject: string;
  message: string;
}) {
  const { name, email, subject, message } = data;

  const emailParams = {
    Source: process.env.SENDER_EMAIL!,
    Destination: {
      ToAddresses: [process.env.OWNER_EMAIL!],
    },
    Message: {
      Subject: { Data: `New Contact: ${subject}` },
      Body: {
        Html: {
          Data: `
            <h2>New Contact Submission</h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Subject:</strong> ${subject}</p>
            <p><strong>Message:</strong></p>
            <p>${message}</p>
          `,
        },
      },
    },
  };

  try {
    const command = new SendEmailCommand(emailParams);
    const response = await sesClient.send(command);
    console.log("✅ Contact email sent:", response.MessageId);
    return response;
  } catch (error) {
    console.error("❌ Failed to send contact email:", error);
    throw error;
  }
}
