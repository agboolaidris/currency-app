import {View, Text, Image} from 'react-native';
import React from 'react';
import {RoundedWrapper, TitleWrapper, IconWrapper} from '../style';
import {BackArrow} from '../../../../icons/arrow';
import {theme} from '../../../../assets/theme';
import {Root} from '../../../../@types/coin';
import {useNavigation} from '@react-navigation/native';

const Header = (props: Root) => {
  const navigation = useNavigation();
  return (
    <TitleWrapper>
      <IconWrapper
        onPress={() => navigation.goBack()}
        style={{backgroundColor: theme.colors.dominant50, borderRadius: 5}}>
        <BackArrow width={30} height={25} color={theme.colors.compliment} />
      </IconWrapper>

      <View style={{flexDirection: 'row'}}>
        <RoundedWrapper>
          <Image
            source={{uri: props.image.small}}
            style={{width: '100%', height: '100%'}}
          />
        </RoundedWrapper>
        <View style={{}}>
          <Text style={{fontSize: 20, fontWeight: 'bold'}}>{props.symbol}</Text>
          <Text style={{marginLeft: 5}}>{props.name}</Text>
        </View>
      </View>
    </TitleWrapper>
  );
};

export default Header;
