import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer"; 
import Home from "./pages/Home";
import Stay_Safe from "./pages/Stay_Safe";
import Stories from "./pages/Stories";
import Help from "./pages/Help";
import Login from "./pages/Log_in";
import Signup from "./pages/Sign_up";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50 flex flex-col justify-between">
        <Navbar />
        
        <div className="flex-grow">
          <Routes>
  <Route path="/" element={<Home />} />
  <Route path="/stay_safe" element={<Stay_Safe />} />
  <Route path="/stories" element={<Stories />} />
  <Route path="/help" element={<Help />} />
  <Route path="/log_in" element={<Login />} />
  <Route path="/sign_up" element={<Signup />} />
</Routes>
        </div>

        <Footer /> 
      </div>
    </Router>
  );
}

export default App;
