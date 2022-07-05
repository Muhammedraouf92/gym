import React from 'react'
import {Typography,Stack,Box} from '@mui/material'
import HorizontalScrollbar from './HorizontalScrollbar'
import Loader from './Loader'
const SimilarExercises = ({equipmentExercises,targetMuscleExercises}) => {
  return (
    <Box sx={{mt:{lg:'100px',xs:'0'}}}>
        <Typography variant='h3' mb={7} textAlign='center'>Exercises that target the same muscle group</Typography>
        <Stack direction='row' sx={{p:'2',position:'relative'}}>
            {targetMuscleExercises.length ?
            <HorizontalScrollbar
             data={targetMuscleExercises} />
            :<Loader />}
        </Stack>
        <Typography variant='h3' mb={7} textAlign='center' mt={7}>Exercises that target the same equipment</Typography>
        <Stack direction='row' sx={{p:'2',position:'relative'}}>
            {equipmentExercises.length ?
            <HorizontalScrollbar
             data={equipmentExercises} />
            :<Loader />}
        </Stack>
    </Box>
  )
}

export default SimilarExercises