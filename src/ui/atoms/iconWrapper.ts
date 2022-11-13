import styled from '@emotion/native';
import {ColorType} from '../../assets/theme';

interface IText {
  color?: ColorType;
}
export const IconWrapper = styled.Pressable<IText>`
  height: 50px;
  width: 50px;
  border-radius: 50px;
  justify-content: center;
  align-items: center;
`;
