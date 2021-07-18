import React, { useEffect, useState, useRef } from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./Global";
import { theme } from "./Theme";
import "./App.css";




import { useOnClickOutside } from "./utils/hooks";
import Burger from "./Components/Navbar/Burger";
import SideNav from "./Components/Navbar/SideNav";

function App() {
  const [open, setOpen] = useState(false);
  const [token, setToken] = useState("");

  const node = useRef();
  useOnClickOutside(node, () => setOpen(false))

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
        <div ref={node}>
          <Burger open={open} setOpen={setOpen} />
          <SideNav open={open} setOpen={setOpen} token={token} logout={clearToken} newToken={updateToken} />
        </div>
      </ThemeProvider>
    </div>
  );
}

export default App;
