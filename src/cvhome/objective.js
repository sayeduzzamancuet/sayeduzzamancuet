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
                            I am an individual with ability to follow established procedures and work under minimum or no supervision. Looking to obtain the job of Software Developer at your company.
                            Being a full stack developer I strongly believe I have the capabilities to add values to the business.
                        </Typography>
                    </CardContent>
            </Card>
        </div>
    );
}
export default Objective;