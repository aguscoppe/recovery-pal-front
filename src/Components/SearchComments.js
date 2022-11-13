import { TextField, Box } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import Fab from '@mui/material/Fab';
import { useContext, useState, useEffect } from 'react';

function SearchComments(props) {

  const [patientFilter, setPatientFilter] = useState(null)

  function onChange(e) {
    setPatientFilter(e.target.value)
    if (e.target.value === "") {
      props.setCommentsFiltered(props.comments)
    }
  }

  function buscarComments() {
    props.setCommentsFiltered(
      props.comments.filter((e) =>
        `${e.name}`.toLowerCase().normalize('NFD')
        .replace(/([aeio])\u0301|(u)[\u0301\u0308]/gi,"$1$2")
        .normalize().includes(patientFilter.toLowerCase())
      )
    );
    
  }

  useEffect(() => {
    props.setCommentsFiltered(props.comments)

  }, [])

  return (
    <Box display='flex' flexDirection='row'>
      <TextField
        name='searchPatient'
        value={null}
        style={{ width: 300 }}
        label='Nombre del paciente'
        variant='outlined'
        onChange={onChange}
        sx={null}
      />
      <Fab color='primary' aria-label='search' sx={{ ml: 2 }} onClick={buscarComments}>
        <SearchIcon />
      </Fab>
    </Box>
  );
}

export default SearchComments;
