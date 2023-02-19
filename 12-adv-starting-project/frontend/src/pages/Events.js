import { useLoaderData } from "react-router-dom";

import EventsList from "../components/EventsList";
// import { Link } from "react-router-dom";

// const DUMMY_EVENTS = [
//   { id: "e1", title: "Some event" },
//   { id: "e2", title: "Another event" },
// ];

function EventsPage() {
  const events = useLoaderData();
  return <EventsList events={events} />;
}

export default EventsPage;

export async function loader() {
  const response = await fetch("https://dog.ceo/api/breed/hound/images");

  if (!response.ok) {
    throw new Response(JSON.stringify({ message: "Could not fetch dogs" }), {
      status: 500,
    });
  } else {
    return response;
  }
}
