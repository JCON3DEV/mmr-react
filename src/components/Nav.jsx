import React from "react";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";
import List from "@material-ui/core/List";
import {Link} from "react-router-dom";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import MenuIcon from "@material-ui/icons/Menu";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import BubbleChartIcon from '@material-ui/icons/BubbleChart';
import {makeStyles, useTheme} from "@material-ui/core/styles";

// /* <li>
//               <Link to="/nav">Nav</Link>
//             </li>
//             <li>
//               <Link to="/aboutus">AboutUs</Link>
//             </li>
//             <li>
//               <Link to="/contactus">ContactUs</Link>
//             </li>
//             <li>
//               <Link to="/donate">Donate</Link>
//             </li>
//             <li>
//               <Link to="/home">Home</Link>
//             </li>
//             <li>
//               <Link to="/liveevent">LiveEvent</Link>
//             </li>
//             <li>
//               <Link to="/fullmammalprofile">FullMammalProfile</Link>
//             </li>
//             <li>
//               <Link to="/fullmammalprofile">MammalProfile</Link>
//             </li>
//             <li>
//               <Link to="/myseals">MySeals</Link>
//             </li>
//             <li>
//               <Link to="/notifications">Notifications</Link>
//             </li> */

const drawerWidth = 220;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    [theme.breakpoints.up("sm")]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginRight: drawerWidth,
    },
  },
  menuButton: {
    marginRight: theme.spacing(1),
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(20),
  },

  //uses flex to move menu icon to right side
  menuStyle: {
    flex: 1,
  },
}));

export default function Nav(props) {
  const {window} = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <div className={classes.toolbar} />
      <Divider />
      <List>
        {[
          {label: "About Us", path: "/aboutus"},
          {label: "Upcoming Events", path: "/upcomingevents"},
          {label: "Tracker Map", path: "/trackermap"},
          {label: "Contact Us", path: "/contactus"},
          {label: "Donate", path: "/donate"},
        ].map((item, index) => (
          <ListItem button key={item.label}>
            <Link to={item.path}>{item.label}</Link>
            {/* <ListItemText primary={text} /> */}
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {["Media", "Stories", "Careers"].map((text, index) => (
          <ListItem button key={text}>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <Typography className={classes.menuStyle} variant="h5" noWrap>
            <BubbleChartIcon />
            SOS
          </Typography>

          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <nav className={classes.drawer} aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === "rtl" ? "left" : "right"}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
    </div>
  );
}

Nav.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};
