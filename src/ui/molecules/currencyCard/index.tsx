import {Image, View} from 'react-native';
import React from 'react';
import {CurrencyCardWrapper, RoundedWrapper} from './style';
import {Text} from '../../atoms/typography';
import {CoinType} from '../../../@types/coin';
import {currencyFormatter} from '../../../helpers/currencyFormatter';

interface ICurrencyCard extends CoinType {
  currency: string;
}
const CurrencyCard = (props: ICurrencyCard) => {
  return (
    <CurrencyCardWrapper>
      <View style={{flexDirection: 'row', alignItems: 'center', width: 100}}>
        <RoundedWrapper>
          <Image
            source={{uri: props.image}}
            style={{width: '100%', height: '100%'}}
          />
        </RoundedWrapper>
        <View>
          <Text color="accent50" style={{fontSize: 16}}>
            {props.symbol}
          </Text>
          <Text color="accent50" style={{fontSize: 12}}>
            {props.name}
          </Text>
        </View>
      </View>
      <View style={{flexDirection: 'column'}}>
        <View>
          <Text color="accent50" style={{fontSize: 16, fontWeight: 'bold'}}>
            {currencyFormatter(props.current_price, props.currency)}
          </Text>
          <Text color="danger" style={{fontSize: 12}}>
            {props.ath_change_percentage}%
          </Text>
        </View>
        <View></View>
      </View>
      <View style={{flexDirection: 'column'}}>
        <View>
          <Text color="success" style={{fontSize: 14, fontWeight: 'bold'}}>
            {currencyFormatter(props.high_24h, props.currency)}
          </Text>
          <Text color="danger" style={{fontSize: 14, fontWeight: 'bold'}}>
            {currencyFormatter(props.low_24h, props.currency)}
          </Text>
        </View>
        <View></View>
      </View>
    </CurrencyCardWrapper>
  );
};

export default CurrencyCard;
