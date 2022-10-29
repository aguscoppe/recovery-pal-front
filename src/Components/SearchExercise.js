
import OutlinedInput from '@mui/material/OutlinedInput';
import {TextField} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import Fab from '@mui/material/Fab';
import { useState, useEffect } from 'react';





function SearchExercise (props) {
  const [exerciseBuscado, setExerciseBuscado] = useState(null)

  function buscar() {
    console.log("arranca el search")
    props.setExercisesFiltrados(props.exercises.filter((e) => e.videoTitle.toLowerCase().includes(exerciseBuscado.toLowerCase())))
    console.log("Termina filtrado")
    console.log(props.exercises.filter((e) => e.videoTitle.toLowerCase().includes(exerciseBuscado.toLowerCase())))
  }



    return(<>
        <TextField
          name='searchExercise'
          value={exerciseBuscado}
          style = {{width: 300}}
          label='Ingrese nombre de ejercicio'
          variant='outlined'
          onChange={(e)  => setExerciseBuscado(e.target.value)}
          sx={null}
        />
        <Fab
                  color='primary'
                  aria-label='search'
                  sx= {{ ml : 2}}
                  onClick= {buscar}
                >
                  <SearchIcon />
                </Fab>
                </>
    )



}

export default SearchExercise