import React from "react";
import { useState } from "react";
import { Carousel, Row, Col, Card, Layout } from "antd";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./Global";
import { theme } from "./Theme";
import "./App.css";

import Burger from './Components/Navbar/Burger'
import SideNav from './Components/Navbar/SideNav'


const { Header, Footer, Sider, Content } = Layout

function App() {
  const [open, setOpen] = useState(false)

  const contentStyle = {
    height: "400px",
    color: "#fff",
    lineHeight: "400px",
    fontSize: "30px",
    textAlign: "center",
    background: "#9fb8ad",
  };

  // const key = 'EsB6ufQhwYntOPZBgIhu6Jtf3jfbXjrAEvf8ZGEl'
  // const baseUrl = 'https://developer.nps.gov/api/v1/events?'

  // const parkFetch = () => {
  //   fetch ('https://developer.nps.gov/api/v1/events?stateCode=ME&api_key=EsB6ufQhwYntOPZBgIhu6Jtf3jfbXjrAEvf8ZGEl')
  //   .then (res => res.json())
  //   .then (data => console.log(data))
  // }
  // parkFetch()

  // const parkToDoFetch = () => {
  //   fetch ('https://developer.nps.gov/api/v1/thingstodo?stateCode=ME&api_key=EsB6ufQhwYntOPZBgIhu6Jtf3jfbXjrAEvf8ZGEl')
  //   .then (res => res.json())
  //   .then (data2 => console.log(data2))
  // }
  // parkToDoFetch()


  return (
    <div className="App">
    <ThemeProvider theme={theme}>
        <div>
          <GlobalStyles />
        </div>
        <div>
          <Burger open={open} setOpen={setOpen} />
          <SideNav open={open} setOpen={setOpen} />
        </div>
        
      
    </ThemeProvider>
    </div>
  );
}

export default App;
