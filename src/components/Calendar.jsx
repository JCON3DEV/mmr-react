import React from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import Box from "@material-ui/core/Box";

export default class DemoApp extends React.Component {
  render() {
    return (
      <Box mt={10}>
        <FullCalendar plugins={[dayGridPlugin]} initialView="dayGridMonth" />
      </Box>
    );
  }
}
