import React from "react"
import Box from "@material-ui/core/Box";
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Paper from "@material-ui/core/Paper";
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';
import FastfoodIcon from '@material-ui/icons/Fastfood';
import LaptopMacIcon from '@material-ui/icons/LaptopMac';
import Typography from '@material-ui/core/Typography';
const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            ...theme.typography.body1,
            backgroundColor: theme.palette.background.paper,
            padding: theme.spacing(0),
        },
    }),
);
function Academic(){
    const classes = useStyles();
    return (
        <div style={{ width: '100%' }} className={classes.root} align={'center'}>
            <Box component="span" display="block" p={1} m={1} bgcolor="background.paper">
                <Paper className={classes.paper} style={{width:'63%'}}>
                    <h5 align={"left"}>Academic</h5>
                    <p align={"left"}>
                        <table  className={"table"}>
                            <thead>
                            <th><td>Description</td></th>
                            <th><td>Year</td></th>
                            <th><td>Institution</td></th>
                            <th><td>Score</td></th>
                            </thead>
                            <tbody>
                            <tr><td>BSC in Computer Science<br></br> and Engineering</td><td>2018</td><td>CUET</td><td>2.8 out of 4.0</td></tr>
                            <tr><td>HSC</td><td>2012</td><td>Govt. Ananda Mohan College, Mymensingh</td><td>GPA-5 out of 5.0</td></tr>
                            <tr><td>SSC</td><td>2010</td><td>Bangladesh Agricultural University Highschool, Mymensingh</td><td>GPA-5 out of 5.0</td></tr>
                            </tbody>
                        </table>
                    </p>

                </Paper>
            </Box>

        </div>
    );
}
export default Academic;