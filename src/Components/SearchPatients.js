import { TextField, Box } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import Fab from '@mui/material/Fab';

function SearchPatients() {
  return (
    <Box display='flex' flexDirection='row'>
      <TextField
        name='searchPatient'
        value={null}
        style={{ width: 300 }}
        label='Ingrese mail del paciente'
        variant='outlined'
        onChange={null}
        sx={null}
      />
      <Fab color='primary' aria-label='search' sx={{ ml: 2 }}>
        <SearchIcon />
      </Fab>
    </Box>
  );
}

export default SearchPatients;
