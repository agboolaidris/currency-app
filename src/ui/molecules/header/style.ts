import styled from '@emotion/native';

export const HeaderWrapper = styled.View`
  padding: 20px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const FilterWrapper = styled.View`
  padding: 10px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: ${({theme}) => theme.colors.dominant50};
  border-radius: 5px;
`;
