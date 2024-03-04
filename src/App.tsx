import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import './App.css';
// Pages Import
import {Main} from './pages/main/main'
import {Login} from './pages/login'
import { CreatePost } from './pages/create-post/create-post';
import { Profile } from './pages/profile/profile';
import {NavBar} from './components/navbar'



function App() {
  return (
    <div className="App">
      
      <Router>
        <NavBar/>
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/login' element={<Login />} />
          <Route path='/createpost' element={<CreatePost />} />
          <Route path='/profile' element={<Profile />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
