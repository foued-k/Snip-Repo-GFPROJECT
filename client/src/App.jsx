import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
// import { Route,Routes } from 'react-router-dom';
// import NavbarMain from "./components/NavbarMain";
import Signup from "./components/Signup";
import Login from "./components/Login";
import NavbarDashboard from './components/NavbarDashboard';
import AddSnippet from './components/AddSnippet';
import Dashboard from './components/Dashboard';
import MySnippets from './components/MySnippets';

function App() {
  return (
    <div>
      {/* <Routes>        
      <Route path="/signup"  element={<Signup/>} />
      <Route path="/login"  element={<Login />}/> */}
      {/* <Route path="/dashboard"  element={<Dashboard/>}/> */}
      {/* <Route path="/snips"  element={<AddSnippet/>}/>
      <Route path="/dashboard"  element={<Dashboard/>}/>
      <Route path="/MySnippets"  element={<MySnippets/>}/> */}
      {/* </Routes> */}
      <NavbarDashboard />
      <Signup />
      <Login />
      <AddSnippet />
      <Dashboard/>
      <MySnippets/>

    </div>
  );
}

export default App;
