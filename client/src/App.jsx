import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
// import { useCookies } from "react-cookie";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Signup from "./components/Signup";
import Login from "./components/Login";
import AddSnippet from "./components/AddSnippet";
import Dashboard from "./components/Dashboard";
import MySnippets from "./components/MySnippets";
import RequireAuth from "./components/RequireAuth";

function App() {
  // const [cookies, setCookie] = useCookies(["user"]);
  // function handleLogin(user) {
  //   setCookie("user", user, { path: "/" });
  //   console.log(cookies);
  // }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/dashboard"
          element={
            <RequireAuth>
              <Dashboard />
            </RequireAuth>
          }
        />
        <Route path="/newsnippet" element={<RequireAuth><AddSnippet /></RequireAuth>} />
        <Route path="/mysnippets" element={<RequireAuth><MySnippets /></RequireAuth>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
