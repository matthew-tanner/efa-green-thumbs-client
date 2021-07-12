import React from 'react';
import { bool } from 'prop-types'
import { StyledMenu } from './Menu.styled';

const Menu = ({open}) => {
  return (
    <StyledMenu open={open}>
      <a href="/">
        <span role="img" aria-label="Home">&#x1f481;&#x1f3fb;&#x200d;&#x2642;&#xfe0f;</span>
        Home
      </a>
      <a href="/">
        <span role="img" aria-label="Park Search">&#x1f4b8;</span>
        Park Search
        </a>
      <a href="/">
        <span role="img" aria-label="Trip Journal">&#x1f4e9;</span>
        Trip Journal
        </a>
    </StyledMenu>
  )
}

Menu.propTypes = {
  open: bool.isRequired
}

export default Menu;