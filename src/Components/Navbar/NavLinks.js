import React from "react";
import styled from "styled-components";
import { Route, Link, Switch } from "react-router-dom";

import Home from "../Home/Home";
import Portal from "../Auth/Portal";
import TripsIndex from "../Trips/TripsIndex";
import TripsDisplay from "../Trips/TripsDisplay";
import TripsDisplayDesktop from "../Trips/TripsDisplayDesktop";
import TripActivityIndex from "../Activities/TripActivityIndex";

const NavLinksContainer = styled.div`
    height: 100%;
    display: flex;
    align-items: center;
    position: absolute;
`;

const LinksWrapper = styled.ul`
    margin: 0;
    padding: 0;
    display: flex;
    height: 100%;
`;

const LinkItem = styled.li`
    height: 100%;
    padding: 0 1.1em;
    color: white;
    font-family: "Varela Round", sans-serif;
    font-weight: 500;
    font-size: 20px;
    align-items: center;
    justify-content: center;
    list-style-type: none;
    display: flex;
    border-top: 2px solid transparent;
    transition: all 300ms ease-in-out;

    &:hover {
        border-top: 2px solid #fb743e;
    }
`;

const Link1 = styled.a`
    text-decoration: none;
    color: inherit;
    font-size: inherit;

    &:hover {
        color: #fb743e;
    }
`;

const NavLinks = ({ token, logout, newToken, open, setOpen }) => {
    return (
        <>
        <NavLinksContainer>
            <LinksWrapper>
            <LinkItem>
                <Link to="/" className="link1">
                <Link1>Home</Link1>
                </Link>
            </LinkItem>
            <LinkItem>
                <Link to="/Trips" className="link1">
                <Link1>Park Search</Link1>
                </Link>
            </LinkItem>
            {token ? 
            <>
            <LinkItem>
                <Link to="/viewTrips" className="link1">
                <Link1>View Trips</Link1>
                </Link>
            </LinkItem>
            </>
            :
            <>
            </>
        }
            </LinksWrapper>
        </NavLinksContainer>
        <div className="nav-route">
            <Switch>
            <Route exact path="/">
                <Home token={token} newToken={newToken} logout={logout} />
            </Route>
            <Route exact path="/portal">
                <Portal token={token} newToken={newToken} logout={logout} />
            </Route>
            <Route exact path="/trips">
                <TripsIndex
                token={token}
                open={open}
                setOpen={setOpen}
                newToken={newToken}
                logout={logout}
                />
            </Route>
            <Route exact path="/viewTrips">
                <TripsDisplayDesktop
                token={token}
                open={open}
                setOpen={setOpen}
                newToken={newToken}
                logout={logout}
                />
            </Route>
            <Route exact path="/tripActivityIndex">
                <TripActivityIndex token={token} tripId={2} />
            </Route>
            </Switch>
        </div>
        </>
    );
};

export default NavLinks;
