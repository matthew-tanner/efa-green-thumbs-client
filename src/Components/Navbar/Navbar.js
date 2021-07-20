import React from 'react'
import styled from 'styled-components'

import NavLinks from './NavLinks'
import Access from './Access'
import Logo from './Logo';

const NavbarContainer = styled.nav`
    width: 100%;
    height: 80px;
    display: flex;
    align-items: center;
    padding: 0 1.5em;
    background-color: #383E56;
    color: white;
    top: 0;
    position: fixed;
    left: 0;
`

const LeftSection = styled.div`
    display: flex;
`

const MiddleSection = styled.div`
    display: flex;
    flex-grow: 2;
    height: 100%;
    justify-content: center;
`

const RightSection = styled.div`
    display: flex;
`

const Navbar = (props) => {

    return(
        <NavbarContainer>
            <LeftSection>
                <Logo />
            </LeftSection>
            <MiddleSection>
                <NavLinks token={props.token} logout={props.clearToken} newToken={props.updateToken}/>
            </MiddleSection>
            <RightSection>
                <Access  token={props.token} newToken={props.newToken} logout={props.logout}/>
            </RightSection>
        </NavbarContainer>
    )
}

export default Navbar
