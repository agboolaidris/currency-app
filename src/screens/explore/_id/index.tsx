import {Text} from 'react-native';
import React from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {StackNavigationParams} from '../../../@types/navigation';
import {Wrapper} from '../../../ui/atoms/container';
import Loading from '../../../ui/molecules/loading';
type Props = NativeStackScreenProps<StackNavigationParams, 'Detail'>;
const CoinDetail = ({route}: Props) => {
  return (
    <Wrapper>
      {/* <Text>CoinDetail {route.params.id}</Text> */}
      <Loading />
    </Wrapper>
  );
};

export default CoinDetail;
