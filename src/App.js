
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
import AuthProvider from './Context/AuthProvider';
import AddFood from "./Pages/Dashboard/AddProduct/AddFood";
import UpdateFood from "./Pages/Dashboard/AddProduct/UpdateFood";
import AddStudents from "./Pages/Dashboard/AddStudents/AddStudents";
import UpdateStudents from "./Pages/Dashboard/AddStudents/UpdateStudents";
import Dashboard from './Pages/Dashboard/Dashboard';
import ServeFood from "./Pages/Dashboard/ServeFood/ServeFood";
import Footer from "./Pages/Footer/Footer";
import Home from './Pages/Home/Home';
import AfterResetPass from "./Pages/Login/ForgatePass/AfterResetPass";
import ForgatePass from "./Pages/Login/ForgatePass/ForgatePass";
import Login from "./Pages/Login/Login";
import Navbar from "./Pages/Navbar/Navbar";
import NotFound from "./Pages/NotFound/NotFound";
import PrivateRoute from "./Pages/PrivateRoute/PrivateRoute";
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
            <PrivateRoute path="/serveFood">
              <ServeFood></ServeFood>
            </PrivateRoute>
            <PrivateRoute exact path="/addStudent">
              <AddStudents></AddStudents>
            </PrivateRoute>
            <PrivateRoute exact path="/addStudent/updateStudent/:id">
              <UpdateStudents></UpdateStudents>
            </PrivateRoute>
            <PrivateRoute exact path="/addFood">
              <AddFood></AddFood>
            </PrivateRoute>
            <PrivateRoute exact path="/addFood/updateFood/:id">
              <UpdateFood></UpdateFood>
            </PrivateRoute>
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
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>


    </div>
  );
}

export default App;
