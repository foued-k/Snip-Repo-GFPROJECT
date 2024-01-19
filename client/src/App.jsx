import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
// import { Route,Routes } from 'react-router-dom';
// import NavbarMain from "./components/NavbarMain";
import Signup from "./components/Signup";
import Login from "./components/Login";
import NavbarDashboard from './components/NavbarDashboard';
import AddSnippet from './components/AddSnippet';

function App() {
  return (
    <div>
      {/* <Routes>        
      <Route path="/"  element={<Signup/>} />
      <Route path="/login"  element={<Login />}/> */}
      {/* <Route path="/dashboard"  element={<Dashboard/>}/> */}
      {/* <Route path="/profile"  element={<Profile/>}/>
      <Route path="/fitness"  element={<Fitness/>}/>
      <Route path="/weight"  element={<Weight/>}/> */}
      {/* </Routes> */}
      <NavbarDashboard />
      <Signup />
      <Login />
      <AddSnippet />

    </div>
  );
}

export default App;
