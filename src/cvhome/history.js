import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { withStyles } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
const GreenCheckbox = withStyles({
    root: {
        color: green[400],
        '&$checked': {
            color: green[600],
        },
    },
    checked: {},
})((props) => <Checkbox color="default" {...props} />);

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
    const jobRoles=[
        "Communication/Meeting with client remotely, discuss, develop and document requirement specifications",
        "Perform r&d, calculate ETA",
        "Development, testing and collaborate with QA team",
        "Live deployment and version controlling",
        "Live server monitoring",
        "Generate application improvement suggestions"
    ];

    const roleItems = jobRoles.map((jobRoles) =>
        <ul>
            <FormControlLabel
                control={<GreenCheckbox checked={true} name="checkedG" />}
                label={jobRoles}
            />
        </ul>
    );

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
                            <Typography variant="body1" color="textPrimary" component="p">
                                <h3>Oscillosoft Pty Ltd, Dhaka since MAY,2018</h3>
                                {roleItems}

                            </Typography>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
}
export default History;