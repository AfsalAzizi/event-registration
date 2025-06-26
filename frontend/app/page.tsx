import EventForm from "./components/EventForm";
import EventList from "./components/EventList";

export default function Home() {
  return (
    <div className="p-6 space-y-4">
      <EventForm />
      <EventList />
    </div>
  );
}
