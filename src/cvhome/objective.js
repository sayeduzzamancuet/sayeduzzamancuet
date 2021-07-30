import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
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
                        Self motivated developer with ability to follow established procedure and work under little or no supervision. Possess strong capability to develop application using .NET and Java technologies.
                        </Typography>
                    </CardContent>
            </Card>
        </div>
    );
}
export default Objective;