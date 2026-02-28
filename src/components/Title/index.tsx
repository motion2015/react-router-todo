import styled from '@emotion/styled';
import React from 'react';

interface Props {
  readonly label: string;
}
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Label = styled.h1`
  margin-top: 0;
  font-size: 28px;
  font-weight: 500;
  color: darkgray;
  margin-bottom: 16px;
`;

export const Title = ({ label }: Props) => {
  return (
    <Container>
      <Label>{label} </Label>
    </Container>
  );
};
