import emailRoute from "./email.route";
import { Router } from "express";

const router = Router();

router.use("/email", emailRoute);

export default router;
