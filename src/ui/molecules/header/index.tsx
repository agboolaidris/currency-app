import {Pressable, View} from 'react-native';

import React, {useState} from 'react';
import {FilterWrapper, HeaderWrapper} from './style';
import FilterIcon from '../../../icons/filter';
import {theme} from '../../../assets/theme';

import {Text} from '../../atoms/typography';

interface IHeader {
  onBarPress?: () => void;
  title: string;
}
const Header = ({onBarPress, title}: IHeader) => {
  return (
    <>
      <HeaderWrapper>
        <Text color="compliment" style={{fontSize: 30, fontWeight: 'bold'}}>
          {title}
        </Text>
        <Pressable onPress={() => onBarPress && onBarPress()}>
          <FilterWrapper>
            <FilterIcon size={20} color={theme.colors.compliment} />
          </FilterWrapper>
        </Pressable>
      </HeaderWrapper>
    </>
  );
};

export default Header;
