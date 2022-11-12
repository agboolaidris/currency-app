import {StyleProp, TextStyle, ViewStyle} from 'react-native';
import React from 'react';
import {ButtonWrapper} from './style';
import {ColorType} from '../../../assets/theme';
import {Text} from '../../atoms/typography';
interface IButton {
  bg?: ColorType;
  color?: ColorType;
  textStyle?: StyleProp<TextStyle>;
  style?: StyleProp<ViewStyle>;
  content: string;
}
const Button = ({bg, color, textStyle, style, content}: IButton) => {
  return (
    <ButtonWrapper color={bg} style={style}>
      <Text
        color={color || 'dominant50'}
        style={[{fontWeight: 'bold'}, textStyle]}>
        {content}
      </Text>
    </ButtonWrapper>
  );
};

export default Button;
