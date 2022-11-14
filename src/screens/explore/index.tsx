import {FlatList, ScrollView, View} from 'react-native';
import React, {useState, useEffect} from 'react';
import {Wrapper} from '../../ui/atoms/container';
import CurrencyCard from '../../ui/molecules/currencyCard';
import Header from '../../ui/molecules/header';
import {ExploreCardHeaderWrapper} from './style';
import {Text} from '../../ui/atoms/typography';
import axiosInstance from '../../helpers/axios';
import {API_URL, API_TOKEN} from '@env';
import {CoinType} from '../../@types/coin';

const Explore = () => {
  const [currency, setCurrency] = useState('USD');
  const [showHeader, setShowHeader] = useState(true);
  const [data, setData] = useState<CoinType[]>([]);
  useEffect(() => {
    axiosInstance
      .get(
        `coins/markets?vs_currency=${currency}&order=market_cap_desc&per_page=100&page=1&sparkline=false`,
      )
      .then(res => {
        setData(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  const handleValueChange = (value: string) => {
    axiosInstance
      .get(
        `coins/markets?vs_currency=${value}&order=market_cap_desc&per_page=100&page=1&sparkline=false`,
      )
      .then(res => {
        setData(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <Wrapper>
      <FlatList
        data={data}
        keyExtractor={({id}) => id}
        renderItem={({item}) => <CurrencyCard {...item} />}
        ListHeaderComponent={() => (
          <View>
            <Header onValueChange={handleValueChange} />
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
          </View>
        )}
      />
    </Wrapper>
  );
};

export default Explore;
