import React from 'react';
import {Route} from 'react-router-dom';
import './App.css';
import NavBar from "./components/Navbar/Navbar";
import UsersContainer from "./components/Users/UsersContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import {connect} from "react-redux";
import {AppStateType} from "./redux/redux-store";
import {compose} from "redux";
import {withRouter} from "react-router-dom";
import {initializeApp} from "./redux/appReducer";
import {Preloader} from "./components/common/Preloader/Preloader";
import {WithSuspense} from "./hoc/WithSuspense";
// import ProfileContainer from "./components/Profile/ProfileContainer";
// import DialogsContainer from "./components/Dialogs/DialogsContainer";

const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'))
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'))

type MapDispatchPropsType = {
    initializeApp: () => void
}

type MapStateToPropsType = {
    initialized: boolean
}

class App extends React.Component<MapDispatchPropsType & MapStateToPropsType> {
    componentDidMount(): void {
        this.props.initializeApp()
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        }
        return (
            <div className='app-wrapper'>
                <HeaderContainer/>
                <NavBar/>
                <div className='app-wrapper-content'>
                    <Route path='/profile:userId?' render={WithSuspense(ProfileContainer)}/>
                    <Route path='/Dialogs' render={WithSuspense(DialogsContainer)}/>
                    <Route path='/Users' render={() => <UsersContainer/>}/>
                    <Route path='/Login' render={() => <Login/>}/>
                    {/*<Route path='/News' render={() => <Profile posts={props.state.profilePage.posts}/>}/>*/}
                    {/*<Route path='/Music' render={() => <Profile posts={props.state.profilePage.posts}/>}/>*/}
                    {/*<Route path='/Settings' render={() => <Profile posts={props.state.profilePage.posts}/>}/>*/}
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => ({
    initialized: state.app.initialized
})

export default compose(
    // withRouter,
    connect<MapStateToPropsType, MapDispatchPropsType, {}, AppStateType>(mapStateToProps, {
        initializeApp
    }))(App)
