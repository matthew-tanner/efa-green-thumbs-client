import React from "react";
import { Route, Link, Switch } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import styled from "styled-components";
import { bool } from "prop-types";

<<<<<<< HEAD
import Home from '../Home/Home'
import Portal from '../Auth/Portal'
import Activities from '../Activities/Activities'
=======
import Home from "../Home/Home";
import Portal from "../Auth/Portal";
>>>>>>> 0caf661917de41538f6357d69f6599f86cd7adab

const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  z-index: 1;
  background: ${({ theme }) => theme.primaryLight};
  height: 100vh;
  text-align: left;
  padding: 2rem;
  position: absolute;
  top: 0;
  left: 0;
  transition: transform 0.3s ease-in-out;
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(-100%)")};
  z-index: 1;

  @media (max-width: 768px) {
    width: 100%;
  }

  a {
    font-size: 2rem;
    text-transform: uppercase;
    padding: 2rem 0;
    font-weight: bold;
    letter-spacing: 0.5rem;
    color: ${({ theme }) => theme.primaryDark};
    text-decoration: none;
    transition: color 0.3s linear;

    @media (max-width: 768px) {
      font-size: 1.5rem;
      text-align: center;
    }

    &:hover {
      color: ${({ theme }) => theme.primaryHover};
    }
  }
`;

const SideNav = ({ open, token, logout, newToken }) => {
  return (
    <>
<<<<<<< HEAD
    <Router>
    <div>
    <StyledMenu open={open}>
      <Link to='/Home'>
        <span aria-label='home'>Home</span>
      </Link>
      <Link to='/Activities'>
      <span aria-label='Park Search'>Park Search</span>
      </Link>
      <Link to='/Home'>
      <span aria-label='Trip Planner'>Trip Planner</span>
      </Link>
      <Link to='/Portal'>
      <span aria-label='Login'>Login</span>
      </Link>
    </StyledMenu>
    </div>
    <div className='nav-route'>
      <Switch>
          <Route exact path='/home'><Home /></Route>
          <Route exact path='/activities'><Activities /></Route>
          <Route exact path='/portal'><Portal /></Route>
      </Switch>
    </div>
    </Router>
=======
      <Router>
        <div>
          <StyledMenu open={open}>
            <Link to="/Home">
              <span aria-label="home">Home</span>
            </Link>
            <Link to="/Home">
              <span aria-label="Park Search">Park Search</span>
            </Link>
            <Link to="/Home">
              <span aria-label="Trip Planner">Trip Planner</span>
            </Link>
            <Link to="/Portal">
              <span aria-label="Login">Login</span>
            </Link>
          </StyledMenu>
        </div>
        <div className="nav-route">
          <Switch>
            <Route exact path="/home">
              <Home token={token} newToken={newToken} logout={logout} />
            </Route>
            <Route exact path="/portal">
              <Portal token={token} newToken={newToken} logout={logout} />
            </Route>
            <Route exact path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
>>>>>>> 0caf661917de41538f6357d69f6599f86cd7adab
    </>
  );
};

SideNav.propTypes = {
  open: bool.isRequired,
};

export default SideNav;
