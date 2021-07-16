import React from 'react'
import styled from 'styled-components'
// import { Route, Link, Switch } from "react-router-dom";
// import { BrowserRouter as Router } from "react-router-dom";
import { bool } from 'prop-types'

import Home from '../Home/Home';
import Portal from '../Auth/Portal';

const NavLinksContainer = styled.div`
    height: 100%;
    display: flex;
    align-items: center;
`

const LinksWrapper = styled.ul`
    margin: 0;
    padding: 0;
    display: flex;
    height: 100%
`

const LinkItem = styled.li`
    height: 100%;
    padding: 0 1.1em;
    color: white;
    font-family: 'Varela Round', sans-serif;
    font-weight: 500;
    font-size: 20px;
    align-items: center;
    justify-content: center;
    list-style-type: none;
    display: flex;
    border-top: 2px solid transparent;
    transition: all 300ms ease-in-out;

    &:hover {
        border-top: 2px solid #FB743E;
    }
`

const Link = styled.a`
    text-decoration: none;
    color: inherit;
    font-size: inherit;
`

const NavLinks = (props) => {
    return(
        <NavLinksContainer>
            <LinksWrapper>
                {/* <Router> */}
                <LinkItem><Link href='#'>Home</Link></LinkItem>
                <LinkItem><Link href='#'>Activity Search</Link></LinkItem>
                <LinkItem><Link href='#'>Trip Planner</Link></LinkItem>
                    {/* <div>
                        <LinkItem to="/Home">
                        <Link aria-label="home">Home</Link>
                        </LinkItem>
                        <LinkItem to="/Home">
                        <Link aria-label="Park Search">Park Search</Link>
                        </LinkItem>
                        <LinkItem to="/Home">
                        <Link aria-label="Trip Planner">Trip Planner</Link>
                        </LinkItem>
                        <LinkItem to="/Portal">
                        <Link aria-label="Login">Login</Link>
                        </LinkItem>
                    </div>
                    <div className="nav-route">
                    <Switch>
                        <Route exact path="/home">
                        <Home token={props.token} newToken={props.newToken} logout={props.logout} />
                        </Route>
                        <Route exact path="/portal">
                        <Portal token={props.token} newToken={props.newToken} logout={props.logout} />
                        </Route>
                        <Route exact path="/">
                        <Home />
                        </Route>
                    </Switch>
                    </div>
                </Router> */}
            </LinksWrapper>
        </NavLinksContainer>
    )
}

export default NavLinks