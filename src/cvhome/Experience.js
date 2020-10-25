import React from "react"
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            ...theme.typography.body1,
            backgroundColor: theme.palette.background.paper,
            padding: theme.spacing(0),
        },
    }),
);
function Experience(){
    const classes = useStyles();
    return (
        <div style={{ width: '100%' }} className={classes.root} align={'center'}>
            <div style={{ width: '100%' }} className={classes.root} align={'left'}>
                <Card className={classes.root}>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            Experience
                        </Typography>
                        <Typography variant="body1" color="textPrimary" component="p">
                            I have been working as a full stack developer since May 2018. In this period I've got opportunities to work in multiple projects with different architectures and stacks.
                            MVC, REST API based multi tier application for money transaction are worth mentioning. By following SDLC lifecycle, from requirement analysis to application development and deployment, I have contributed with best practices.
                            Besides, I have also provided technical support and improvement suggestions based on the realtime scenario. Ensuring application security, performance monitoring and designing better solutions are some important parts of my present role.
                        </Typography>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
export default Experience;