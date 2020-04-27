import React from 'react'
import {
   Typography,
   Avatar,
   Grid,
   Box
} from '@material-ui/core'
import Typed from 'react-typed'
import {makeStyles} from '@material-ui/core/styles'
import avatar from '../../src/olanrewaju.JPG';

// css styles
const useStyles = makeStyles(theme=>({
    avatar: {
        width: theme.spacing(15),
        height: theme.spacing(15),
        margin: theme.spacing(1),
    },
    title: {
        color: '#660033'
    },
    subtitle:{
        color: 'red',
        marginBottom: '3rem'
    },
    typedContainer:{
        position:'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '100vw',
        textAlign: 'center',
        zIndex: 1
    }
}))

const Header = () => {
    const classes = useStyles();
    return (
        <Box className={classes.typedContainer}>
            <Grid container justify='center'>
            <Avatar className={classes.avatar} src={avatar} alt='olanrewaju' />
            </Grid>
            <Typography 
            className={classes.title}
            variant="h4">
                <Typed strings={["Sanni Abdullateef Olanrewaju"]} typeSpeed={40}/>
            </Typography>
            <br/>
            <Typography 
            className={classes.subtitle}
            variant="h4">
                <Typed strings={["JavaScript", "ReactJS", "MERN Stack", "MongoDB", "NodeJS"]} 
                typeSpeed={40}
                backSpeed={60}
                loop
                />
            </Typography>
        </Box>
    )
}

export default Header
