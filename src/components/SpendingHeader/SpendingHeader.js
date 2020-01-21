import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

const paymentIcon = require('../../assets/icons/payment.png');
const addMoneyIcon = require('../../assets/icons/addmoney.png');

const SpendingHeader = () => (
  <View style={styles.wrapper}>
    <View style={styles.payments}>
      <Image source={paymentIcon} style={{width: 30, height: 30}} />
    </View>
    <View style={styles.mid}>
      <Text style={styles.balanceVal}>£870.10</Text>
      <Text style={styles.balanceText}>Balance</Text>
    </View>
    <View style={styles.addMoney}>
      <Image source={addMoneyIcon} style={{width: 30, height: 30}} />
    </View>
  </View>
);

const styles = StyleSheet.create({
  wrapper: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 10,
  },
  payments: {
    paddingLeft: 30,
  },
  mid: {
    textAlign: 'center',
  },
  addMoney: {
    paddingRight: 30,
  },
  balanceVal: {
    color: '#585858',
    fontWeight: '800',
    fontSize: 25,
  },
  balanceText: {
    color: '#585858',
    textAlign: 'center',
    fontSize: 18,
  },
});

export default SpendingHeader;
