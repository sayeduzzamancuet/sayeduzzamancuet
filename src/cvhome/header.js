import React from "react";
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Photo from './pp.jpg';
import ContactPhoneIcon from '@material-ui/icons/ContactPhone';
import EmailIcon from '@material-ui/icons/Email';
import HomeIcon from '@material-ui/icons/Home';
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
                            {/*<Avatar src={Photo} round={false}></Avatar>*/}
                            <img src={Photo} align={"left"} height="150" width="120"/>
                            <Typography variant={"h5"} align={"left"}>Sayed Uz Zaman</Typography>
                            <Box display="flex">
                                <Box>
                                    <Typography variant={"caption"} style={{fontWeight:"bold"}} color={"primary"}><ContactPhoneIcon style={{fontSize:20}}></ContactPhoneIcon> : +8801799-026515</Typography>
                                </Box>
                                <Box>
                                    <Typography variant={"caption"}  style={{fontWeight:"bold"}} color={"primary"}><EmailIcon style={{fontSize:20}}></EmailIcon> : sayeduzzamancuet@gmail.com</Typography>
                                </Box>
                                <Box>
                                    <Typography variant={"caption"} style={{fontWeight:"bold"}} color={"primary"}><HomeIcon style={{fontSize:20}}></HomeIcon> : Uttara,Dhaka</Typography>
                                </Box>
                            </Box>
                        </Grid>

                    </Grid>

                </Paper>
            </Box>

        </div>
    );
}
export default Header;