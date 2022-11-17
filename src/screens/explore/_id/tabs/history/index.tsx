import {ScrollView} from 'react-native';
import React from 'react';
import {useWindowDimensions} from 'react-native';
import RenderHtml from 'react-native-render-html';

interface CoinHistoryProps {
  html: string;
}
const CoinHistory = ({html}: CoinHistoryProps) => {
  const {width} = useWindowDimensions();

  return (
    <ScrollView style={{padding: 20}}>
      <RenderHtml contentWidth={width} source={{html}} />
    </ScrollView>
  );
};

export default CoinHistory;
