import { Routes, Route, Outlet } from 'react-router-dom';
import Landing from './pages/Landing';
import Navbar from './components/ui/navbar';
import Menu from '/menu.webp';
import Reserve from './pages/Reserve';
import Confirm from './pages/Confirm';

export default function App() {
    return (
        <Routes>
            <Route path='/' element={<Main />}>
                <Route index element={<Landing />} />
                <Route path='menu' element={<img src={Menu} />} />
                <Route path='reserve' element={<Reserve />} />
                <Route path='confirm' element={<Confirm />} />
                <Route path='*' element={<></>} />
            </Route>
        </Routes>
    );
};

function Main() {
    return (
        <>
            <Navbar />
            <Outlet />
        </>
    );
}