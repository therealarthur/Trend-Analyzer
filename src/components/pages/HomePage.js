import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import { Searchbar, Navbar } from '../containers';

const HomePage = () => {
  // const classes = useStyles();
  return (
    <div>
      <Navbar></Navbar>
        <Searchbar></Searchbar>
      WELCOME HOME!
    </div>
  );    
}




export default HomePage;
