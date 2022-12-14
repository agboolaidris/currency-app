import styled from '@emotion/native';
import Animated from 'react-native-reanimated';

export const CurrencyCardWrapper = styled(Animated.View)`
  padding: 10px 10px;
  margin: 5px 10px;
  background-color: ${({theme}) => theme.colors.dominant50};
  border-radius: 10px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const RoundedWrapper = styled.View`
  width: 50px;
  height: 50px;
  border-radius: 10px;
  margin-right: 10px;
  justify-content: center;
  align-items: center;
`;
