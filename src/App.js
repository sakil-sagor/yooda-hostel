
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
import AuthProvider from './Context/AuthProvider';
import Dashboard from './Pages/Dashboard/Dashboard';
import Home from './Pages/Home/Home';
import AfterResetPass from "./Pages/Login/ForgatePass/AfterResetPass";
import ForgatePass from "./Pages/Login/ForgatePass/ForgatePass";
import Login from "./Pages/Login/Login";
import Navbar from "./Pages/Navbar/Navbar";
import Register from "./Pages/Register/Register";

function App() {
  return (
    <div className="App">

      <AuthProvider>
        <Router>
          <Navbar></Navbar>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route exact path="/home">
              <Home></Home>
            </Route>
            <Route path="/dashboard">
              <Dashboard></Dashboard>
            </Route>
            <Route exact path="/login">
              <Login></Login>
            </Route>
            <Route exact path="/register">
              <Register></Register>
            </Route>
            <Route exact path="/forgatePass">
              <ForgatePass></ForgatePass>
            </Route>
            <Route exact path="/afterResetPass">
              <AfterResetPass></AfterResetPass>
            </Route>
          </Switch>
        </Router>
      </AuthProvider>


    </div>
  );
}

export default App;
