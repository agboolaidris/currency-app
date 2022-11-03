import styled from '@emotion/native';

export const TabButtomWrapper = styled.Pressable`
  flex: 1;
  align-items: center;
`;

export const TabButtomCircle = styled.View`
  width: 60px;
  height: 60px;
  background-color: ${({theme}) => theme.colors.compliment};
  border-radius: 50px;
  margin-top: -25px;
  border-width: 5px;
  border-color: ${({theme}) => theme.colors.dominant50};
  justify-content: center;
  align-items: center;
`;
