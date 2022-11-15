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
      <View style={{flexDirection: 'row', alignItems: 'center', width: '40%'}}>
        <RoundedWrapper>
          <Image
            source={{uri: props.image}}
            style={{width: '100%', height: '100%'}}
          />
        </RoundedWrapper>
        <View>
          <Text color="accent50" style={{fontSize: 14, fontWeight: 'bold'}}>
            {props.symbol}
          </Text>
          <Text color="accent50" style={{fontSize: 12, maxWidth: 70}}>
            {props.name}
          </Text>
        </View>
      </View>
      <View style={{width: '30%', alignItems: 'center'}}>
        <View>
          <Text color="accent50" style={{fontSize: 12, fontWeight: 'bold'}}>
            {currencyFormatter(props.current_price, props.currency)}
          </Text>
          <Text
            color={
              props.market_cap_change_percentage_24h < 0 ? 'danger' : 'success'
            }
            style={{fontSize: 12}}>
            {props.market_cap_change_percentage_24h}%
          </Text>
        </View>
        <View></View>
      </View>
      <View
        style={{
          width: '30%',
          alignItems: 'flex-end',
          justifyContent: 'flex-end',
        }}>
        <View>
          <Text color="success" style={{fontSize: 12}}>
            {currencyFormatter(props.high_24h, props.currency)}
          </Text>
          <Text color="danger" style={{fontSize: 12}}>
            {currencyFormatter(props.low_24h, props.currency)}
          </Text>
        </View>
        <View></View>
      </View>
    </CurrencyCardWrapper>
  );
};

export default CurrencyCard;
