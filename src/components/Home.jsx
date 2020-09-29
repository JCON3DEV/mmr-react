import React from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import {makeStyles} from "@material-ui/core/styles";
const useStyles = makeStyles({
  root: {
    width: "100%",
    maxWidth: 375,
  },
});
export default function Home(props) {
  const classes = useStyles();
  return (
    <Container maxWidth="sm">
      <Typography variant="h4" gutterBottom>
        Latest Admissions
      </Typography>
    </Container>
  );
}
