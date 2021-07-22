import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom';

const AccessContainer = styled.div`
    display: flex;
    margin-left: 10px;
`
const LoginButton = styled.button`
    border: 0;
    outline: 0;
    padding: 8px 1em;
    margin: 2em;
    color: white;
    font-size: 20px;
    font-weight: 600;
    border-radius: 5px;
    background-color: #9FB8AD;
    transition: all 300ms ease-in-out;
    cursor: pointer;

    &:hover {
        background-color: #FB743E
    }
`

const Access = () => {
    return(
        <>
        <AccessContainer>
        <Link to="/Portal"><LoginButton>Login</LoginButton></Link>
        </AccessContainer>
        <div className="nav-route">
        </div>
        </>
    )
}

export default Access