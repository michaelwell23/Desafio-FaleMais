import styled from 'styled-components';

export const BoxMenu = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 800px) {
    flex-direction: column;
    position: relative;
  }
`;

export const BorderInfo = styled.div`
  width: 350px;
  height: 300px;
  border: 4px solid #dc143c;
  box-sizing: border-box;
  border-radius: 8px;
  display: flex;
  padding: 15px;
  margin: 0 50px;
  box-shadow: 0 6px 10px 0 rgba(0, 0, 0, 0.2);
`;

export const Info = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  transition: transform .2s;
  
  
}
`;

export const Button = styled.div`
  position: relative;
  outline: none;
  border-radius: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  text-transform: uppercase;
  height: 45px;
  width: 130px;
  opacity: 1;
  background-color: #ddd;
  border: 1px solid rgba(0, 0, 0, 0.6);
  margin-top: 20px;

  span {
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    text-align: center;
    font-size: 12px;
    font-weight: bold;
    letter-spacing: 0.7px;
    text-decoration: none;
  }

  &:hover {
    transform: scale(1.1);
  }
`;

export const ListItems = styled.div`
  display: flex;
  flex-direction: column;

  label {
    line-height: 28px;
    font-size: 16px;
    display: flex;
    align-items: center;
    color: #000000;
    margin-bottom: 15px;
  }
`;
export const Plan = styled.div`
  color: #dc143c;
  display: flex;
  font-size: 20px;
  align-items: center;
`;
