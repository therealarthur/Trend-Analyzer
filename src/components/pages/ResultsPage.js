import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import { Searchbar, Navbar } from '../containers';
import axios from 'axios'

function sortTable(order) {
    var table, rows, switching, i, x, y, shouldSwitch;
    table = document.getElementById("coins_list_table");
    switching = true;

    while (switching) {
      switching = false;
      rows = table.rows;

      for (i = 1; i < (rows.length - 1); i++) {
        shouldSwitch = false;
        x = rows[i].getElementsByTagName("TD")[3];
        y = rows[i + 1].getElementsByTagName("TD")[3];

        if(order) {
          if (Number(x.innerHTML) > Number(y.innerHTML)) {
            shouldSwitch = true;
            break;
          }
        } else {
          if (Number(x.innerHTML) < Number(y.innerHTML)) {
            shouldSwitch = true;
            break;
          }
        }
      }
      if (shouldSwitch) {
        rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
        switching = true;
      }
    }
  }

  function insertCell(param, symbol, image) {
    var cell = document.createElement("td");
    if(image) {
      var img = document.createElement('img')
      img.src = image
      img.className = "mr-3"
      cell.appendChild(img)
    }
    
    if(symbol) 
      var cellText = document.createTextNode(symbol+param);
    else
      var cellText = document.createTextNode(param);
    cell.appendChild(cellText);
    return cell
  }

    const url = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=200&page=1&sparkline=false"

const HomePage = () => {
  // const classes = useStyles();
  return (
    <div>
      <Navbar></Navbar>
      <Searchbar></Searchbar>
      RESULTS PAGE!
    </div>
  );    
}




export default HomePage;
