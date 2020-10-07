import React, {useEffect, useState} from "react";
import axios from "axios";
import {makeStyles} from "@material-ui/core/styles";
import {Link} from "react-router-dom";

import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import listPlugin from "@fullcalendar/list";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import Footer from "./Footer";

// Subscribe Toggle Button
import ToggleButton from "@material-ui/lab/ToggleButton";

import Box from "@material-ui/core/Box";

const useStyles = makeStyles({
  root: {
    width: "100%",
    maxWidth: 325,
  },
});

export default function UpcomingEvents(props) {
  //Handles toggle state
  const [selected, setSelected] = React.useState(false);

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
    <Container>
      <Box mt={8}>
        <Typography variant="h4" gutterBottom align="center">
          Upcoming Events
        </Typography>
      </Box>

      <Box mt={4}>
        <FullCalendar
          height="70vh"
          class="calendar"
          // can change initial views to listWeek or list or listDay or listMonth
          initialView="listMonth"
          header={{
            left: "prev,next",
            center: "title",
            right: "dayGridMonth,timeGridWeek,timeGridDay",
          }}
          plugins={[dayGridPlugin, timeGridPlugin, listPlugin]}
          events={events}
        />
      </Box>
      <Box mt={3} ml={13}>
        <Link to="/maps">
          <Button
            display="flex"
            justifycontent="center"
            variant="outlined"
            color="primary"
            className="seecalendarbutton"
          >
            See Event Map
          </Button>
        </Link>
      </Box>
      <Footer />
    </Container>
  );
}
