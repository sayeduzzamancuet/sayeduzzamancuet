import React from "react"
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import {DataGrid} from "@material-ui/data-grid";
const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            ...theme.typography.body1,
            backgroundColor: theme.palette.background.paper,
            padding: theme.spacing(0),
        },
    }),
);

const rows=[
        {id: 1, Examination: 'BSC in Computer Science & Engineering', Year: '2018', Institute: 'CUET', Score: '2.8 out of 4.0'},
        {id: 2, Examination: 'HSC', Year: '2012', Institute: 'Govt. Ananda Mohan College, Mymensingh', Score: '5.0'},
        {id: 3, Examination: 'SSC', Year: '2010', Institute: 'Bangladesh Agricultural University Highschool', Score: '5.0'},
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
                            <div style={{ height: 350, width: '100%' }}>
                                <DataGrid
                                    columns={[
                                        { field: 'Examination',width: 450},
                                        {field: 'Year'},
                                        {field: 'Institute',width: 400},
                                        {field: 'Score',width: 200}
                                        ]}
                                    autoHeight={true}
                                    hideFooterPagination={true}
                                    hideFooter={true}
                                    rows={rows}
                                />
                                </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
}
export default Academic;