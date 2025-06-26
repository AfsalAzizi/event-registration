"use client";

import { useState } from "react";
import api from "../utils/api";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const EventForm = () => {
  const [title, setTitle] = useState("");
  const [description, setDestiption] = useState("");
  const [venue, setVenue] = useState("");
  const [createdBy, setCreatedBy] = useState("");
  const [time, setTime] = useState<Date | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!title || !venue || !createdBy || !time) {
      return;
    }

    try {
      await api.post("/events", {
        title,
        description,
        venue,
        createdBy,
        time: time.toISOString(),
      });

      setTitle("");
      setDestiption("");
      setVenue("");
      setCreatedBy("");
      setTime(null);
    } catch (error) {
      console.log("❌ Error creating event:", error);
    }
  };
  return (
    <>
      <h2 className="text-2xl font-semibold">Register Event</h2>
      <form onSubmit={handleSubmit} className="space-y-3">
        <input
          id="title"
          value={title}
          type="text"
          className="w-full p-2 border border-gray-300 rounded"
          placeholder="Title"
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          required
        />
        <textarea
          value={description}
          onChange={(e) => setDestiption(e.target.value)}
          id="description"
          placeholder="Description"
          className="border border-gray-300 p-2 w-full rounded"
        />
        <input
          id="venue"
          value={venue}
          onChange={(e) => setVenue(e.target.value)}
          type="text"
          className="w-full p-2 border border-gray-300 rounded"
          placeholder="Venue"
          required
        />
        <DatePicker
          selected={time}
          onChange={(date: Date | null) => setTime(date)}
          showTimeSelect
          dateFormat="Pp"
          className="w-full p-2 border border-gray-300 rounded"
          placeholderText="Select date and time"
        />

        <input
          id="created-by"
          value={createdBy}
          type="text"
          className="w-full p-2 border border-gray-300 rounded"
          placeholder="Created By"
          onChange={(e) => {
            setCreatedBy(e.target.value);
          }}
          required
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-3 py-2 rounded hover:bg-blue-800"
        >
          Register
        </button>
      </form>
    </>
  );
};

export default EventForm;
