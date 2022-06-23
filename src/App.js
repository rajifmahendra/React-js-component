import React, {Component} from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import Movies from './components/movies';
import MovieForm from './components/movieForm';
import Rentals from './components/Rentals';
import NotFound from './components/notFound';
import Customers from './components/Customers';
import NavBar from './components/NavBar';
import LoginFrom from './components/LoginForm';
import RegisterForm from './components/RegisterForm';
import Logout from './components/Logout';
import auth from './services/AuthService';
import ProtectedRoute from "./components/Common/ProtectedRoute";

import "react-toastify/dist/ReactToastify";
import './App.css';

class App extends Component {
  state = {};

  componentDidMount() {
    const user = auth.getCurrentUser();
    this.setState({ user });
  } 
  
  render() {
    const {user} = this.state;

    return (
      <>
      <ToastContainer />
        <NavBar user={this.state.user} />
        <main className="container">
          <Switch>
            <Route path="/register" component={RegisterForm} />
            <Route path="/login" component={LoginFrom} />
            <Route path="/logout" component={Logout} />
            <ProtectedRoute path="/movies/:id" component={MovieForm} />
            <Route path="/movies"
              render={props => <Movies { ...props } user={this.state.user} />}>
             </Route>
            <ProtectedRoute path="/customers" component={Customers}></ProtectedRoute>
            <Route path="/rentals" component={Rentals}></Route>
            <Route path="/not-found" component={NotFound}></Route>
            <Redirect from="/" exact to="/movies" />
            <Redirect to="not-found" />
          </Switch>
        </main>
      </>
    );
  }
}

export default App;
