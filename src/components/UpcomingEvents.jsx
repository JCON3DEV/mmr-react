import React, {useEffect, useState} from "react";
import axios from "axios";
import {makeStyles} from "@material-ui/core/styles";

import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import listPlugin from "@fullcalendar/list";

import Box from "@material-ui/core/Box";

const useStyles = makeStyles({
  root: {
    width: "100%",
    maxWidth: 325,
  },
});

export default function UpcomingEvents(props) {
  //useEffect -- make axios request to the events endpoint - when it returns info, save it into state

  const [events, setEvents] = useState([]);
  const classes = useStyles();

  useEffect(() => {
    axios.get("/api/events").then((result) => {
      setEvents(result.data.events);
    });
  }, []);

  // calendar.addEvent( event [, source ] )
  events.forEach((item) => {
    item.title = item.short_description;
    item.date = new Date(item.date_time);
  });

  return (
    <Box mt={10}>
      {/* <Box>
        {events.map((item) => (
          <li location={item.id}> {item.short_description}</li>
        ))}
      </Box> */}
      <FullCalendar
        height="85vh"
        class="calendar"
        initialView="timeGridWeek"
        header={{
          left: "prev,next",
          center: "title",
          right: "dayGridMonth,timeGridWeek,timeGridDay",
        }}
        plugins={[dayGridPlugin, timeGridPlugin, listPlugin]}
        events={events}
      />
    </Box>
  );
}
