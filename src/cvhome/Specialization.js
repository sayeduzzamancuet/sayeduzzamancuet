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
                            Skills
                        </Typography>
                            <div style={{ height: 350, width: '100%' }}>
                                <DataGrid
                                    columns={[{ field: 'Name',width: 200 },{field: 'Details', width: 400}]}
                                    autoHeight={true}
                                    autoWidth={true}
                                    hideFooterPagination={true}
                                    hideFooter={true}
                                    rows={[
                                        { id: 1, Name: 'Front-end',Details: 'HTML,Javascript, Jquery, AngularJs 1,Angular 9, thymeleaf,.NET Windows form' },
                                        { id: 2, Name: 'Back-end',Details: 'ASP.NET, ASP.NET MVC, ASP.NET WEB API, Spring Boot REST API' },
                                        { id: 3, Name: 'Database',Details: 'MySQL 5.7, MSSQL 14,16, Redis' },
                                        { id: 4, Name: 'Application servers', Details:'Tomcat, IIS'},
                                        { id: 5, Name: 'Version controlling', Details: 'Git, SVN'},
                                        { id: 6, Name: 'Project management', Details: 'Agile project management with Jira'},
                                        { id: 7, Name: 'Other', Details: 'Docker container'}
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