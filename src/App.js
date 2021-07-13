import React, { useEffect } from "react";
import { useState } from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./Global";
import { theme } from "./Theme";
import "./App.css";

<<<<<<< HEAD
import Burger from './Components/Navbar/Burger'
import SideNav from './Components/Navbar/SideNav'


const { Header, Footer, Sider, Content } = Layout
=======
import Burger from "./Components/Navbar/Burger";
import SideNav from "./Components/Navbar/SideNav";
>>>>>>> 0caf661917de41538f6357d69f6599f86cd7adab

function App() {
  const [open, setOpen] = useState(false);
  const [token, setToken] = useState("");

  useEffect(() => {
    if(localStorage.getItem("token")){
      setToken(localStorage.getItem("token"))
    }
  }, [])

  const updateToken = (newToken) => {
    localStorage.setItem("token", newToken);
    setToken(newToken);
  }

  const clearToken = () => {
    localStorage.clear();
    setToken("");
  }

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <div>
          <GlobalStyles />
        </div>
        <div>
          <Burger open={open} setOpen={setOpen} />
          <SideNav open={open} setOpen={setOpen} token={token} logout={clearToken} newToken={updateToken} />
        </div>
      </ThemeProvider>
    </div>
  );
}

export default App;
