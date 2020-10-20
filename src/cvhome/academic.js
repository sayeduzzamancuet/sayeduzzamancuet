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
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
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
function createData(Examination, Year, Institute, Score) {
    return { Examination, Year, Institute, Score };
}

const rows = [
    createData('BSC in Computer Science & Engineering', 2018, 'CUET', '2.8 out of 4.0'),
    createData('HSC', 2012, 'Govt. Ananda Mohan College, Mymensingh', '5'),
    createData('SSC', 2010, 'Bangladesh Agricultural University Hishschool', '5'),
];
function Academic(){
    const classes = useStyles();
    return (
        <div style={{ width: '100%' }} className={classes.root} align={'center'}>
            <div style={{ width: '100%' }} className={classes.root} align={'center'}>
                <div style={{ width: '100%' }} className={classes.root} align={'left'}>
                    <Card className={classes.root}>
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                Academic
                            </Typography>
                            <Paper className={classes.paper} style={{width:'100%'}}>
                            <TableContainer component={Paper}>
                                <Table className={classes.table} size="small" aria-label="a dense table">
                                    <TableHead>
                                        <TableRow>
                                            <TableCell align={"left"}>Exam Name</TableCell>
                                            <TableCell align="right">Passing Year</TableCell>
                                            <TableCell align="left">Institute</TableCell>
                                            <TableCell align="left">Score</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {rows.map((row) => (
                                            <TableRow key={row.name}>
                                                <TableCell align="left">{row.Examination}</TableCell>
                                                <TableCell align="right">{row.Year}</TableCell>
                                                <TableCell align="left">{row.Institute}</TableCell>
                                                <TableCell align="left">{row.Score}</TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </TableContainer>
                            </Paper>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
}
export default Academic;