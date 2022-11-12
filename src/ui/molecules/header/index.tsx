import {Pressable, View} from 'react-native';
import SelectDropdown from 'react-native-select-dropdown';
import RNPickerSelect from 'react-native-picker-select';
import {Picker} from '@react-native-picker/picker';

import React, {useState} from 'react';
import {FilterWrapper, HeaderWrapper} from './style';
import FilterIcon from '../../../icons/filter';
import {theme} from '../../../assets/theme';
import Modal from '../modal';
import {Text} from '../../atoms/typography';
import Button from '../button';
import {IconWrapper} from '../../atoms/iconWrapper';
import TimeIcon from '../../../icons/time';
import MarkIcon from '../../../icons/mark';

const Header = () => {
  const [selectedValue, setSelectedValue] = useState('USD');
  const [showModal, setShowModal] = useState(false);

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const data = [
    {
      value: 'NGN',
      label: 'Nigeria NGN',
    },
    {
      value: 'USD',
      label: 'USA USD',
    },
    {
      value: 'EURO',
      label: 'Europe EURO',
    },
    {
      value: 'Pound',
      label: 'Pound',
    },
    {
      value: 'PPP',
      label: 'Ku PPP',
    },
    {
      value: 'EO',
      label: 'Eur EO',
    },
  ];
  return (
    <>
      <HeaderWrapper>
        <Text color="compliment" style={{fontSize: 30, fontWeight: 'bold'}}>
          {selectedValue}
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
              <TimeIcon color={theme.colors.danger} size={50} />
              <MarkIcon color={theme.colors.danger} size={50} />
              <IconWrapper color="danger"></IconWrapper>
              <IconWrapper color="success"></IconWrapper>
            </View>
            <View>
              <Picker
                enabled={false}
                selectedValue={selectedValue}
                onValueChange={(itemValue, itemIndex) => {
                  setSelectedValue(itemValue);
                }}>
                {data.map((d, index) => (
                  <Picker.Item
                    key={index}
                    label={d.label}
                    value={d.value}
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
