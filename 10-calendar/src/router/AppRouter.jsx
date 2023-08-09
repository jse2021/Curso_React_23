import {Navigate, Route, Routes} from 'react-router-dom';
import { LoginPage} from "../auth";
import {CalendarPage} from '../calendar/pages/CalendarPage';




const AppRouter = () => {

    const authStatus = 'not-authenticated';
 

    return (
        
        <Routes>
        {
            (authStatus === 'not-authenticated')
            ? <Route path='/auth/*' element={ <LoginPage/>}/>
            : // cualquier ruta que no sea la anterior
            <Route path='/*' element={ <CalendarPage/>}/>
        }
        <Route path='/*' element={ <Navigate to = "/auth/login"></Navigate>}/>
        </Routes>
    );
};

export default AppRouter;