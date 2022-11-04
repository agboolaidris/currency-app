import {Text, ScrollView} from 'react-native';
import React, {useState} from 'react';
import {Wrapper} from '../../ui/atoms/container';
import CurrencyCard from '../../ui/molecules/currencyCard';
import Header from '../../ui/molecules/header';

const Explore = () => {
  return (
    <Wrapper>
      <ScrollView>
        <Header />
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
