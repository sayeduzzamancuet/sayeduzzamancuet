import React from "react";
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Photo from './pp.jpg';
const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,
            overflow: 'hidden',
            padding: theme.spacing(0, 3),
        },
        paper: {
            maxWidth: 800,
            margin: `${theme.spacing(1)}px auto`,
            padding: theme.spacing(2),
        },
    }),
);
function Header(){
    const classes = useStyles();
    return (
        <div style={{ width: '100%' }}>
            <Box component="span" display="block" p={1} m={1} bgcolor="background.paper">
                <Paper className={classes.paper}>
                    <Grid container direction={'column'} justify={'center'} wrap="nowrap" alignItems={'left'} alignContent={'left'}>
                        <Grid item>
                            <img src={Photo} align={"left"} height="150" width="120"/>
                        </Grid>
                    </Grid>

                </Paper>
            </Box>

        </div>
    );
}
export default Header;