import styled from '@emotion/native';

export const CurrencyCardWrapper = styled.View`
  padding: 10px 20px;
  margin: 5px 10px;
  background-color: ${({theme}) => theme.colors.dominant50};
  border-radius: 20px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const RoundedWrapper = styled.View`
  width: 50px;
  height: 50px;
  background-color: ${({theme}) => theme.colors.compliment};
  border-radius: 50px;
  margin-right: 10px;
  justify-content: center;
  align-items: center;
`;
