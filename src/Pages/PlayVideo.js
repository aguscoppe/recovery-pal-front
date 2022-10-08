import { useContext } from "react";
import { UserContext } from "../Contexts/UserContext";
import { Grid, Typography } from "@mui/material";
import NavBar from "../Components/NavBar";
import Header from "../Components/Header";
import SmsIcon from "@mui/icons-material/Sms";
import { ArrowBack } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import {ejercicios} from "../ejercicios"
import CardExercise from "../Components/CardExercise";


export const PlayVideo = () => {
  const currentUser = useContext(UserContext);
  const navigate = useNavigate();

  return (
    <>
      <Header title="Testing1" icon={<ArrowBack />} />
      <Grid container justifyContent="center" sx={{ padding: "10vh 0" }}>
        <Grid item xs={11} md={6}>
          {ejercicios.map((ejercicio) => {
            return (
              <div
                onClick={() => {navigate("/home/${ejercicios.title}");}}>
                <Grid item xs={11} md={12} xl={11} lg={11}>
                  <CardExercise ejercicio={ejercicio} />
                </Grid>{" "}
              </div>
            );
          })}
        </Grid>
      </Grid>
      <NavBar />
    </>
  );
};

export default PlayVideo;
