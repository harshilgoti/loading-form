import React,{useState} from 'react';
import Skeleton from '@material-ui/lab/Skeleton';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import './App.css';

const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

function App() {
const [isLoading,setLoading] = useState(false)
const classes = useStyles();

setTimeout(function(){
  setLoading(true)

},2000)

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}


  return (
    <div className="App">
      {isLoading?(
       <Container component="main" maxWidth="xs">
       <CssBaseline />
       <div className={classes.paper}>
         <Avatar className={classes.avatar}>
           <LockOutlinedIcon />
         </Avatar>
         <Typography component="h1" variant="h5">
           Sign up
         </Typography>
         <form className={classes.form} noValidate>
           <Grid container spacing={2}>
             <Grid item xs={12} sm={6}>
               <TextField
                 autoComplete="fname"
                 name="firstName"
                 variant="outlined"
                 required
                 fullWidth
                 id="firstName"
                 label="First Name"
                 autoFocus
               />
             </Grid>
             <Grid item xs={12} sm={6}>
               <TextField
                 variant="outlined"
                 required
                 fullWidth
                 id="lastName"
                 label="Last Name"
                 name="lastName"
                 autoComplete="lname"
               />
             </Grid>
             <Grid item xs={12}>
               <TextField
                 variant="outlined"
                 required
                 fullWidth
                 id="email"
                 label="Email Address"
                 name="email"
                 autoComplete="email"
               />
             </Grid>
             <Grid item xs={12}>
               <TextField
                 variant="outlined"
                 required
                 fullWidth
                 name="password"
                 label="Password"
                 type="password"
                 id="password"
                 autoComplete="current-password"
               />
             </Grid>
             <Grid item xs={12}>
               <FormControlLabel
                 control={<Checkbox value="allowExtraEmails" color="primary" />}
                 label="I want to receive inspiration, marketing promotions and updates via email."
               />
             </Grid>
           </Grid>
           <Button
             type="submit"
             fullWidth
             variant="contained"
             color="primary"
             className={classes.submit}
           >
             Sign Up
           </Button>
           <Grid container justify="flex-end">
             <Grid item>
               <Link href="#" variant="body2">
                 Already have an account? Sign in
               </Link>
             </Grid>
           </Grid>
         </form>
       </div>
       <Box mt={5}>
         <Copyright />
       </Box>
     </Container>
      ):(
        <div>
           <Container component="main" maxWidth="xs">
       <CssBaseline />
       <div className={classes.paper}>
       <Skeleton variant="circle" width={40} height={40} />
         <Typography component="h1" variant="h5">
         <Skeleton variant="text" width={210} height={80}/>
         </Typography>
         <form className={classes.form} noValidate>
           <Grid container spacing={2}>
             <Grid item xs={12} sm={6}>
             <Skeleton variant="text" width={180} height={80}/>
             </Grid>
             <Grid item xs={12} sm={6}>
             <Skeleton variant="text" width={180} height={80}/>
             </Grid>
             <Grid item xs={12}>
             <Skeleton variant="text" width={400} height={50}/>
             </Grid>
             <Grid item xs={12}>
             <Skeleton variant="text" width={400} height={50}/>
             </Grid>
             <Grid item xs={12}>
             <Skeleton variant="text" width={400} height={50}/>
             </Grid>
           </Grid>
          
           <Grid container justify="flex-end">
             <Grid item>
             <Skeleton variant="text" width={210} height={20}/>
             </Grid>
           </Grid>
         </form>
       </div>
       <Box mt={5}>
       <Skeleton variant="text" width={400} height={40}/>
       </Box>
     </Container>
        </div>
      )}
     
    </div>
  );
}

export default App;










