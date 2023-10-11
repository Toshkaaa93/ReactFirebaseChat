import { Box, Button, Container, Grid } from "@mui/material";
import { useContext } from "react";
import { Context } from "../index";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";


const Login = () => {
const {auth} = useContext(Context)

const login = async () => {
 const provider = new firebase.auth.GoogleAuthProvider() //получаем провайдер авторизации
 const {user} = await auth.signInWithPopup(provider)//получаем пользователя после авторизации
 console.log(user)
}

  return (
    <Container>
      <Grid
        container
        style={{ height: window.innerHeight - 50 }}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <Grid
          style={{ width: 400, background: "lightgray" }}
          container
          alignItems={"center"}
          direction={"column"}
          borderRadius={'15px'}
        >
          <Box p={5}>
            <h3 style={{textAlign:'center'}}>Авторизация</h3>
            <Button onClick={login} style={{color:'black', border:'1px solid black'}}>Войти с помощью Google</Button>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Login;
