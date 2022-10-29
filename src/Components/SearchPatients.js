import { TextField, Box } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import Fab from '@mui/material/Fab';
import { useContext, useState, useEffect } from 'react';

function SearchPatients(props) {

  const [patientFilter, setPatientFilter] = useState(null)

  function buscarPatients() {
    props.setPatientsFiltered(
      props.patients.filter((e) =>
        `${e.name} ${e.lastName}`.toLowerCase().includes(patientFilter.toLowerCase())
      )
    );
    
  }

  useEffect(() => {
    props.setPatientsFiltered(props.patients)

  }, [])

  return (
    <Box display='flex' flexDirection='row'>
      <TextField
        name='searchPatient'
        value={null}
        style={{ width: 300 }}
        label='Ingrese mail del paciente'
        variant='outlined'
        onChange={(e) => setPatientFilter(e.target.value)}
        sx={null}
      />
      <Fab color='primary' aria-label='search' sx={{ ml: 2 }} onClick={buscarPatients}>
        <SearchIcon />
      </Fab>
    </Box>
  );
}

export default SearchPatients;
