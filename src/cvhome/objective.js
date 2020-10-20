import React from "react";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Paper from "@material-ui/core/Paper";
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            ...theme.typography.body1,
            backgroundColor: theme.palette.background.paper,
            padding: theme.spacing(0),
        },
    }),
);
function Objective(){
    const classes = useStyles();
    return(
        <div style={{ width: '100%' }} className={classes.root} align={'left'}>
            <Card className={classes.root}>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            Objective
                        </Typography>
                        <Typography variant="body1" color="textPrimary" component="p">
                            I am looking for a better opportunity that will allow me to show my skills in software industries and help me to grow as an industry standard professional software developer. I believe hardworking with responsibility is the key of professionalism.
                        </Typography>
                    </CardContent>
            </Card>
        </div>
    );
}
export default Objective;