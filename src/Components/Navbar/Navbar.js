import React from 'react'
import { useState } from 'react';
import { useMediaQuery } from "react-responsive";
import styled from 'styled-components'


import NavLinks from './NavLinks'
import Access from './Access'
import Burger from './Burger'
import { DeviceSize } from '../Responsive/index'
import SideNav from './SideNav';
import Logo from './Logo';


const NavbarContainer = styled.div`
    width: 100%;
    height: 80px;
    display: flex;
    align-items: center;
    padding: 0 1.5em;
    background-color: #383E56;
    color: white;
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
    const [open, setOpen] = useState(false);

    const isMobile = useMediaQuery({maxWidth: DeviceSize.mobile})
    return(
        <NavbarContainer>
            <LeftSection>
                <Logo />
            </LeftSection>
            <MiddleSection>
                <NavLinks token={props.token} logout={props.clearToken} newToken={props.updateToken}/>
                {/* {!isMobile && <NavLinks />} */}
            </MiddleSection>
            <RightSection>
                <Access />
                {/* {!isMobile && <Access />}
                {isMobile && <Burger open={open} setOpen={setOpen} /> &&
                <SideNav open={open} setOpen={setOpen} />} */}
            </RightSection>
        </NavbarContainer>
    )
}

export default Navbar
