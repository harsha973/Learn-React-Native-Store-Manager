import React from 'react';
import { View } from 'react-native';

const CardSection = (props) => (
    <View style={[styles.containerStyle, props.style]}>
      {props.children}
    </View>
);

const styles = {
  containerStyle: {
    padding: 5,
    borderBottomWidth: 1,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    borderColor: '#ddd',
    position: 'relative'
  }
};

export { CardSection };
