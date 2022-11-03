import React, {ReactElement} from 'react';
import {Modal as NativeModal, View, Pressable} from 'react-native';
import {Text} from '../../atoms/typography';
import {ModalWrapper} from './style';
interface Props {
  visible: boolean;
  handleClose?: () => void;
  height: number;
  children: ReactElement;
}
function Modal({visible, handleClose, height, children}: Props) {
  return (
    <NativeModal visible={visible} transparent>
      <View
        style={{
          backgroundColor: 'rgba(0,0,0,0.5)',
          flex: 1,
          justifyContent: 'flex-end',
        }}>
        <Pressable
          style={{flex: 1}}
          onPress={() => handleClose && handleClose()}></Pressable>
        <ModalWrapper style={{height: height}}>{children}</ModalWrapper>
      </View>
    </NativeModal>
  );
}

export default Modal;
