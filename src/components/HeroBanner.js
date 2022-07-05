import React from 'react'
import {Box , Typography, Button} from '@mui/material';
import banner from '../assets/images/banner.png'

const HeroBanner = () => {
  return (
    <Box sx={{
        mt:{lg:'212px',xs:'70px'},
        ml:{sm:'50px'}
        }}
        position='relative'
        p='20px'>
        <Typography 
        color="#ff2625" 
        fontWeight='600' 
        fontSize='26px'>Fitness Club</Typography>
        
        <Typography fontWeight='700'
        sx={{
            fontSize:{lg:'44px',xs:'40px'}
        }}
        mb='23px' mt='30px'
        >Sweat , Smile <br/> and Repeat</Typography>

        <Typography fontSize='22px' lineHeight="35px"
        mb={5}>
            Check Out the most effective exercises
        </Typography>
        <Button variant='contained' color='error'
          href='#exercises'
          padding='10px'
          sx={{padding:'10px'}}
        >Explore Exercises
        </Button>
        <Typography color='#ff2625'
        sx={{
            opacity:0.1,
            display:{lg:'block',xs:'none'}
        }}
        fontWeight={600}
        fontSize='200px'
        >Exercises</Typography>
        <img src={banner} alt="" className='hero-banner-img'/>
    </Box>
  )
}

export default HeroBanner