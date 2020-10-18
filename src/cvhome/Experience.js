import React from "react"
import Box from "@material-ui/core/Box";
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Paper from "@material-ui/core/Paper";
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            ...theme.typography.body1,
            backgroundColor: theme.palette.background.paper,
            padding: theme.spacing(0),
        },
    }),
);
function Experience(){
    const classes = useStyles();
    return (
        <div style={{ width: '100%' }} className={classes.root} align={'center'}>
            <Box component="span" display="block" p={1} m={1} bgcolor="background.paper">
                <Paper className={classes.paper} style={{width:'63%'}}>
                    <h5 align={"left"}>Experience</h5>
                    <p align={"center"}>
                        I have been working in ASP.NET, JAVA since two years.
                    </p>
                    <p align={"center"}>

                        <List>
                            <ListItem dense>
                                <ListItemIcon>
                                    <Checkbox
                                        edge="start"
                                        checked={true}
                                        disableRipple
                                        color={"primary"}
                                    />
                                </ListItemIcon>
                                <ListItemText primary={`C#`} />

                                <ListItemIcon>
                                    <Checkbox
                                        edge="start"
                                        checked={true}
                                        disableRipple
                                        color={"primary"}
                                    />
                                </ListItemIcon>
                                <ListItemText primary={`Java`} />
                                <ListItemIcon>
                                    <Checkbox
                                        edge="start"
                                        checked={true}
                                        disableRipple
                                        color={"primary"}
                                    />
                                </ListItemIcon>
                                <ListItemText primary={`MSSQL`} />
                                <ListItemIcon>
                                    <Checkbox
                                        edge="start"
                                        checked={true}
                                        disableRipple
                                        color={"primary"}
                                    />
                                </ListItemIcon>
                                <ListItemText primary={`MySQL`} />
                                <ListItemIcon>
                                    <Checkbox
                                        edge="start"
                                        checked={true}
                                        disableRipple
                                        color={"primary"}
                                    />
                                </ListItemIcon>
                                <ListItemText primary={`Javascript`} />
                                <ListItemIcon>
                                    <Checkbox
                                        edge="start"
                                        checked={true}
                                        disableRipple
                                        color={"primary"}
                                    />
                                </ListItemIcon>
                                <ListItemText primary={`ASP.NET`} />

                            </ListItem>
                        </List>
                    </p>
                </Paper>
            </Box>

        </div>
    );
}
export default Experience;