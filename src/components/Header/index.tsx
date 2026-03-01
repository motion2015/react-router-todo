import styled from '@emotion/styled';
import React from 'react'
import { Link } from 'react-router-dom';
const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  text-align: center;
  padding: 8px 0;
  background-color: #304ffe;
  margin: 0;
  z-index: 2;
`;

const StyledLink = styled(Link)`
  color: #fff;
  font-size: 20px;
  text-decoration: none;
`;

const Header = () => {
  return (
    <Container> <StyledLink to="/">할 일 목록 앱</StyledLink></Container>
  )
}

export default Header