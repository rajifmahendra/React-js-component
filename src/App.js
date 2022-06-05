import { Route, Redirect, Switch } from 'react-router-dom';
import Movies from './components/movies';
import MovieForm from './components/movieForm';
import Rentals from './components/Rentals';
import NotFound from './components/notFound';
import Customers from './components/Customers';
import NavBar from './components/NavBar';
import './App.css';

function App() {
  return (
    <>
      <NavBar />
      <main className="container">
        <Switch>
          <Route path="/movies/:id" component={MovieForm} />
          <Route path="/movies" component={Movies}></Route>
          <Route path="/customers" component={Customers}></Route>
          <Route path="/rentals" component={Rentals}></Route>
          <Route path="/not-found" component={NotFound}></Route>
          <Redirect from="/" exact to="/movies" />
          <Redirect to="not-found" />
        </Switch>
      </main>
    </>
  );
}

export default App;
