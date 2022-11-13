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
          <Text color="accent50" style={{fontSize: 16}}>
            BTC
          </Text>
          <Text color="accent50" style={{fontSize: 12}}>
            Bitcoin
          </Text>
        </View>
      </View>
      <View style={{flexDirection: 'column'}}>
        <View>
          <Text color="accent50" style={{fontSize: 16, fontWeight: 'bold'}}>
            #123.04
          </Text>
          <Text color="danger" style={{fontSize: 12}}>
            -2.09%
          </Text>
        </View>
        <View></View>
      </View>
      <View style={{flexDirection: 'column'}}>
        <View>
          <Text color="success" style={{fontSize: 14, fontWeight: 'bold'}}>
            #123.04
          </Text>
          <Text color="danger" style={{fontSize: 14, fontWeight: 'bold'}}>
            #123.04
          </Text>
        </View>
        <View></View>
      </View>
    </CurrencyCardWrapper>
  );
};

export default CurrencyCard;
