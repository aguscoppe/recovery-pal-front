
import OutlinedInput from '@mui/material/OutlinedInput';
import {TextField} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import Fab from '@mui/material/Fab';






function SearchExercise () {


    return(<>
        <TextField
          name='searchExercise'
          value={null}
          style = {{width: 300}}
          label='Ingrese nombre de ejercicio'
          variant='outlined'
          onChange={null}
          sx={null}
        />
        <Fab
                  color='primary'
                  aria-label='search'
                  sx= {{ ml : 2}}
                >
                  <SearchIcon />
                </Fab>
                </>
    )



}

export default SearchExercise