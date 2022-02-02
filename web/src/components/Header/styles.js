import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HeaderNav = styled.div`
  background: rgba(255, 255, 255, 0.3);
  display: flex;
  justify-content: space-between;
  padding: 15px;
  height: 50px;
  align-items: center;
  box-shadow: 5px 20px 50px #00000033;
  margin-bottom: 50px;
  color: #fff;

  img {
    width: 120px;
    margin-left: 60px;
  }
`;

export const Items = styled.li`
  margin: 0;
  padding: 0;
  list-style: none;
  font-family: 'Montserrat', sans-serif;
  cursor: pointer;
`;

export const Nav = styled.ul`
  display: flex;
  margin: 20px 50px;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: #60c3d8;
  padding: 10px 15px;
  text-align: center;
  display: block;
  transition: 0.5s;
  font-size: 20px;

  &:hover {
    background: #ddd;
    color: #dc143c;
  }
`;
