import styled from '@emotion/native';
import {ColorType} from '../../../assets/theme';

export const ButtonWrapper = styled.View<{color?: ColorType}>`
  background-color: ${({theme, color}) => theme.colors[color || 'compliment']};
  height: 50px;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  border-radius: 10px;
`;
