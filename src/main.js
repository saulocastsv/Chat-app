
import Login from './Routes/Login';
import ErrorPage from './Routes/ErrorPage';
import Chats from './Routes/Chats';
import Cpainel from './Routes/cpainel';
import Admin from './Routes/admin';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function Main() {
    return (
  
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="*" element={<ErrorPage />} />
          <Route path="/Chats" element={<Chats />} />
          <Route path="/Cpainel" element={<Cpainel />} />
          <Route path="/Admin" element={<Admin />} />
        </Routes>
      </BrowserRouter>
)};

export default Main;
