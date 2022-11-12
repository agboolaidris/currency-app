import styled from '@emotion/native';
import {css} from '@emotion/react';
import {ColorType} from '../../assets/theme';

interface IText {
  color?: ColorType;
}
export const IconWrapper = styled.Pressable<IText>`
  background-color: ${({theme, color}) => theme.colors[color || 'dominant50']};
  height: 50px;
  width: 50px;
  border-radius: 50px;
`;
