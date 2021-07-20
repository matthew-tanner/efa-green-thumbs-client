import React from 'react'
import styled from 'styled-components'
import logo from './navLogo.png'

const LogoWrapper = styled.div`
    display: flex;
    align-items: center;
`

const LogoImg = styled.div`
    width: 80px;
    height: 80px;

    img {
        width: 100%;
        height: 100%;
    }
`

const LogoText = styled.h2`
    font-size: 16px;
    margin: 0;
    margin-left: 4px;
    font-weight: 500;
`

const Logo = (props) => {
    return(
        <>
        <LogoWrapper>
            <LogoImg><img src={logo} alt='logo' /></LogoImg>
        </LogoWrapper>
        </>
    )
}

export default Logo