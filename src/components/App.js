import './App.scss';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Navbar from './Navbar/Navbar.jsx';
import Registration from './Registration/Registration.jsx'
import Login from './Login/Login.jsx';
import HomePage from '../components/MealPost/MealPost.jsx';
import jwtDecode from 'jwt-decode'
import Logout from './logout/Logout.jsx'
import { useState, useEffect } from 'react';
import axios from 'axios';

export default function App() {

  const [user, setUser] = useState({})
  const [userLogin, setUserLogin] = useState([])
  const [jwt, setJwt] = useState()
  const [loadData, setLoadData] = useState(false)

  //Getting token from local storage
  const getUserJWT = () => {
      const jwt = localStorage.getItem('token');
      try {
        const user = jwtDecode(jwt);
        setUser(user)
        console.log("get user jwt call", user)
      } catch {
      }
    }
  
    useEffect(() =>{
      getUserJWT();
      getUserLogin();
      setLoadData(!loadData)   
    },[])

    const getUserLogin = async () => {
      const response = await axios.get('', { headers: {Authorization: 'Bearer http://127.0.0.1:8000/api/auth/login/' + jwt}});
      setUserLogin(response.data);
      console.log(response.data)
    }

    const loginUser = async (loginUser) => {
      let response= await axios.post('http://127.0.0.1:8000/api/auth/login/', loginUser);
      localStorage.setItem('token', response.data.token);
      console.log("response axios call", response.data.token)
      setJwt(localStorage.getItem('token'));
    }


  return (
    <div>
          {/* Header outside of the routes because of this verison of react dom */}
          <Navbar/>
          <div className='sections'>
          <BrowserRouter>
              <Routes>
                    {/* Login Route */}
                    <Route path="/" element={<Login loginUserCall={loginUser}/>} />
                    {/* HomePage Route */}
                    <Route path="/home" element={<HomePage user={user}/>} />      
                    {/* Regristration page */}
                    <Route path="/registration" element={<Registration/>} />
                    {/* Logout */}
                    <Route path='/logout' element={<Logout/>}/>
              </Routes>
          </BrowserRouter>
            </div>
            </div>
  );
}

