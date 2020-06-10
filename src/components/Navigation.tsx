import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components'

import SignOutButton from './SignOut'
import * as ROUTES from '../constants/routes';
import { useSession } from '../firebase/context';

type Props = {}
const Navigation = (props: Props) => {
  const user = useSession()
  return user ? <NavigationAuth /> : <NavigationNonAuth />
};

const NavList = styled.ul`
  padding: 0;
  list-style-type: none;
  display: flex;
  justify-content: space-between;
`

const NavItem = styled.li`
  margin-left: 1rem;
`

const NavigationAuth = () => (
  <>
    <NavList>
      <NavItem>
        <Link to={ROUTES.HOME}>Home</Link>
      </NavItem>
      <NavItem>
        <Link to={ROUTES.ACCOUNT}>Account</Link>
      </NavItem>
      <NavItem>
        <SignOutButton />
      </NavItem>
    </NavList>
  </>
);

const NavigationNonAuth = () => (
  <NavList>
  </NavList>
);

export default Navigation;