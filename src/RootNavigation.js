import {BrowserRouter, Routes, Route} from 'react-router-dom';

import App from './App';
import Login from './pages/Login';
import Register from './pages/Register';


function RootNavigation(){

    return(
        <BrowserRouter>

            <Routes>
                <Route path='/' element={<App />} />
                <Route path='/login' element={<Login />} />
                <Route path='/register' element={<Register />} />                    
            </Routes>
        
        </BrowserRouter>
    )
}

export default RootNavigation;