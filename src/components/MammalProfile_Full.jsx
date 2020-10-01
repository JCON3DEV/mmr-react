import React, {useState} from "react";
import {Link} from "react-router-dom";
//General Styles/Components
import Box from "@material-ui/core/Box";
import {makeStyles} from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import {useSpring, animated} from "react-spring/web.cjs";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import "../mammalprofilefull.css";

//Controls components based on maxWidth
const useStyles = makeStyles({
  root: {
    width: "90%",
    maxWidth: 375,
  },
  map: {
    maxWidth: "100%",
  },
});

const Fade = React.forwardRef(function Fade(props, ref) {
  const {in: open, children, onEnter, onExited, ...other} = props;
  const style = useSpring({
    from: {opacity: 0},
    to: {opacity: open ? 1 : 0},
    onStart: () => {
      if (open && onEnter) {
        onEnter();
      }
    },
    onRest: () => {
      if (!open && onExited) {
        onExited();
      }
    },
  });

  return (
    <animated.div ref={ref} style={style} {...other}>
      {children}
    </animated.div>
  );
});

export default function MammalProfile_Full(props) {
  const classes = useStyles();

  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Container maxWidth="sm">
      <Box mt={12}>
        <Typography variant="h3" gutterBottom align="center">
          Full Mammal Profile
        </Typography>
      </Box>

      <Box mt={5} mb={5} display="flex" justifyContent="center">
        <Button
          onClick={handleOpen}
          variant="contained"
          color="secondary"
          size="large"
        >
          Attending
        </Button>
      </Box>

      <div>
        <Dialog
          // onClose={handleClose}
          aria-labelledby="customized-dialog-title"
          open={open}
        >
          <DialogTitle id="customized-dialog-title" onClose={handleClose}>
            "MARINE BIOLOGIST CHATS" is happening now!!
          </DialogTitle>

          <DialogContent>
            <Link to="/liveevent">
              <Button
                // style={{backgroundColor: "green"}}
                variant="contained"
                color="secondary"
                size="large"
                onClick={() => {}}
              >
                Join Event
              </Button>
            </Link>
          </DialogContent>
        </Dialog>
      </div>

      {/* <Modal
        aria-labelledby="spring-modal-title"
        aria-describedby="spring-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <h2 className="popup" id="spring-modal-title">
              <Link to="/liveevent">
                <Button variant="contained" color="secondary" size="large">
                  Join Event
                </Button>
              </Link>
            </h2>
          </div>
        </Fade>
      </Modal> */}

      <iframe
        className="mammalprofilefull"
        width="375"
        src="https://www.youtube.com/embed/qMKEm2r1HqI"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullScreen
      ></iframe>
    </Container>
  );
}
