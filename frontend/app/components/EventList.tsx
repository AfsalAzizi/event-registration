"use client";

import { useEffect, useState } from "react";

import api from "../utils/api";

interface Event {
  title: string;
  description: string;
  createdAt: string;
  createdBy: string;
  venue: string;
  time: string;
}

const formatDateTime = (datetime: string) => {
  const date = new Date(datetime);
  return date.toLocaleString();
};

const EventList = () => {
  const [events, setEvents] = useState<Event[]>([]);
  const fetchEvents = async () => {
    try {
      const events = await api.get("/events");

      setEvents(events.data.data);
    } catch (error) {
      console.log(error);
      setEvents([]);
    }
  };
  useEffect(() => {
    fetchEvents();
  }, []);
  return (
    <div className=" w-full">
      <h2 className="text-2xl font-semibold">Event List</h2>
      <ul className="mt-4 rounded">
        {events.map((ev, index) => (
          <li key={index} className="p-4 rounded shadow-sm">
            <h3 className="text-lg font-bold mb-1">{ev.title}</h3>
            <p className="text-sm text-gray-700 mb-1">
              <strong>Description:</strong> {ev.description || "N/A"}
            </p>
            <p className="text-sm text-gray-700 mb-1">
              <strong>Venue:</strong> {ev.venue}
            </p>
            <p className="text-sm text-gray-700 mb-1">
              <strong>Event Time:</strong> {formatDateTime(ev.time)}
            </p>
            <p className="text-sm text-gray-500">
              <strong>Created By:</strong> {ev.createdBy} &nbsp;|&nbsp;
              <strong>Created At:</strong> {formatDateTime(ev.createdAt)}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EventList;
