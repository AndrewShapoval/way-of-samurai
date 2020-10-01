import React from 'react';
import {Route} from 'react-router-dom';
import './App.css';
import NavBar from "./components/Navbar/Navbar";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";

function App() {
    return (
        <div className='app-wrapper'>
            <HeaderContainer/>
            <NavBar/>
            <div className='app-wrapper-content'>
                <Route path='/profile:userId?' render={() => <ProfileContainer/>}/>
                <Route path='/Dialogs' render={() => <DialogsContainer/>}/>
                <Route path='/Users' render={() => <UsersContainer/>}/>
                <Route path='/Login' render={() => <Login/>}/>
                {/*<Route path='/News' render={() => <Profile posts={props.state.profilePage.posts}/>}/>*/}
                {/*<Route path='/Music' render={() => <Profile posts={props.state.profilePage.posts}/>}/>*/}
                {/*<Route path='/Settings' render={() => <Profile posts={props.state.profilePage.posts}/>}/>*/}
            </div>
        </div>
    );
}

export default App;
