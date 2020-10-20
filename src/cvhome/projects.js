import React from "react"
import Box from "@material-ui/core/Box";
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Paper from "@material-ui/core/Paper";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
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
function Projects(){
    const classes = useStyles();
    return (
        <div style={{ width: '100%' }} className={classes.root} align={'center'}>
            <div style={{ width: '100%' }} className={classes.root} align={'center'}>
                <div style={{ width: '100%' }} className={classes.root} align={'left'}>
                    <Card className={classes.root}>
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                Projects
                            </Typography>
                            <Typography variant="body1" color="textPrimary" component="p">
                                I am a self motivated developer. Beside by professional career I have also contributed to a personal real estate project build on asp.net,razor,jquery and javascript stack backed with MSSQL server.
                            </Typography>
                        </CardContent>
                    </Card>
                </div>
            </div>


        </div>
    );
}
export default Projects;