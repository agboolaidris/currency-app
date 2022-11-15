import React from 'react';
import Lottie from 'lottie-react-native';
import {View} from 'react-native';

export default function Loading() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 1,
      }}>
      <Lottie
        source={require('../../../constants/loading.json')}
        autoPlay={true}
        loop
        style={{width: 100, height: 100}}
      />
    </View>
  );
}
