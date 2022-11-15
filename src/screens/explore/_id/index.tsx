import React from 'react';
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
  Animated,
  FlatList,
} from 'react-native';
import {StackNavigationParams} from '../../../@types/navigation';
import {Wrapper} from '../../../ui/atoms/container';
import Loading from '../../../ui/molecules/loading';
import {Text} from '../../../ui/atoms/typography';
import {theme} from '../../../assets/theme';

type Props = NativeStackScreenProps<StackNavigationParams, 'Detail'>;

const FirstRoute = () => <View style={{flex: 1, backgroundColor: '#ff4081'}} />;

const SecondRoute = () => (
  <View style={{flex: 1, backgroundColor: '#673ab7'}} />
);

const renderScene = SceneMap({
  first: FirstRoute,
  second: SecondRoute,
  third: FirstRoute,
  fourth: SecondRoute,
  five: FirstRoute,
  six: SecondRoute,
});
interface TabBarProps extends SceneRendererProps {
  navigationState: NavigationState<any>;
  onTabPress: (key: number) => void;
}

const TabBar = (props: TabBarProps) => {
  const inputRange = props.navigationState.routes.map((x, i) => i);
  return (
    <View
      style={{
        minHeight: 50,
        justifyContent: 'space-evenly',
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor: theme.colors.dominant50,
      }}>
      <FlatList
        horizontal
        data={props.navigationState.routes}
        renderItem={({item, index}) => (
          <Pressable onPress={() => props.onTabPress(index)}>
            <Item />
          </Pressable>
        )}
        showsHorizontalScrollIndicator={false}
      />
      {/* {props.navigationState.routes.map((route, i) => {
        const opacity = props.position.interpolate({
          inputRange,
          outputRange: inputRange.map(inputIndex =>
            inputIndex === i ? 1 : 0.5,
          ),
        });

        return (
          <Pressable style={{}} onPress={() => props.onTabPress(i)}>
            <Animated.Text style={{opacity}}>{route.title}</Animated.Text>
          </Pressable>
        );
      })} */}
    </View>
  );
};

const Item = () => {
  return (
    <View
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 5,
        backgroundColor: 'grey',
        height: 30,
        width: 70,
      }}>
      <Text>Ten-10</Text>
    </View>
  );
};
const CoinDetail = ({route}: Props) => {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: 'first', title: 'First'},
    {key: 'second', title: 'Second'},
    {key: 'third', title: 'Third'},
    {key: 'fourth', title: 'Fourth'},
    {key: 'five', title: 'Five'},
    {key: 'six', title: 'Six'},
  ]);

  return (
    <Wrapper>
      {/* <Text>CoinDetail {route.params.id}</Text> */}
      {/* <View>
        <FlatList
          horizontal
          data={routes}
          renderItem={() => <Item />}
          showsHorizontalScrollIndicator={false}
        />
      </View> */}

      {/* <Loading /> */}
      <TabView
        renderTabBar={props => (
          <TabBar {...props} onTabPress={i => setIndex(i)} />
        )}
        navigationState={{index, routes}}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={{width: layout.width}}
      />
    </Wrapper>
  );
};

export default CoinDetail;
