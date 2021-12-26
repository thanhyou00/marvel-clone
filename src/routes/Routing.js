import { Route, Routes } from 'react-router-dom';
import Comics from '../components/Comics/Comics'
import Home from '../components/Home/Home';
import Contact from '../components/Contact/Contact';
import DetailsCard from '../components/DetailsCard/DetailsCard';

function Routing() {
    return (
        <div>
            <Routes>
                <Route path='/' element={<Home />}></Route>
                <Route path='/comics' element={<Comics />}></Route>
                <Route path='/contact' element={<Contact />}></Route>
                <Route path='/spiderman' element={<DetailsCard />}></Route>
            </Routes>
        </div>
    )
}

export default Routing