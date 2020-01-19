import React from 'react';
// import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import HomeWorkIcon from '@material-ui/icons/HomeWork';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InfoIcon from '@material-ui/icons/Info';
import WorkIcon from '@material-ui/icons/Work';
import ContactMailIcon from '@material-ui/icons/ContactMail';
import PictureAsPdfIcon from '@material-ui/icons/PictureAsPdf';
import SportsSoccerIcon from '@material-ui/icons/SportsSoccer';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Home from './components/home';
import About from './components/about';
import Contact from './components/contact';
import Projects from './components/projects';
import Resume from './components/Resume';
import Hobby from './components/hobby'
import { Route, Link } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: 200,
      flexShrink: 0,
    },
  },
  appBar: {
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - 200px)`,
      marginLeft: 200,
      background: 'red',
      textAlign: 'center'
    },
  },
  appBarWord: {
    display: 'flex',
    fontFamily: 'Allerta Stencil',
    marginLeft: '25%',
    color: '#c0eb34',
  },
  navTap: {
    fontFamily: 'Allerta Stencil',
    fontSize: '1.4rem',
    color: '#c0eb34',
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: 200,
    background: '#003300',
    opacity: 0.5,
    fontSize: '3.5rem',
    fontFamily: 'Allerta Stencil',
    color: '#ffffff'
  },
  content: {
    flexGrow: 1,
    height: 'auto',
    padding: theme.spacing(3),
    background: '#bfbfbf',
  },
}));

function App(props) {
  const { container } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div >
      <div className={classes.toolbar} >Hello</div>
      <Divider />
      <List>
        <ListItem button >
          <ListItemIcon> <HomeWorkIcon /> </ListItemIcon>
          <ListItemText> <Link to='/' className={classes.navTap}>HOME</Link> </ListItemText>
        </ListItem>
        <ListItem button >
          <ListItemIcon> <InfoIcon /> </ListItemIcon>
          <ListItemText> <Link to='/about' className={classes.navTap}>ABOUT</Link> </ListItemText>
        </ListItem>
        <ListItem button >
          <ListItemIcon> <WorkIcon /> </ListItemIcon>
          <ListItemText> <Link to='/projects' className={classes.navTap}>PROJECTS</Link> </ListItemText>
        </ListItem>
      </List>
      <Divider />
      <List>
        <ListItem button>
          <ListItemIcon> <ContactMailIcon /> </ListItemIcon>
          <ListItemText> <Link to='contact' className={classes.navTap}>CONTACT</Link> </ListItemText>
        </ListItem>
        <ListItem button>
          <ListItemIcon> <PictureAsPdfIcon /> </ListItemIcon>
          <ListItemText> <Link to='/resume' className={classes.navTap}>RESUME</Link> </ListItemText>
        </ListItem>
        <ListItem button>
          <ListItemIcon> <SportsSoccerIcon /> </ListItemIcon>
          <ListItemText> <Link to='/hobby' className={classes.navTap}>HOBYY</Link> </ListItemText>
        </ListItem>
      </List>
    </div>
  );

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h4" Wrap className={classes.appBarWord}>
            Oportunity did not Knock Untill You Built a Door!
          </Typography>
        </Toolbar>
      </AppBar>
      <nav className={classes.drawer} aria-label="mailbox folders">
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true,
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
      <main className={classes.content}>
        <div className={classes.toolbar} />

        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/projects" component={Projects} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/resume" component={Resume} />
        <Route exact path="/hobby" component={Hobby} />
      </main>
    </div>
  );
}

// App.propTypes = {
//   /**
//    * Injected by the documentation to work in an iframe.
//    * You won't need it on your project.
//    */
//   container: PropTypes.instanceOf(typeof Element === 'undefined' ? Object : Element),
// };

export default App;