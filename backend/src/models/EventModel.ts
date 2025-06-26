import mongoose, { Document, Schema } from "mongoose";

interface EventDocument extends Document {
  title: string;
  description?: string;
  createdBy: string;
  createdAt: Date;
  venue: string;
  time: Date;
}

const EventSchema = new Schema<EventDocument>({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: false,
  },
  venue: {
    type: String,
    required: true,
  },
  time: {
    type: Date,
    required: true,
  },
  createdBy: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export const EventModel = mongoose.model<EventDocument>("Event", EventSchema);
