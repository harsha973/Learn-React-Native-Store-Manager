import React from 'react';
import { View, Text, Modal } from 'react-native';
import { CardSection } from './CardSection';
import { Button } from './Button';

const Confirm = ({ children, onAccept, onDecline, visible }) => {
  return (
    <Modal
      visible={visible}
      transparent
      animationType='slide'
      onRequestClose={() => {}}
    >
      <View style={styles.containerStyle}>
        <CardSection style={styles.titleCardSectionStyle}>
          <Text styles={styles.titleTextStyle}>{children}</Text>
        </CardSection>
        <CardSection>
          <Button onPress={onAccept}>Yes</Button>
          <Button onPress={onDecline}>No</Button>
        </CardSection>
      </View>
    </Modal>
  );
};

const styles = {
  containerStyle: {
    backgroundColor: 'rgba(0, 0, 0, 0.75)',
    position: 'relative',
    justifyContent: 'center',
    padding: 20,
    flex: 1
  },
  titleCardSectionStyle: {
    justifyContent: 'center',
  },
  titleTextStyle: {
    lineSpacing: 40,
    fontSize: 18,
    textAlign: 'center',
    flex: 1
  }
};

export { Confirm };
