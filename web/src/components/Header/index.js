import { BrowserRouter, Switch, Route, Link, Redirect } from 'react-router-dom';

import Plan from '../../pages/Plan';
import Home from '../../pages/Home';

import { HeaderNav, Items, Nav, StyledLink } from './styles';

import Logo from '../../assets/logo.png';

export default function Header() {
  return (
    <BrowserRouter>
      <div>
        <HeaderNav>
          <Link to='/'>
            <img src={Logo} alt='' />
          </Link>
          <Nav>
            <Items>
              <StyledLink to='/home'>Home</StyledLink>
            </Items>
            <Items>
              <StyledLink to='/plans'>Consultar</StyledLink>
            </Items>
          </Nav>
        </HeaderNav>

        <Switch>
          <Route exact path='/'>
            <Redirect to='/home' />
          </Route>
          <Route path='/home'>
            <Home />
          </Route>
          <Route path='/plans'>
            <Plan />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}
