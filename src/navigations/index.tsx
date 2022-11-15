import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Convert from '../screens/convert';
import Explore from '../screens/explore';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {theme} from '../assets/theme';
import CustomTabButtom from '../ui/molecules/customTabButton';
import {OutlineHomeIcon, SolidHomeIcon} from '../icons/home';
import {SolidCalculatorIcon, OutlineCalculatorIcon} from '../icons/calculate';
import {TabNavgiationParams, StackNavigationParams} from '../@types/navigation';
import CoinDetail from '../screens/explore/_id';

const Tab = createBottomTabNavigator<TabNavgiationParams>();

const Stack = createNativeStackNavigator<StackNavigationParams>();

function ExploreStack() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Details" component={Explore} />
      <Stack.Screen name="Detail" component={CoinDetail} />
    </Stack.Navigator>
  );
}

function Navigation() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarStyle: {backgroundColor: theme.colors.compliment},
          tabBarActiveTintColor: theme.colors.dominant,
          tabBarInactiveTintColor: theme.colors.dominant50,
        }}>
        <Tab.Screen
          name="Explore"
          component={ExploreStack}
          options={{
            tabBarIcon: props => <SolidHomeIcon {...props} />,
            tabBarLabel: 'Explore',
            tabBarButton: props => (
              <CustomTabButtom
                {...props}
                label=""
                icon={
                  <OutlineHomeIcon size={20} color={theme.colors.dominant} />
                }
              />
            ),
          }}
        />
        <Tab.Screen
          name="Convert"
          component={Convert}
          options={{
            tabBarIcon: props => <SolidCalculatorIcon {...props} />,
            tabBarLabel: 'Convert',
            tabBarButton: props => (
              <CustomTabButtom
                {...props}
                label=""
                icon={
                  <OutlineCalculatorIcon
                    size={20}
                    color={theme.colors.dominant}
                  />
                }
              />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
export default Navigation;
