import {Pressable, View} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import React, {useState} from 'react';
import {FilterWrapper, HeaderWrapper} from './style';
import FilterIcon from '../../../icons/filter';
import {theme} from '../../../assets/theme';
import Modal from '../modal';
import {Text} from '../../atoms/typography';
import {IconWrapper} from '../../atoms/iconWrapper';
import TimeIcon from '../../../icons/time';
import MarkIcon from '../../../icons/mark';
import currencies from '../../../constants/currencies';

interface IHeader {
  onValueChange?: (value: string) => void;
}
const Header = ({onValueChange}: IHeader) => {
  const [selectedValue, setSelectedValue] = useState('USD');
  const [headerValue, setHeaderValue] = useState(selectedValue);
  const [showModal, setShowModal] = useState(false);

  const handleCloseModal = () => {
    setShowModal(false);
  };
  const handleSubmit = () => {
    if (onValueChange) onValueChange(selectedValue);
    setHeaderValue(selectedValue);
    handleCloseModal();
  };

  return (
    <>
      <HeaderWrapper>
        <Text color="compliment" style={{fontSize: 30, fontWeight: 'bold'}}>
          {headerValue}
        </Text>
        <Pressable onPress={() => setShowModal(true)}>
          <FilterWrapper>
            <FilterIcon size={20} color={theme.colors.compliment} />
          </FilterWrapper>
        </Pressable>
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
              <IconWrapper color="compliment50" onPress={handleSubmit}>
                <MarkIcon color={theme.colors.success} width={30} height={30} />
              </IconWrapper>
            </View>
            <View>
              <Picker
                enabled={false}
                selectedValue={selectedValue}
                onValueChange={(itemValue, itemIndex) => {
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
      </HeaderWrapper>
    </>
  );
};

export default Header;
