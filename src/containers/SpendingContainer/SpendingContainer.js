import React, {useState} from 'react';
import {
  View,
  ImageBackground,
  Image,
  SafeAreaView,
  StyleSheet,
  Dimensions,
} from 'react-native';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';
import SpendingHeader from '../../components/SpendingHeader/SpendingHeader';

const FirstRoute = () => (
  <View style={[styles.scene]}>
    <Image
      source={require('../../assets/img/allspend.png')}
      style={{width: 378, height: 145}}
    />
  </View>
);

const SecondRoute = () => (
  <View style={[styles.scene]}>
    <ImageBackground
      source={require('../../assets/img/tab_cat.jpg')}
      style={{width: '100%', height: '100%'}}
    />
  </View>
);

const ThirdRoute = () => (
  <View style={[styles.scene]}>
    <ImageBackground
      source={require('../../assets/img/tab_retail.jpg')}
      style={{width: '100%', height: '100%'}}
    />
  </View>
);

const SpendingContainer = () => {
  const [mytab, setMytab] = useState({
    index: 0,
    routes: [
      {key: 'first', title: 'All spending'},
      {key: 'second', title: 'Categories'},
      {key: 'third', title: 'Retailers'},
    ],
  });

  const renderTabBar = props => (
    <TabBar
      {...props}
      indicatorStyle={{backgroundColor: '#0291e1'}}
      style={{ backgroundColor: '#ffffff', fontWeight: 700}}
      activeColor={'#2c73af'}
      inactiveColor={'#6f6f6f'}
      labelStyle={{
        fontSize: 16,
        fontWeight: '600',
        textTransform: 'capitalize',
      }}
    />
  );

  return (
    <SafeAreaView style={styles.safeArea} forceInset={{top: 'never'}}>
      <View style={styles.container}>
        <View style={styles.header}>
          <SpendingHeader />
        </View>
        <View style={styles.body}>
          <TabView
            renderTabBar={renderTabBar}
            navigationState={mytab}
            swipeEnabled={false}
            renderScene={SceneMap({
              first: FirstRoute,
              second: SecondRoute,
              third: ThirdRoute,
            })}
            onIndexChange={index => setMytab({...mytab, index})}
            initialLayout={{
              width: Dimensions.get('window').width,
              backgroundColor: '#f8f8f8',
            }}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  container: {
    flex: 1,
  },
  header: {
    backgroundColor: '#ffffff',
    flex: 1,
  },
  body: {
    backgroundColor: '#f8f8f8',
    flex: 5,
  },
  scene: {
    flex: 1,
  },
});

export default SpendingContainer;
