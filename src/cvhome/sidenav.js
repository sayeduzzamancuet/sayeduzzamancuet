import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import ContactsIcon from '@material-ui/icons/Contacts';
import CallIcon from '@material-ui/icons/Call';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Photo from "./pp.jpg";
import Objective from "./objective";
import Experience from "./Experience";
import Academic from "./academic";
import History from "./history";
import Projects from "./projects";
import Avatar from '@material-ui/core/Avatar';
import Chip from '@material-ui/core/Chip';
import NodeIcon from './icons/nodejs.svg';
import JavaIcon from './icons/java.svg';
import CsharpIcon from './icons/csharp.svg';
import AngularIcon from './icons/angularjs.svg';
import ReactIcon from './icons/react.svg';
import MysqlIcon from './icons/mysql-7.svg';
import MssqlIcon from './icons/microsoft-sql-server.svg';
import RoomIcon from '@material-ui/icons/Room';
import PermPhoneMsgIcon from '@material-ui/icons/PermPhoneMsg';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';



const drawerWidth = 340;

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    drawer: {
        [theme.breakpoints.up('sm')]: {
            width: drawerWidth,
            flexShrink: 0,
        },
    },
    appBar: {
        [theme.breakpoints.up('sm')]: {
            width: `calc(100% - ${drawerWidth}px)`,
            marginLeft: drawerWidth,
        },
    },
    menuButton: {
        marginRight: theme.spacing(2),
        [theme.breakpoints.up('sm')]: {
            display: 'none',
        },
    },
    // necessary for content to be below app bar
    toolbar: theme.mixins.toolbar,
    drawerPaper: {
        width: drawerWidth,
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
}));

function ResponsiveDrawer(props) {
    const { window } = props;
    const classes = useStyles();
    const theme = useTheme();
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <div>
            <div className={classes.toolbar} />
            <Card className={classes.root}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        alt="sayeduzzaman"
                        height="330"
                        image={Photo}
                        title="Sayed Uz Zaman"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            Sayed Uz Zaman
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
            <Divider />
            <List>
                <ListItem>
                    <PermPhoneMsgIcon></PermPhoneMsgIcon><ListItemText primary={"+8801799-026515"}/>
                </ListItem>
                <ListItem>
                        <MailOutlineIcon></MailOutlineIcon><ListItemText primary={"sayeduzzamancuet@gmail.com"}/>
                </ListItem>
                <ListItem>
                    <RoomIcon></RoomIcon><ListItemText primary={"Uttara,Dhaka"}/>
                </ListItem>
            </List>
            <Divider />
            <List>
                <ListItem>
                    <Chip
                        variant="outlined"
                        size="medium"
                        icon={<Avatar src={NodeIcon} />}
                        label="Nodejs"
                        color="primary"
                    />
                    <Chip
                        variant="outlined"
                        size="medium"
                        icon={<Avatar src={JavaIcon} />}
                        label="JAVA"
                        color="primary"
                    />
                    <Chip
                        variant="outlined"
                        size="medium"
                        icon={<Avatar src={CsharpIcon} />}
                        label="C#/.NET"
                        color="primary"
                    />
                </ListItem>

                <ListItem>
                    <Chip
                        variant="outlined"
                        size="medium"
                        icon={<Avatar src={AngularIcon} />}
                        label="Angular"
                        color="primary"
                    />
                    <Chip
                        variant="outlined"
                        size="medium"
                        icon={<Avatar src={ReactIcon} />}
                        label="ReactJs"
                        color="primary"
                    />
                </ListItem>
                <ListItem>
                    <Chip
                        variant="outlined"
                        size="medium"
                        icon={<Avatar src={MysqlIcon} />}
                        label="MySQL"
                        color="primary"
                    />
                    <Chip
                        variant="outlined"
                        size="medium"
                        icon={<Avatar src={MssqlIcon} />}
                        label="MSSQL"
                        color="primary"
                    />
                </ListItem>
            </List>
        </div>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

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
                    <Typography variant="h6" noWrap>
                        Software Engineer
                    </Typography>
                </Toolbar>
            </AppBar>
            <nav className={classes.drawer} aria-label="mailbox folders">
                {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
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
            <main className={classes.content}>
                <div className={classes.toolbar} />
                <Objective></Objective>
                <Experience></Experience>
                <History></History>
                <Projects></Projects>
                <Academic></Academic>
            </main>
        </div>
    );
}

ResponsiveDrawer.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

export default ResponsiveDrawer;