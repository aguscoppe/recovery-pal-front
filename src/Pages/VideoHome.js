import { useContext } from "react";
import { UserContext } from "../Contexts/UserContext";
import { Grid, Typography, Button } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import Header from "../Components/Header";
import NavBar from "../Components/NavBar";
import CardExercise from "../Components/CardExercise";
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import {ejercicios} from "../ejercicios"

function VideoHome() {
  return (
    <>
      <Header title="Home" icon={<HomeIcon />} />
      <Outlet />
      <NavBar />
    </>
  );
};

export default VideoHome;
