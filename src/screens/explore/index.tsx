import {FlatList, View} from 'react-native';
import React, {useState, useEffect} from 'react';
import {Picker} from '@react-native-picker/picker';
import {Wrapper} from '../../ui/atoms/container';
import CurrencyCard from '../../ui/molecules/currencyCard';
import Header from '../../ui/molecules/header';
import {ExploreCardHeaderWrapper} from './style';
import {Text} from '../../ui/atoms/typography';
import axiosInstance from '../../helpers/axios';
import {CoinType} from '../../@types/coin';
import {IconWrapper} from '../../ui/atoms/iconWrapper';
import TimeIcon from '../../icons/time';
import MarkIcon from '../../icons/mark';
import currencies from '../../constants/currencies';
import Modal from '../../ui/molecules/modal';
import {theme} from '../../assets/theme';
import Loading from '../../ui/molecules/loading';

const Explore = () => {
  const [loading, setLoading] = useState(true);
  const [selectedValue, setSelectedValue] = useState('USD');
  const [currency, setCurrency] = useState(selectedValue);
  const [showModal, setShowModal] = useState(false);
  const [data, setData] = useState<CoinType[]>([]);

  const handleCloseModal = () => {
    setShowModal(false);
  };
  const handleOpenModal = () => {
    setShowModal(true);
  };

  const fetchCoin = () => {
    setLoading(true);
    axiosInstance
      .get(
        `coins/markets?vs_currency=${currency}&order=market_cap_desc&per_page=100&page=1&sparkline=false`,
      )
      .then(res => {
        setData(res.data);
        setCurrency(selectedValue);
        setLoading(false);
      })
      .catch(err => {
        setLoading(false);
      });
  };
  useEffect(() => {
    fetchCoin();
  }, []);

  const handleValueChange = () => {
    handleCloseModal();
    fetchCoin();
  };

  return (
    <Wrapper>
      {loading && <Loading />}
      {!loading && (
        <FlatList
          data={data}
          keyExtractor={({id}) => id}
          renderItem={({item}) => (
            <CurrencyCard {...item} currency={currency} />
          )}
          ListHeaderComponent={() => (
            <>
              <Header onBarPress={handleOpenModal} title={currency} />
              <ExploreCardHeaderWrapper>
                <View style={{width: '40%'}}>
                  <Text>Name</Text>
                </View>
                <View
                  style={{
                    width: '30%',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <Text>Price/24hrs</Text>
                </View>
                <View
                  style={{
                    width: '30%',
                    alignItems: 'flex-end',
                    justifyContent: 'flex-end',
                  }}>
                  <Text>high/Low</Text>
                </View>
              </ExploreCardHeaderWrapper>
            </>
          )}
        />
      )}

      <Modal visible={showModal} height={300} handleClose={handleCloseModal}>
        <>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <IconWrapper color="compliment" onPress={handleCloseModal}>
              <TimeIcon color={theme.colors.danger} width={30} height={30} />
            </IconWrapper>
            <IconWrapper color="compliment50" onPress={handleValueChange}>
              <MarkIcon color={theme.colors.success} width={30} height={30} />
            </IconWrapper>
          </View>
          <View>
            <Picker
              enabled={false}
              selectedValue={selectedValue}
              onValueChange={itemValue => {
                setSelectedValue(itemValue);
              }}>
              {currencies.map((currency, index) => (
                <Picker.Item
                  key={index}
                  label={currency.name}
                  value={currency.cc}
                  color={theme.colors.dominant50}
                />
              ))}
            </Picker>
          </View>
        </>
      </Modal>
    </Wrapper>
  );
};

export default Explore;
