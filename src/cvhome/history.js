import React from "react";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Paper from "@material-ui/core/Paper";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            ...theme.typography.body1,
            backgroundColor: theme.palette.background.paper,
            padding: theme.spacing(0),
        },
    }),
);
function History(){
    const classes = useStyles();
    return(
        <div style={{ width: '100%' }} className={classes.root} align={'left'}>
            <div style={{ width: '100%' }} className={classes.root} align={'center'}>
                <div style={{ width: '100%' }} className={classes.root} align={'left'}>
                    <Card className={classes.root}>
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                Employment History
                            </Typography>
                            <Typography variant="body1" color="textPrimary" component="p">Oscillosoft Pty ltd, Dhaka since 2018</Typography>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
}
export default History;