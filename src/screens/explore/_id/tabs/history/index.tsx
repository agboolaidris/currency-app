import {View, Text} from 'react-native';
import React from 'react';
import {useWindowDimensions} from 'react-native';
import RenderHtml from 'react-native-render-html';

interface CoinHistoryProps {
  html: string;
}
const CoinHistory = ({html}: CoinHistoryProps) => {
  const {width} = useWindowDimensions();

  return (
    <View style={{padding: 10, marginTop: 10}}>
      <RenderHtml contentWidth={width} source={{html}} />
    </View>
  );
};

export default CoinHistory;
