import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar';
import AppRouter from './Components/AppRouter';
import { useContext } from 'react';
import { Context } from './index';
import {useAuthState} from 'react-firebase-hooks/auth'
import Loader from './Components/Loader';

function App() {
  const {auth} = useContext(Context)
  const [user, loading, error] = useAuthState(auth)
  //хук useAuthState возвращает коржет из 3-х элементов

  if(loading) {
    return <Loader/>
  }

  return (
    <BrowserRouter>
     <Navbar/>
     <AppRouter/>
    </BrowserRouter>
  );
}

export default App;
