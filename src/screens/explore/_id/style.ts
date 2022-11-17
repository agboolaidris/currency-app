import styled from '@emotion/native';
import Animated from 'react-native-reanimated';

export const TitleWrapper = styled.View`
  padding: 10px 10px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const RoundedWrapper = styled.View`
  width: 40px;
  height: 40px;
  border-radius: 10px;
  margin-right: 10px;
  justify-content: center;
  align-items: center;
`;

export const IconWrapper = styled.Pressable`
  padding: 5px 10px;
  background-color: red;
`;
