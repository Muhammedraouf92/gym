import React,{useEffect,useState} from 'react'
import {Box , Stack , Typography, Button,TextField} from '@mui/material';
import {exerciseOptions,fetchData} from '../utils/fetchData'
import HorizontalScrollbar from './HorizontalScrollbar';

const SearchExercises = ({bodyPart,setBodyPart,setExercises}) =>{ 
  const [search, setSearch] = useState('')
  
  const [bodyparts, setBodyparts] = useState([])
  
  useEffect(() => {
    
    const fetchBodypartsData = async ()=>{
    const bodyPartsData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList',exerciseOptions)
    setBodyparts(['all',...bodyPartsData])
    
    }
    fetchBodypartsData()
    
  }, [])
  
  
  const handleSearch = async()=>{
    if(search){
      const exercisesData= await fetchData
      ('https://exercisedb.p.rapidapi.com/exercises',exerciseOptions)
      
      const searchedExercised= exercisesData.filter((excerise)=>excerise.name.toLowerCase().includes(search)
      ||excerise.bodyPart.toLowerCase().includes(search)
      ||excerise.equipment.toLowerCase().includes(search)
      ||excerise.target.toLowerCase().includes(search)
      )
      setSearch('')
      setExercises(searchedExercised)          
    }    
  }

  return (
    <Stack alignItems='center'
      mt='37px'
      justifyContent="center"
      p='20px'>
      <Typography fontWeight={700}
      sx={{fontSize:{lg:'44px',xs:'30px'}}}
      mb='50px'
      textAlign='center'>
        Awesome Exercises You <br/> Should Know
      </Typography>
      <Box position='relative' mb="72px">
        <TextField 
          sx={{
            input:{fontWeight:'700',
            border:'none',
            borderRadius:'4px'
          },
          width:{lg:'800px',xs:'350px'},
          backgroundColor:'white'
          , borderRadius:'40px'
          }}
          height='76px'
          value={search}
          onChange={
            (e)=>{setSearch(e.target.value.toLowerCase())}} 
          placeholder="SEARCH EXERCISES"
          type='text'
          />
      <Button className='search-btn'
        sx={{
          bgcolor:'#ff2625',
          color:'white',
          textTransform:'none',
          width:{lg:"175px",xs:"80px"},
          fontSize:{lg:'20px',xs:'14px'},
          height:'56px',
          position:'absolute',
          right:'0'
        }}
        onClick={handleSearch}>
        Search
        </Button>
      </Box>
      <Box sx={{position:'relative',p:'20px',width:'100%'}}>
        <HorizontalScrollbar data={bodyparts}
       bodyPart={bodyPart} isBodyParts
       setBodyPart={setBodyPart} />
      </Box>
    </Stack>
  )
}

export default SearchExercises