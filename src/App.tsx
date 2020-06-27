import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import NavBar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Homework from "./components/Homework/Homework";

function App() {
    return (
        <div className='app-wrapper'>
            <Header/>
            <NavBar/>
            <Profile/>
            <Homework name='Serg' message='How are you?'/>
        </div>
    );
}

export default App;
