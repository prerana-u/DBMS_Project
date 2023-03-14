
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from './Components/Register';
import HomePage from './Components/HomePage';
import Navbar from './Components/Navbar';
import Login from './Components/Login';
import SkillForm from './Components/SkillForm';
import TeachDash from './Components/Teacher_Dash';
import Verticalnav from './Components/VerticalNav';
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Navbar />}>
        <Route index element={<HomePage />} />
        <Route path="skillform" element={<SkillForm />} />
        <Route path="register" element={<Register />} />
        <Route path="login" element={<Login />} />
      </Route>
        <Route path="td" element={<TeachDash />} />


   
    </Routes>
  </BrowserRouter>
  );
}

export default App;
