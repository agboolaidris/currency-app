import {Pressable, StyleProp, TextStyle, ViewStyle} from 'react-native';
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
  onPress?: () => void;
}
const Button = ({bg, color, textStyle, style, content, onPress}: IButton) => {
  return (
    <Pressable onPress={() => onPress && onPress()}>
      <ButtonWrapper color={bg} style={style}>
        <Text
          color={color || 'dominant50'}
          style={[{fontWeight: 'bold'}, textStyle]}>
          {content}
        </Text>
      </ButtonWrapper>
    </Pressable>
  );
};

export default Button;
