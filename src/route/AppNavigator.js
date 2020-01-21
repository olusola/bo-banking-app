import React from 'react';
import {Image} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createStackNavigator} from 'react-navigation-stack';

import Home from '../containers/Home';
import SpendingContainer from '../containers/SpendingContainer/SpendingContainer';
import InsightContainer from '../containers/InsightContainer/InsightContainer';

const tabNavigator = createBottomTabNavigator(
  {
    spending: SpendingContainer,
    insights: InsightContainer,
    saving: Home,
    support: Home,
    account: Home,
  },
  {
    tabBarOptions: {
      showLabel: true,
      activeTintColor: '#328fd8',
      inactiveTintColor: '#328fd8',
    },
    defaultNavigationOptions: ({navigation}) => ({
      tabBarIcon: ({focused, tintColor}) => {
        const {routeName} = navigation.state;
        let iconName;

        if (routeName === 'spending') {
          iconName = focused
            ? require('../assets/icons/wallet.png')
            : require('../assets/icons/wallet-out.png');
        } else if (routeName === 'insights') {
          iconName = focused
            ? require('../assets/icons/bulb.png')
            : require('../assets/icons/bulb-out.png');
        } else if (routeName === 'saving') {
          iconName = focused
            ? require('../assets/icons/pig.png')
            : require('../assets/icons/pig-out.png');
        } else if (routeName === 'support') {
          iconName = focused
            ? require('../assets/icons/comment-out.png')
            : require('../assets/icons/comment-out.png');
        } else if (routeName === 'account') {
          iconName = focused
            ? require('../assets/icons/account-out.png')
            : require('../assets/icons/account-out.png');
        }
        return (
          <Image
            source={iconName}
            color={tintColor}
            style={{width: 25, height: 25}}
          />
        );
      },
    }),
  },
);

const AppNavigator = createStackNavigator(
  {
    App: tabNavigator,
  },
  {
    headerMode: 'none',
  },
);

export default createAppContainer(AppNavigator);
