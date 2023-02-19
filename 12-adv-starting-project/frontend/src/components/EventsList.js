import { useLoaderData } from "react-router-dom";
import classes from "./EventsList.module.css";

function EventsList({ events }) {
  console.log(events);

  if (events.isError) return <p>{events.message}</p>;

  const { message } = events;

  const shortArr = [
    message[0],
    message[1],
    message[2],
    message[4],
    message[5],
    message[6],
  ];
  let count = 0;

  return (
    <div className={classes.events}>
      <h1>All Events</h1>
      <ul className={classes.list}>
        {shortArr.map((img) => (
          <li key={count++} className={classes.item}>
            <a href="...">
              <img src={img} alt="alt text" />
              <div className={classes.content}>
                <h2>TITLE</h2>
                <time>DATE</time>
              </div>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default EventsList;
