import React from 'react'
import {Typography,Stack,Box} from '@mui/material'
const ExerciseVideos = ({exerciseVideos,name}) => {
  if(!exerciseVideos.length){
    return 'loading....'
    }
    return (
    <Box sx={{marginTop:{lg:'200px',xs:'20px'}}} p='20px'>
        <Typography variant='h3' mb={7} textAlign='center'>
            watch <span style={{color:'#ff2625',textTransform:'capitalize'
        ,}}>{name}</span> exercise videos
        </Typography>
        <Stack justifyContent="flex-start" flexWrap="wrap" alignItems='center'
        sx={{
            flexDirection:{lg:'row'},
            gap:{lg:'110px',xs:'0'}
        }}>
           {exerciseVideos?.slice(0,3).map((item,index)=>(
            <a 
            href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
            key={index}
            className='exercise-video'
            target="_blank"
            rel="noreferrer"
            >
                <img src={item.video.thumbnails[0].url} alt="" />
                <Box>
                    <Typography variant='h5' color='black'>
                        {item.video.title}
                    </Typography>
                    <Typography variant='h6' color='black'>
                        {item.video.channelName}
                    </Typography>
                </Box>
            </a>
           )

           )} 
        </Stack>
    </Box>
  )
}

export default ExerciseVideos