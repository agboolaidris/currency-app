import {ScrollView, View} from 'react-native';
import React, {useState} from 'react';
import {Wrapper} from '../../ui/atoms/container';
import CurrencyCard from '../../ui/molecules/currencyCard';
import Header from '../../ui/molecules/header';
import {ExploreCardHeaderWrapper} from './style';
import {Text} from '../../ui/atoms/typography';

const Explore = () => {
  return (
    <Wrapper>
      <ScrollView>
        <Header />
        <ExploreCardHeaderWrapper>
          <View>
            <Text>Name</Text>
          </View>
          <View>
            <Text>Price/24hrs</Text>
          </View>
          <View>
            <Text>high/Low</Text>
          </View>
        </ExploreCardHeaderWrapper>
        <CurrencyCard />
        <CurrencyCard />
        <CurrencyCard />
        <CurrencyCard />
        <CurrencyCard />
        <CurrencyCard />
        <CurrencyCard />
        <CurrencyCard />
        <CurrencyCard />
        <CurrencyCard />
        <CurrencyCard />
        <CurrencyCard />
      </ScrollView>
    </Wrapper>
  );
};

export default Explore;
