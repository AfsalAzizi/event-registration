import { EventModel } from "../models/EventModel";
import { Request, Response, NextFunction } from "express";

export const getAllEvents = async (req: Request, res: Response) => {
  try {
    const events = await EventModel.find();
    res.status(200).json({
      success: true,
      data: events,
    });
  } catch (error) {
    console.error("❌ Failed to fetch events:", error);
    res.status(500).json({
      success: false,
      message: "Something went wrong",
    });
  }
};

export const createEvent = async (req: Request, res: Response) => {
  try {
    const { title, description, createdBy, venue, time } = req.body;

    if (!title || !venue || !time || !createdBy) {
      return res.status(400).json({
        success: false,
        message: "Required fields are missing",
      });
    }

    const newEvent = await EventModel.create({
      title,
      description,
      venue,
      time,
      createdBy,
    });

    if (!newEvent) {
      return res.status(500).json({
        success: false,
        message: "Something went wrong!",
      });
    }
    res.status(201).json({
      success: true,
      message: "Event was created successfully",
      data: newEvent,
    });
  } catch (error) {
    console.error("❌ Failed to create event:", error);
    res.status(500).json({
      success: false,
      message: "Something went wrong",
    });
  }
};
