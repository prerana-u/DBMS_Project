import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from './Components/Register';
import HomePage from './Components/HomePage';
import Navbar from './Components/Navbar';
import Login from './Components/Login';
import SkillForm from './Components/SkillForm';
import SearchBar from './Components/SearchBar';
import TeachDash from './Components/Teacher_Dash';
import StudentDash from './Components/Student_Dash';

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
        <Route path="studentdash" element={<StudentDash />} />
        <Route path="search" element={<SearchBar />} />
       

    </Routes>
 
  </BrowserRouter>
  );
}

export default App;
