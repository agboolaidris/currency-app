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

const Header = () => {
  const countries = ['Egypt', 'Canada', 'Australia', 'Ireland'];
  const [selectedLanguage, setSelectedLanguage] = useState();

  const [showModal, setShowModal] = useState(false);

  const handleCloseModal = () => {
    setShowModal(false);
  };
  return (
    <>
      <HeaderWrapper>
        <Text color="compliment" style={{fontSize: 30, fontWeight: 'bold'}}>
          USD
        </Text>
        <Pressable onPress={() => setShowModal(true)}>
          <FilterWrapper>
            <FilterIcon size={20} color={theme.colors.compliment} />
          </FilterWrapper>
        </Pressable>
        <Modal visible={showModal} height={300} handleClose={handleCloseModal}>
          <View>
            <Picker
              selectedValue={selectedLanguage}
              onValueChange={(itemValue, itemIndex) =>
                setSelectedLanguage(itemValue)
              }>
              <Picker.Item
                label="NGN"
                value="java"
                color={theme.colors.dominant50}
              />
              <Picker.Item
                label="EURO"
                value="js"
                color={theme.colors.dominant50}
              />
              <Picker.Item
                label="USD"
                value="j"
                color={theme.colors.dominant50}
              />
            </Picker>
          </View>
        </Modal>
      </HeaderWrapper>
    </>
  );
};

export default Header;
