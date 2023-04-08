import React from "react";
import "./styles/style.css";
import { BrowserRouter, Route, Routes} from "react-router-dom";
import Pomodoro from "./pages/Pomodoro";
import Information from "./pages/Information";
import Navbar from "./components/UI/navbar/Navbar";

function App() {
  
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route exact path='/' element={<Pomodoro />} />
        <Route path='/about-technique' element={<Information />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
