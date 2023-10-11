import {
  AppBar,
  Button,
  Grid,
  Toolbar,

} from "@mui/material";
import { NavLink } from "react-router-dom";
import { LOGIN_ROUTE } from "./utils/consts";
import { useContext } from "react";
import { Context } from "../index";
import {useAuthState} from 'react-firebase-hooks/auth'


const Navbar = () => {
    
  const {auth} = useContext(Context)
  const [user] = useAuthState(auth)//получаем пользователя,параметр - тот объект авторизации который мы прокинули через контекст


  return (
    <AppBar color="secondary" position="static">
      <Toolbar variant={'dense'}>
        <Grid container justifyContent={"flex-end"}>
          {user ? 
          (
            <Button onClick={()=> auth.signOut()} style={{color:'white', border:'1px solid white'}}>Выйти</Button>
          ) : 
          (
            <NavLink to={LOGIN_ROUTE}>
              <Button style={{color:'white', border:'1px solid white'}}>Логин</Button>
            </NavLink>
          )}
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
