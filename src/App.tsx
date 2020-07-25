import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import './App.css';
import Header from "./components/Header/Header";
import NavBar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {RootStateType} from "./redux/state";

type PropsType = {
    state: RootStateType
    addPost: (postMessage: string) => void
    addMessage: (Message: string) => void
    updateNewPostText: (newText: string) => void
    updateNewMessage: (newMessage: string) => void
}

function App(props: PropsType) {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <NavBar/>
                <div className='app-wrapper-content'>
                    <Route path='/Profile' render={() => <Profile profilePage={props.state.profilePage}
                                                                  updateNewPostText={props.updateNewPostText}
                                                                  addPost={props.addPost}/>}/>
                    <Route path='/Dialogs' render={() => <Dialogs dialogs={props.state.dialogsPage.dialogs}
                                                                  messages={props.state.dialogsPage.messages}
                                                                  addMessage={props.addMessage}
                                                                  newMessageText={props.state.dialogsPage.newMessageText}
                                                                  updateNewMessage={props.updateNewMessage}/>}/>
                    {/*<Route path='/News' render={() => <Profile posts={props.state.profilePage.posts}/>}/>*/}
                    {/*<Route path='/Music' render={() => <Profile posts={props.state.profilePage.posts}/>}/>*/}
                    {/*<Route path='/Settings' render={() => <Profile posts={props.state.profilePage.posts}/>}/>*/}
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
