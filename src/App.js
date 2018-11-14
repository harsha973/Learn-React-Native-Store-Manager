import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import firebase from 'firebase';
import reducers from './reducers';

class App extends Component {

  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyAYqneeQNZskCn66brry3MBuua6W3qgkGs',
      authDomain: 'react-learn-manager.firebaseapp.com',
      databaseURL: 'https://react-learn-manager.firebaseio.com',
      projectId: 'react-learn-manager',
      storageBucket: 'react-learn-manager.appspot.com',
      messagingSenderId: '644520366005'
    };

    firebase.initalizeApp(config);
  }

  render() {
    return (
      <Provider store={createStore(reducers)}>
        <View>
          <Text>Hello</Text>
        </View>
      </Provider>
    );
  }
}

export default App;
