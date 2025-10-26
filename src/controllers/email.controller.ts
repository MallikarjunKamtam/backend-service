import { Request, Response } from "express";
import { sendContactEmail } from "../services/email.service";
import { contactSchema, EmailInput } from "../dtoValidators/sendEmail.dto";

export const sendEmailController = async (req: Request, res: Response) => {
  try {
    const parsed: EmailInput = contactSchema.parse(req.body);

    await sendContactEmail(parsed);

    res.json({
      success: true,
      message: "Your message has been sent successfully!",
    });
  } catch (error: any) {
    if (error.name === "ZodError") {
      return res.status(400).json({
        success: false,
        errors: error.errors.map((e: any) => e.message),
      });
    }

    console.error("Error in contact route:", error);
    res.status(500).json({
      success: false,
      message: "Something went wrong while sending your message.",
    });
  }
};
