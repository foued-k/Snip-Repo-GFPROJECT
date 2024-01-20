import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import { useCookies } from "react-cookie";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Signup from "./components/Signup";
import Login from "./components/Login";
import AddSnippet from './components/AddSnippet';
import Dashboard from './components/Dashboard';
import MySnippets from './components/MySnippets';

function App() {
  const [cookies, setCookie] = useCookies(["user"]);
  function handleLogin(user) {
    setCookie("user", user, { path: "/" });
    console.log(cookies);
  }

  function login(user) {
    axios.post("http://localhost:3020/login", {
      username: username,
      password: password,
    }).then(({ data }) => {
      console.log(data);
      if (data) {
        console.log("Signed in")
        //redirect the user to the dashboard
        navigate("/dashboard");
      } else {
        console.log("Sign in failed")
        // setError(data.msg);
      }
    })
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/newsnippet" element={<AddSnippet />} />
        <Route path="/MySnippets" element={<MySnippets />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
