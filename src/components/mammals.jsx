import React, {useState, useEffect} from "react";
import axios from "axios";
import Heart from "./Heart";
import Unsponsored from "./unsponsored";
import Toggle from "./Toggle.jsx";

// Navigation / Routes
import {Link, useParams} from "react-router-dom";

//General Styles/Components
import Box from "@material-ui/core/Box";
import {makeStyles} from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import Button from "@material-ui/core/Button";
import CheckIcon from "@material-ui/icons/Check";
import ToggleButton from "@material-ui/lab/ToggleButton";
import "../App.css";

// Seal Card Elements
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";

//Experimental Controls components based on maxWidth
const useStyles = makeStyles({
  root: {
    width: "100%",
    maxWidth: 375,
  },
  image: {
    maxWidth: "100%",
  },
  textColor: {
    color: "#000000",
  },
});

export default function Mammals() {
  const [mammals, setMammals] = useState([]);
  let [selected, setSelected] = React.useState(false);
  const [filtered, setFiltered] = useState([]);
  const classes = useStyles();
  // Below is coding gold do not delete comment; learn the async --> await functionality
  const update = async () => {
    let toggle = await Unsponsored().unsponsored;
    return setFiltered(toggle);
  };

  update();

  useEffect(() => {
    axios.get("/api/mammals").then((result) => {
      setMammals(result.data.mammals);
    });
  }, []);
  // console.log("THis is the unsponsored array; ", Unsponsored().unsponsored);
  // console.log("State of the switch is;", selected);

  const iterate = function (array) {
    array.map((item) => {
      console.log(item);
      return item;
    });
  };

  return (
    <Container maxWidth="sm">
      <Box mt={12}>
        <Typography variant="h3" gutterBottom align="center">
          Patient Directory
        </Typography>
      </Box>
      <Box mt={4}>
        <Typography variant="h6" gutterBottom align="center">
          <div class="togglebutton">
            Filter Unsponsored Mammals
            <ToggleButton
              className="togglebutton"
              // value="check"
              selected={selected}
              onChange={() => {
                setSelected(!selected);
                iterate(filtered);
              }}
            >
              <Toggle />
              {/* <CheckIcon /> */}
            </ToggleButton>
          </div>
        </Typography>
      </Box>

      <Box mt={4}>
        <Typography variant="h4" gutterBottom align="center">
          <strong>Current Patient Count: </strong>
        </Typography>
        <Typography variant="body1" gutterBottom align="center">
          45 patients on site, 87 admitted in 2020
        </Typography>
        {!selected ? (
          <Typography variant="body1" gutterBottom align="center">
            Currently Unsponsored Seals:
          </Typography>
        ) : (
          <Typography variant="body1" gutterBottom align="center">
            Sponsored Seals:
          </Typography>
        )}
      </Box>

      <Box mt={3}>
        <Divider />
      </Box>

      <Box mt={3} mb={3} className={classes.root}>
        <>
          {!selected
            ? filtered.map((item) => {
                return (
                  <>
                    <Box mt={4}>
                      <Card>
                        {/* The address seals/${item.id} is set on App.js to the correct view */}
                        {/* {console.log(item)} */}
                        {/* <Heart /> */}
                        <Link className="link" to={`/seals/${item.id}`}>
                          <CardActionArea>
                            <CardMedia
                              key={item.id}
                              component="img"
                              alt="Adorable seal"
                              height="180"
                              image={process.env.PUBLIC_URL + item.profile_pic}
                              title={item.mammal_name}
                            />

                            <CardContent>
                              {/* <Heart /> */}
                              <Typography
                                gutterBottom
                                variant="h5"
                                component="h2"
                                align="center"
                                className={classes.textColor}
                              >
                                {item.mammal_name}
                              </Typography>
                            </CardContent>
                          </CardActionArea>
                        </Link>
                      </Card>
                    </Box>
                  </>
                );
              })
            : mammals.slice(1).map((item) => (
                <>
                  <Box mt={4}>
                    <Card>
                      {/* The address seals/${item.id} is set on App.js to the correct view */}
                      {/* {console.log(item)} */}
                      <Link className="link" to={`/seals/${item.id}`}>
                        <CardActionArea>
                          <CardMedia
                            key={item.id}
                            component="img"
                            alt="Adorable seal"
                            height="180"
                            image={process.env.PUBLIC_URL + item.profile_pic}
                            title={item.mammal_name}
                          />

                          <CardContent>
                            <Typography
                              gutterBottom
                              variant="h5"
                              component="h2"
                              align="center"
                              className={classes.textColor}
                            >
                              {item.mammal_name}
                            </Typography>
                          </CardContent>
                        </CardActionArea>
                      </Link>
                    </Card>
                  </Box>
                </>
              ))}
        </>
      </Box>
    </Container>
  );
}
