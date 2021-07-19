import React from "react";
import { Route, Link, Switch } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import styled from "styled-components";
import { bool } from "prop-types";

import Home from "../Home/Home";
import Portal from "../Auth/Portal";
import TripActivities from "../Activities/TripActivities"
import TripActivityIndex from "../Activities/TripActivityIndex"
import TripsIndex from "../Trips/TripsIndex";

const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
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

const SideNav = ({ open, setOpen, token, logout, newToken }) => {
  return (
    <>
      <Router>
        <div>
          <StyledMenu open={open}>
            <Link to="/Home">
              <span aria-label="home" onClick={() => setOpen(!open)}>Home</span>
            </Link>
            <Link to="/Trips">
              <span aria-label="Park Search" onClick={() => setOpen(!open)}>Park Search</span>
            </Link>
            <Link to="/Home">
              <span aria-label="Trip Planner" onClick={() => setOpen(!open)}>Trip Planner</span>
            </Link>
            <Link to="/tripActivityIndex">
              <span aria-label="TMP Trip Activity Index" onClick={() => setOpen(!open)}>TMP Trip Activity Index</span>
            </Link>
            <Link to="/tripActivities">
              <span aria-label="TMP Trip Activities" onClick={() => setOpen(!open)}>TMP Trip Activities</span>
            </Link>
            <Link to="/Portal">
              <span aria-label="Login" onClick={() => setOpen(!open)}>Login</span>
            </Link>
          </StyledMenu>
        </div>
        <div className="nav-route">
          <Switch>
            <Route exact path="/home">
              <Home token={token} open={open} setOpen={setOpen} newToken={newToken} logout={logout} />
            </Route>
            <Route exact path="/trips">
              <TripsIndex token={token} open={open} setOpen={setOpen} newToken={newToken} logout={logout} />
            </Route>
            <Route exact path="/portal">
              <Portal token={token} newToken={newToken} logout={logout} />
            </Route>
{/* ToDo Fix hardcoded TripId and token*/}
            <Route exact path="/tripActivityIndex">
              <TripActivityIndex token={'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiaWF0IjoxNjI2NjU1NjkxLCJleHAiOjE2MjY3NDIwOTF9.GHF8wPUu_O2H6XbYrSgKbHiALEP8z_EY66whJjSC974'} tripId={3}/>
            </Route>
            <Route exact path="/tripActivities">
              <TripActivities token={token} />
            </Route>
            <Route exact path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  );
};

SideNav.propTypes = {
  open: bool.isRequired,
};

export default SideNav;
