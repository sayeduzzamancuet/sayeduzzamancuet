import React from "react"
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { DataGrid } from '@material-ui/data-grid';
const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            ...theme.typography.body1,
            backgroundColor: theme.palette.background.paper,
            padding: theme.spacing(0),
        },
    }),
);

function Specialization(){
    const classes = useStyles();
    return(
        <div style={{ width: '100%' }} className={classes.root} align={'center'}>
            <div style={{ width: '100%' }} className={classes.root} align={'left'}>
                <Card className={classes.root}>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            Specializations
                        </Typography>
                            <div style={{ height: 350, width: '100%' }}>
                                <DataGrid
                                    columns={[{ field: 'Name' },{field: 'Details', width: 350}]}
                                    autoHeight={true}
                                    hideFooterPagination={true}
                                    hideFooter={true}
                                    rows={[
                                        { id: 1, Name: 'Frontend',Details: 'Angular,React,Html,Css,Javascript,Jquery' },
                                        { id: 2, Name: 'Backend',Details: 'C#,.NET,Java spring boot' },
                                        { id: 3, Name: 'Database',Details: 'MSSQL 2014, MySQL 5.7' },
                                    ]}
                                />
                            </div>

                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
export default Specialization;