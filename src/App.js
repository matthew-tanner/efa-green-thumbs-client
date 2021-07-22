import React, { useEffect, useState, useRef } from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./Global";
import { theme } from "./Theme";
import "./App.css";
import { useMediaQuery } from "react-responsive";
import Burger from "./Components/Navbar/Burger";
import SideNav from "./Components/Navbar/SideNav";
import Navbar from "./Components/Navbar/Navbar";
import {DeviceSize} from "./Utils/DeviceSize";

function App() {
  const [open, setOpen] = useState(false);
  const [token, setToken] = useState("");

  const node = useRef();

  useEffect(() => {
    if (localStorage.getItem("token")) {
      setToken(localStorage.getItem("token"));
    }
  }, []);

  const updateToken = (newToken) => {
    localStorage.setItem("token", newToken);
    setToken(newToken);
  };

  const clearToken = () => {
    localStorage.clear();
    setToken("");
    //derp
  };

  const isMobile = useMediaQuery({ maxWidth: DeviceSize.mobile });

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <div>
          <GlobalStyles />
        </div>
        <div ref={node}>
          {!isMobile && <Navbar token={token} logout={clearToken} newToken={updateToken} />}
          {isMobile && <Burger open={open} setOpen={setOpen} />}
          {isMobile && (
            <SideNav
              open={open}
              setOpen={setOpen}
              token={token}
              logout={clearToken}
              newToken={updateToken}
            />
          )}
        </div>
      </ThemeProvider>
    </div>
  );
}

export default App;
