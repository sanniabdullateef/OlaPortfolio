import React from 'react'
import Navbar from './Navbar'
import { makeStyles, withStyles} from '@material-ui/core/styles'
import {TextField, Typography, Button, Grid, Box} from '@material-ui/core'
import SendIcon from '@material-ui/icons/Send'

const useStyles = makeStyles(theme => ({
    form:{
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        position: 'absolute'
    }, 

    button:{
        marginTop: '1rem',
        color: 'tomato',
        borderColor: 'tomato'
    }
}))

const InputField = withStyles({
   root: {
       '& label.Mui-focused': {
           color: 'tomato'
       },
       '& label':{
           color: 'tan'
       },
       '& .MuiOutlinedInput-root': {
           '& fieldset': {
               borderColor: 'tan'
           },
           '&:hover fieldSet':{
               borderColor: 'tan'
           },
           '& .Mui-focused fieldset': {
               borderColor: 'tan'
           }
       }
   },
})(TextField)

const Contact = () => {
    const classes = useStyles ()
    return (
        <Box component='div' style={{background: '#233', height: '100vh'}}>
          <Navbar />  
          <Grid container justify='center'>
              <Box component='form' className={classes.form}>
                  <Typography variant='h5' style={{color: 'tomato', textAlign:'center', textTransform: 'uppercase'}}>
                      Hire or Contact Me!
                  </Typography>
                  <InputField 
                  fullWidth={true} 
                  label='Name'
                  margin='dense'
                  inputProps={{style:{ color: 'tomato'}}}
                  size='medium'
                  variant='outlined'  
                  />
                  <br/>

                 <InputField 
                  fullWidth={true} 
                  label='Email'
                  margin='dense'
                  inputProps={{style:{ color: 'tomato'}}}
                  size='medium'
                  variant='outlined'  
                  />
                  <br/>

                  <InputField 
                  fullWidth={true} 
                  label='Company Name'
                  margin='dense'
                  inputProps={{style:{ color: 'tomato'}}}
                  size='medium'
                  variant='outlined'  
                  />

                  <br/>

                  <Button variant='outlined' className={classes.button} fullWidth={true} endIcon={<SendIcon/>}>
                     Contact Me 
                  </Button>
              </Box>
          </Grid>
            
        </Box>
    )
}

export default Contact
