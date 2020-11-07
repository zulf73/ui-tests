import logo from './logo.svg';
import './App.css';
import {Avatar} from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";
import zulf_lit from "./zulf_lit.jpg";
const useStyles = makeStyles(theme => ({
  large: {
    width: theme.spacing(8),
    height: theme.spacing(8)
  }
}));

//<Avatar alt="Zulf Ahmed" src="https://photos.google.com/share/AF1QipMMAQV4FeAtzYOFFDyOF2ANqj9RpsSvhfSERtPt8fNwdvWrRRCzxHVygCrje05Hzg/photo/AF1QipP7K1egE2x_HY9vQkr0fccxc6WacaCGdcc5WWeH?key=eF9KcHE2akhtaEw1QUtyNHZ3aUxfZVozaTVBcjRB" />
function App() {
    const classes = useStyles();
    return (
	  <div>
	  <Avatar alt="Zulf"
	src={zulf_lit}
	className={classes.large}
	    />
	    
	    <img src={zulf_lit} />
</div>
  );
}

export default App;
