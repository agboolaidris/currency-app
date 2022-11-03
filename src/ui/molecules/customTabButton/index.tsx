import {View, Text, Pressable} from 'react-native';
import React, {ReactElement, ReactNode} from 'react';
import {BottomTabBarButtonProps} from '@react-navigation/bottom-tabs';
import {TabButtomCircle, TabButtomWrapper} from './style';
interface ICustomTabButtom extends BottomTabBarButtonProps {
  label: string;
  icon: ReactElement;
}

const CustomTabButtom = ({
  children,
  style,
  onPress,
  accessibilityState,
  label,
  icon,
}: ICustomTabButtom) => {
  return (
    <TabButtomWrapper onPress={onPress}>
      {accessibilityState?.selected ? (
        <TabButtomCircle>{icon}</TabButtomCircle>
      ) : (
        children
      )}
    </TabButtomWrapper>
  );
};

export default CustomTabButtom;
