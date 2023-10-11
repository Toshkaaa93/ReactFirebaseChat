import { Route, Routes, Navigate } from "react-router-dom";
import { privateRoutes, publicRoutes } from "./Routes";
import { CHAT_ROUTE, LOGIN_ROUTE } from "./utils/consts";
import { useContext } from "react";
import { Context } from "../index";
import {useAuthState} from 'react-firebase-hooks/auth'

//компонент с навигацией в котором описаны все маршруты
const AppRouter = () => {

const {auth} = useContext(Context)
const [user] = useAuthState(auth)//получаем пользователя,параметр - тот объект авторизации который мы прокинули через контекст
console.log(user)

  return user ? (
    <Routes>
        {privateRoutes.map(({path, Component}) => (
            <Route key={path} path={path} element={<Component />} />
        ))}
        <Route path='*' element={<Navigate to={CHAT_ROUTE} replace />} />
    </Routes>
) : (
    <Routes>
        {publicRoutes.map(({path, Component}) => (
            <Route key={path} path={path} element={<Component />} />
        ))}
        <Route path='*' element={<Navigate to={LOGIN_ROUTE} replace />} />
    </Routes>
)
};

export default AppRouter;
