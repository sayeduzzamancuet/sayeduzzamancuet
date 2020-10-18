import React from "react";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Paper from "@material-ui/core/Paper";

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
        <div style={{ width: '100%' }} className={classes.root} align={'center'}>
            <Box component="span" display="block" p={1} m={1} bgcolor="background.paper">
                <Paper className={classes.paper} style={{width:'63%'}}>
                    <h5 align={"left"}>Objective</h5>
                    <p>
                        <Typography variant="body1" color={"textPrimary"} gutterBottom>
                            I am looking for a better opportunity that will allow me to show my skills in software industries and help me to grow as an industry standard professional software developer. I believe hardworking with responsibility is the key of professionalism.
                        </Typography>

                    </p>
                </Paper>
            </Box>

        </div>
    );
}
export default Objective;