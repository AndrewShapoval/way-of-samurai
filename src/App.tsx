import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import './App.css';
import Header from "./components/Header/Header";
import NavBar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import DialogsContainer from "./components/Dialogs/Dialogs.Container";

type PropsType = {
    store: any
}

function App(props: PropsType) {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <NavBar/>
                <div className='app-wrapper-content'>
                    <Route path='/Profile' render={() => <Profile store={props.store}/>}/>
                    <Route path='/Dialogs' render={() => <DialogsContainer store={props.store}
                    />}/>
                    {/*<Route path='/News' render={() => <Profile posts={props.state.profilePage.posts}/>}/>*/}
                    {/*<Route path='/Music' render={() => <Profile posts={props.state.profilePage.posts}/>}/>*/}
                    {/*<Route path='/Settings' render={() => <Profile posts={props.state.profilePage.posts}/>}/>*/}
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
