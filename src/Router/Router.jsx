import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Home from '../pages/Home/Home';
import LoginComponent from '../pages/auth/Login';
import Statistic from '../pages/statistic/Statistic';
import Game from '../pages/game/Game';
import Quiz from '../pages/quiz/Quiz';
import User from '../pages/user/User';

function AppContent() {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {

    const token = sessionStorage.getItem('token') || localStorage.getItem('token');
    
   
    if (location.pathname === '/' && !token) {
      navigate('/login');
    }
   
    else if (token && location.pathname === '/login') {
      navigate('/');
    }
  }, [navigate, location.pathname]);

  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path="/login" element={<LoginComponent />} />
        <Route path='/statistic' element={<Statistic/>}/>
        <Route path='/game' element={<Game/>}/>
        <Route path='/quiz' element={<Quiz/>}/>
        <Route path='/user' element={<User/>}/>
      </Routes>
      
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;