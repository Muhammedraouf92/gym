import React from 'react'
import { Link } from 'react-router-dom'
import {Button,Stack,Typography} from '@mui/material'

const ExerciseCard = ({exercise}) => {
  
    return (
    <div>
        <Link to={`/exercise/${exercise.id}`} 
            className='exercise-card'>
            <img src={exercise.gifUrl} 
            alt={exercise.name} 
            loading='lazy' />
            <Stack direction='row'>
                <Button sx={{ml:'21px',color:'white'
                    ,backgroundColor:"#ffa9a9",fontsize:'14px'
                    ,borderRadius:'20px',textTransform:'capitalize'
                    }}>
                    {exercise.bodyPart}
                </Button>
                <Button sx={{ml:'21px',color:'white'
                    ,backgroundColor:"#fcc757",fontsize:'14px'
                    ,borderRadius:'20px',textTransform:'capitalize'
                    }}>
                    {exercise.target}
                </Button>
        
            </Stack>
            <Typography ml="21px" color="black" fontWeight='bold'
                mt="11px" pb="10px" textTransform='capitalize' fontSize='22px'>
                {exercise.name}
            </Typography>
        </Link>
    </div>
  )
}

export default ExerciseCard