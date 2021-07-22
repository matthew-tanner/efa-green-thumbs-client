import React from "react";
import { Route, Link, Switch } from "react-router-dom";
// import { BrowserRouter as Router } from "react-router-dom";
import styled from "styled-components";
import { bool } from "prop-types";

import Home from "../Home/Home";
import Portal from "../Auth/Portal";
import TripsDisplay from "../Trips/TripsDisplay";
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
      {/* <Router> */}
        <div>
          <StyledMenu open={open}>
            <Link to="/Home">
              <span aria-label="home" onClick={() => setOpen(!open)}>Home</span>
            </Link>
            <Link to="/Trips">
              <span aria-label="Park Search" onClick={() => setOpen(!open)}>Park Search</span>
            </Link>
            <Link to="/viewTrips">
              <span aria-label="View Trips" onClick={() => setOpen(!open)}>View Trips</span>
            </Link>
{/* ToDo: Remove this link once it's accessible from TripsDisplay */}
            <Link to="/tripActivityIndex">
              <span aria-label="Trip Activities" onClick={() => setOpen(!open)}>Trip Activities</span>
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
            <Route exact path="/viewTrips">
              <TripsDisplay token={token} />

            </Route>
{/* ToDo: Remove this Route once it's accessible from TripsDisplay */}
            <Route exact path="/tripActivityIndex">
              <TripActivityIndex token={token} tripId={2} />
            </Route>
            <Route exact path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      {/* </Router> */}
    </>
  );
};

SideNav.propTypes = {
  open: bool.isRequired,
};

export default SideNav;