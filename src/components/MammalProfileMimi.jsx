import React from "react";

// Navigation / Routes
import { Link } from "react-router-dom";
import Footer from "./Footer";
//General Styles/Components
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import Button from "@material-ui/core/Button";

//Semantic UI Components
import { Image } from "semantic-ui-react";

export default function MammalProfileMimi(props) {

  return (
    <Container maxWidth="sm">
      <Box mt={9}>
        <Image src="/docs/seals/otis.jpg" />
      </Box>

      <Box mt={3}>
        <Typography variant="h4" gutterBottom align="center">
          Mimi
        </Typography>
        <Typography variant="body1" gutterBottom align="center">
          date admitted: 2020/06/17
        </Typography>
        <Divider />
      </Box>

      <Box mt={3}>
        <Typography variant="h4" gutterBottom>
          story
        </Typography>
        <Typography variant="body1" gutterBottom>
          Mimi has demonstrated that she is confident eating fish on her own and
          that she can compete for food with other harbour seals.
        </Typography>
      </Box>

      <Box mt={5} mb={5} display="flex" justifyContent="center">
        <Link className="link" to="/loginerror">
          <Button variant="contained" color="primary" size="large">
            Sponsor Me
          </Button>
        </Link>
      </Box>

      <Box mt={3} mb={3}>
        <Image src="/docs/other/profile-fade.png" />
      </Box>

      <Footer />
    </Container>
  );
}
