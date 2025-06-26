import { Router } from "express";
import { createEvent, getAllEvents } from "../controllers/EventController";

const router = Router();

router.get("/", getAllEvents);
router.post("/", createEvent);

export default router;
