import { Link } from 'react-router-dom';

import Logo from '../../assets/logo.png';

import { BorderInfo, Info, BoxMenu, Button, ListItems, Plan } from './styles';

export default function Home() {
  return (
    <BoxMenu>
      <div>
        <img src={Logo} alt='logo' width='350' />
      </div>

      <Info>
        <BorderInfo>
          <ListItems>
            <Plan>FaleMais30</Plan>
            <label>Com 30 min gratuitos de ligações</label>

            <Plan>FaleMais60</Plan>
            <label>Com 60 min gratuitos de ligações</label>

            <Plan>FaleMais60</Plan>
            <label>Com 120 min gratuitos de ligações</label>
          </ListItems>
        </BorderInfo>
        <Link to='/plans'>
          <Button>
            <span>Experimente Agora!</span>
          </Button>
        </Link>
      </Info>
    </BoxMenu>
  );
}
