import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import DirectionsIcon from '@material-ui/icons/Directions';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: '2px 4px',
    flexGrow: 1,
    display: 'flex',
    alignItems: 'center',
    width: 400,
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  divider: {
    height: 28,
    margin: 4,
  },
}));

export default function CustomizedInputBase() {
  const classes = useStyles();

  return (
    
    <div >
      <div style={{ paddingTop: '256px', width:'100%', display: 'flex', boxSizing:'border-box',flexDirection:'column', alignItems: 'center'}}>
      <Typography variant="h5" style={{fontWeight: 'bold', flexGrow: 1, }}>
            Search
          </Typography>
        <Paper component="form" className={classes.root}>
          <InputBase
            className={classes.input}
            placeholder="Search Cryptos"
            inputProps={{ 'aria-label': 'search cryptos' }}
            />
          <IconButton type="submit" className={classes.iconButton} aria-label="search">
            <SearchIcon />
          </IconButton>
        </Paper>
      </div>
    </div>
  );
}