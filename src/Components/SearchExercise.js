import { TextField, Fab, Grid } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";

function SearchExercise(props) {
  const [exerciseBuscado, setExerciseBuscado] = useState(null);

  function buscar() {
    console.log("arranca el search");
    props.setExercisesFiltrados(
      props.exercises.filter((e) =>
        e.videoTitle.toLowerCase().includes(exerciseBuscado.toLowerCase())
      )
    );
    console.log("Termina filtrado");
    console.log(
      props.exercises.filter((e) =>
        e.videoTitle.toLowerCase().includes(exerciseBuscado.toLowerCase())
      )
    );
  }

  return (
    <>
    <Grid container justifyContent="center" marginBottom={4}>
      <TextField
        name="searchExercise"
        value={exerciseBuscado}
        style={{ width: 300 }}
        label="Ingrese nombre de ejercicio"
        variant="outlined"
        onChange={(e) => setExerciseBuscado(e.target.value)}
        sx={null}
      />
      <Fab color="primary" aria-label="search" sx={{ ml: 2 }} onClick={buscar}>
        <SearchIcon />
      </Fab>
      </Grid>
    </>
  );
}

export default SearchExercise;
