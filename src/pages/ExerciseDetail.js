import React,{useEffect,useState} from 'react'
import { useParams } from 'react-router-dom'
import {Box} from '@mui/material'
import { exerciseOptions, fetchData ,youtubeOptions} from '../utils/fetchData'
import Detail from '../components/Detail'
import ExerciseVideos from '../components/ExerciseVideos'
import SimilarExercises from '../components/SimilarExercises'

const ExerciseDetail = () => {
  const [exerciseDetail, setExerciseDetail] = useState([])
  const {id}=useParams()
  const [exerciseVideos,setExerciseVideos] =useState([])
  const [targetMuscleExercises, setTargetMuscleExercises] = useState([])
  const [equipmentExercises, setEquipmentExercises] = useState([])
  useEffect(() => {
    const fetchExercisedData = async()=>{
      const exerciseDpUrl='https://exercisedb.p.rapidapi.com'
      const youtubeSearchUrl ='https://youtube-search-and-download.p.rapidapi.com'
      const exerciseDetailData=await fetchData(`${exerciseDpUrl}/exercises/exercise/${id}`,exerciseOptions)
      const exerciseVideosData=await fetchData(`${youtubeSearchUrl}/search?query=${exerciseDetailData.name}`,youtubeOptions)
      const targetMuscleExercisesData=await fetchData(`${exerciseDpUrl}/exercises/target/${exerciseDetailData.target}`,exerciseOptions)
      const equipmentExercisesData=await fetchData(`${exerciseDpUrl}/exercises/equipment/${exerciseDetailData.equipment}`,exerciseOptions)
      
      setExerciseDetail(exerciseDetailData)
      setExerciseVideos(exerciseVideosData.contents)
      setTargetMuscleExercises(targetMuscleExercisesData)
      setEquipmentExercises(equipmentExercisesData)
    }
  
   fetchExercisedData()
  }, [id])
  
 
 
  return (
    <Box>
      <Detail exerciseDetail={exerciseDetail} />
      <ExerciseVideos exerciseVideos={exerciseVideos} name={exerciseDetail.name}/>
      <SimilarExercises targetMuscleExercises={targetMuscleExercises}
      equipmentExercises={equipmentExercises} />
    </Box>
  )
}

export default ExerciseDetail