import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import {
    Typography, 
    Box, 
    Grid, 
    Card, 
    CardActionArea,
    CardMedia, 
    CardActions,
    CardContent,
    Button
 } from '@material-ui/core'

import Navbar from './Navbar'
import project1 from '../images/html-css-javascript-lg.jpg'
import project2 from '../images/javascript-fullstack.jpg'
import project3 from '../images/react.png'
import project4 from '../images/mern-stack.jpg'
import project5 from '../images/react-redux.jpg'

const useStyles = makeStyles({
    mainContainer: {
        background: '#233',
        height: '100%'
    },
    cardContainer: {
        maxWidth: 345,
        margin: '5rem auto',
    }
})

const Portfolio = () => {
    const classes = useStyles ();
    return (
        <Box component='div' className={classes.mainContainer}>
            <Navbar />
            <Grid container justify='center'>
                {/* project 1   */}
                <Grid items xs={12} sm={8} md={6} lg={4}>
               <Card className={classes.cardContainer}>
                   <CardActionArea>
                       <CardMedia
                       component='img' 
                       alt='Project 1' 
                       height='140' 
                       image={project1}
                       />
                     <CardContent>
                         <Typography gutterBottom variant='h5'>
                              Project 1
                         </Typography>
                         <Typography variant='body2' color='textSecondary' component='p'>
                         Consequatur rerum amet fuga expedita sunt et tempora saepe? 
                         Iusto nihil explicabo perferendis quos provident 
                         delectus ducimus necessitatibus reiciendis optio 
                         tempora unde earum doloremque commodi laudantium ad nulla vel odio?
                         </Typography>
                     </CardContent>
                     </CardActionArea>
                     <CardActions>
                         <Button size='small' color='primary'>
                             share
                         </Button>
                         <Button size='small' color='primary'>
                             Live Demo
                         </Button>
                     </CardActions>
              </Card>
              </Grid>
                  {/* project 2 */}
                  <Grid items xs={12} sm={8} md={6} lg={4}>
                 <Card className={classes.cardContainer}>
                   <CardActionArea>
                       <CardMedia
                       component='img' 
                       alt='Project 2' 
                       height='140' 
                       image={project2}
                       />
                     <CardContent>
                         <Typography gutterBottom variant='h5'>
                              Project 2
                         </Typography>
                         <Typography variant='body2' color='textSecondary' component='p'>
                         Consequatur rerum amet fuga expedita sunt et tempora saepe? 
                         Iusto nihil explicabo perferendis quos provident 
                         delectus ducimus necessitatibus reiciendis optio 
                         tempora unde earum doloremque commodi laudantium ad nulla vel odio?
                         </Typography>
                     </CardContent>
                     </CardActionArea>
                     <CardActions>
                         <Button size='small' color='primary'>
                             share
                         </Button>
                         <Button size='small' color='primary'>
                             Live Demo
                         </Button>
                     </CardActions>
              </Card>
              </Grid>

              {/* project 3  */}
              <Grid items xs={12} sm={8} md={6} lg={4}>
                 <Card className={classes.cardContainer}>
                   <CardActionArea>
                       <CardMedia
                       component='img' 
                       alt='Project 3' 
                       height='140' 
                       image={project3}
                       />
                     <CardContent>
                         <Typography gutterBottom variant='h5'>
                              Project 3
                         </Typography>
                         <Typography variant='body2' color='textSecondary' component='p'>
                         Consequatur rerum amet fuga expedita sunt et tempora saepe? 
                         Iusto nihil explicabo perferendis quos provident 
                         delectus ducimus necessitatibus reiciendis optio 
                         tempora unde earum doloremque commodi laudantium ad nulla vel odio?
                         </Typography>
                     </CardContent>
                     </CardActionArea>
                     <CardActions>
                         <Button size='small' color='primary'>
                             share
                         </Button>
                         <Button size='small' color='primary'>
                             Live Demo
                         </Button>
                     </CardActions>
              </Card>
              </Grid>

                {/* project 4  */}
                <Grid items xs={12} sm={8} md={6} lg={4}>
                 <Card className={classes.cardContainer}>
                   <CardActionArea>
                       <CardMedia
                       component='img' 
                       alt='Project 4' 
                       height='140' 
                       image={project4}
                       />
                     <CardContent>
                         <Typography gutterBottom variant='h5'>
                              Project 4
                         </Typography>
                         <Typography variant='body2' color='textSecondary' component='p'>
                         Consequatur rerum amet fuga expedita sunt et tempora saepe? 
                         Iusto nihil explicabo perferendis quos provident 
                         delectus ducimus necessitatibus reiciendis optio 
                         tempora unde earum doloremque commodi laudantium ad nulla vel odio?
                         </Typography>
                     </CardContent>
                     </CardActionArea>
                     <CardActions>
                         <Button size='small' color='primary'>
                             share
                         </Button>
                         <Button size='small' color='primary'>
                             Live Demo
                         </Button>
                     </CardActions>     
              </Card>
              </Grid>

              {/* project 4  */}
              <Grid items xs={12} sm={8} md={6} lg={4}>
                 <Card className={classes.cardContainer}>
                   <CardActionArea>
                       <CardMedia
                       component='img' 
                       alt='Project 5' 
                       height='140' 
                       image={project5}
                       />
                     <CardContent>
                         <Typography gutterBottom variant='h5'>
                              Project 5
                         </Typography>
                         <Typography variant='body2' color='textSecondary' component='p'>
                         Consequatur rerum amet fuga expedita sunt et tempora saepe? 
                         Iusto nihil explicabo perferendis quos provident 
                         delectus ducimus necessitatibus reiciendis optio 
                         tempora unde earum doloremque commodi laudantium ad nulla vel odio?
                         </Typography>
                     </CardContent>
                     </CardActionArea>
                     <CardActions>
                         <Button size='small' color='primary'>
                             share
                         </Button>
                         <Button size='small' color='primary'>
                             Live Demo
                         </Button>
                     </CardActions>
              </Card>
              </Grid>
              
            </Grid> 
        </Box>
    )
}

export default Portfolio
