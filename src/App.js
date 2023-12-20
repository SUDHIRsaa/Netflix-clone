import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import Navbar from './Components/Navbar';
import { AuthContextProvider } from './Context/Authcontext';
import Login from './Pages/Login';
import Signup from './Pages/signup';
import Account from './Pages/Account';
function App() {
  return (
   <>
   <AuthContextProvider>
   <Navbar /> 
   <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/login" element={<Login/>} />
    <Route path="/signup" element={<Signup/>} />
    <Route path="/Account" element={<Account/>} />
   
   </Routes>
   </AuthContextProvider>
   </>
  );
}

export default App;
