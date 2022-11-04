import {View} from 'react-native';
import React from 'react';
import {CurrencyCardWrapper, RoundedWrapper} from './style';
import {Text} from '../../atoms/typography';
import {RiseIcon} from '../../../icons/arrow';

const CurrencyCard = () => {
  return (
    <CurrencyCardWrapper>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <RoundedWrapper>
          <Text color="dominant">#</Text>
        </RoundedWrapper>
        <View>
          <Text color="accent50" style={{fontSize: 18, fontWeight: 'bold'}}>
            NGN
          </Text>
        </View>
      </View>
      <View style={{flexDirection: 'column'}}>
        <View>
          <Text color="accent50" style={{fontSize: 18, fontWeight: 'bold'}}>
            #123.04
          </Text>
        </View>
        <View>
          <RiseIcon size={50} color="red" />
        </View>
      </View>
    </CurrencyCardWrapper>
  );
};

export default CurrencyCard;
