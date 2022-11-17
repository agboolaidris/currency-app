import React, {useEffect, useState} from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {
  TabView,
  SceneMap,
  SceneRendererProps,
  NavigationState,
} from 'react-native-tab-view';
import {
  View,
  useWindowDimensions,
  Pressable,
  FlatList,
  Image,
} from 'react-native';
import {StackNavigationParams} from '../../../@types/navigation';
import {Wrapper} from '../../../ui/atoms/container';
import Loading from '../../../ui/molecules/loading';
import {Text} from '../../../ui/atoms/typography';
import {theme} from '../../../assets/theme';
import Animated, {useAnimatedStyle} from 'react-native-reanimated';
import axiosInstance from '../../../helpers/axios';
import {Root} from '../../../@types/coin';
import CoinMarket from './tabs/market';
import CoinHistory from './tabs/history';
import CoinChart from './tabs/chart';
import Header from './components/header';

type Props = NativeStackScreenProps<StackNavigationParams, 'Detail'>;

interface TabBarProps extends SceneRendererProps {
  navigationState: NavigationState<any>;
  onTabPress: (key: number) => void;
  activeIndex: number;
}
interface ItemProps {
  active: boolean;
  content: string;
}

const Item = ({active, content}: ItemProps) => {
  const animatedStyle = useAnimatedStyle(() => {
    return {
      opacity: active ? 1 : 0.7,
    };
  });
  return (
    <Animated.View
      style={[
        {
          justifyContent: 'center',
          alignItems: 'center',
          marginHorizontal: 5,
          backgroundColor: theme.colors.compliment,
          height: 30,
          width: 70,
          borderRadius: 5,
        },
        animatedStyle,
      ]}>
      <Text color="dominant50">{content}</Text>
    </Animated.View>
  );
};

const TabBar = (props: TabBarProps) => {
  return (
    <View
      style={{
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor: theme.colors.dominant50,
        overflow: 'scroll',
        paddingLeft: 10,
      }}>
      <FlatList
        data={props.navigationState.routes}
        horizontal
        contentContainerStyle={{
          justifyContent: 'flex-start',
          flexDirection: 'row',
          flex: 1,
        }}
        renderItem={({item, index}) => (
          <Pressable onPress={() => props.onTabPress(index)}>
            <Item content={item.title} active={index === props.activeIndex} />
          </Pressable>
        )}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

const CoinDetail = ({route}: Props) => {
  const layout = useWindowDimensions();
  const [loading, setLoading] = useState(true);
  const [index, setIndex] = React.useState(0);
  const [data, setData] = useState<Root | null>(null);
  const [routes] = React.useState([
    {key: 'history', title: 'History'},
    {key: 'market', title: 'Market'},
    {key: 'chart', title: 'Chart'},
  ]);

  useEffect(() => {
    axiosInstance.get(`/coins/${route.params.id}`).then(res => {
      setLoading(false);
      setData(res.data);
    });
  }, []);

  const CoinHistoryTab = () => (
    <CoinHistory html={data ? data.description.en : ''} />
  );

  const renderScene = SceneMap({
    market: CoinMarket,
    history: CoinHistoryTab,
    chart: CoinChart,
  });
  return (
    <Wrapper>
      {loading && <Loading />}
      {!loading && data && (
        <>
          <Header {...data} />
          <TabView
            renderTabBar={props => (
              <TabBar
                {...props}
                onTabPress={i => setIndex(i)}
                activeIndex={index}
              />
            )}
            navigationState={{index, routes}}
            renderScene={renderScene}
            onIndexChange={setIndex}
            initialLayout={{width: layout.width}}
          />
        </>
      )}
    </Wrapper>
  );
};

export default CoinDetail;
