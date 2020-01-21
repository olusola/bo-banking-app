import React from 'react';
import {View, ImageBackground, StyleSheet} from 'react-native';

const InsightContainer = () => {
  return (
    <View style={[styles.scene]}>
      <ImageBackground
        source={require('../../assets/img/screen_insight.jpg')}
        style={{ width:'100%', height:'100%' }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  scene: {
    flex: 1,
  },
});

export default InsightContainer;
