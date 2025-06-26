import { Router } from "express";
import { createEvent, getAllEvents } from "../controllers/EventController";
import { authenticate, isAdmin } from "../middleware/authMiddleware";

const router = Router();

router.get("/", getAllEvents);
router.post("/", authenticate, isAdmin, createEvent);

export default router;
