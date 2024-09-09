import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';


import { Navbar } from './Components/Navbar/Navbar';
import { Footer } from './Components/Footer/Footer';
import DroneBooking from './Pages/Drone-Booking/DroneBooking';
import SoilTestReport from './Pages/Soil-Testing/SoilTesting';
import RegistrationForm from './Pages/Registration/RegistrationForm';
import LoginForm from './Pages/Login/LoginUp';
import Dashboard from './Pages/Dashboard/Dashboard';
import Home from './Pages/Home/Home';

function App() {
  return (
    <div>
    <Navbar/>
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/home" element={<Home />} />
       <Route path="/dronebooking" element={<DroneBooking />} />
       <Route path="/soilreport" element={<SoilTestReport/>} />
      <Route path="/registration" element={<RegistrationForm />} />  
      <Route path="/login" element={<LoginForm />} />
      <Route path="/dashboard" element={<Dashboard />} />   
    </Routes>
    <Footer/>
    </div>
  );
}

export default App;
