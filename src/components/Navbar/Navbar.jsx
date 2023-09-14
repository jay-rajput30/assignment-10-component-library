import styled from "styled-components";
import { NavLink, Navlink } from "react-router-dom";
const StyledNav = styled.nav`
  width: 100%;
  padding: var(--space-2) var(--space-1);
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const NavlinkWrapper = styled.div`
  display: flex;
  gap: var(--space-2);

  & a {
    text-decoration: none;
    color: var(--clr-text);
  }
  & > a:active {
    font-weight: bold;
    color: var(--clr-primary);
  }
  & input {
    text-align: center;
  }
`;
const Navbar = () => {
  console.log("navbar component called");
  return (
    <StyledNav>
      <h1>My CSS Library</h1>
      <input type="text" placeholder="enter component name" />
      <NavlinkWrapper>
        <NavLink to="/">home</NavLink>
        <NavLink to="/components">components</NavLink>
      </NavlinkWrapper>
    </StyledNav>
  );
};

export default Navbar;
