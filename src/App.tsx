import {FC} from 'react';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'

import {Home} from './components/Routes/Home/home';
import {Login} from './components/Routes/Login/login';
import {Posts} from './components/Routes/Posts/posts';
import {Cockpit} from './components/Routes/Cockpit/Cockpit';

export const App: FC = () => {
    return (
        <BrowserRouter>
            <img src={'${process.env.PUBLIC_URL}/img/logo.png'} alt=""/>
            <div>
                <>{console.log('test')}</>
                <Link to="/">Home</Link>
                <Link to='posts'>Posts</Link>
                <Link to='login'>Login</Link>
                <Link to='cockpit'>Cockpit</Link>
            </div>
            <Routes>
                <Route index element={<Home/>}></Route>
                <Route path="posts" element={<Posts />}></Route>
                <Route path="login" element={<Login />}></Route>
                <Route path="cockpit" element={<Cockpit />}></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App;
