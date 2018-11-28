import React, { Component } from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import firebase from '@firebase/app';
import reducers from './reducers';
import LoginForm from './components/LoginForm';

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

    firebase.initializeApp(config);
  }

  render() {
    return (
      <Provider store={createStore(reducers)}>
        <View>
          <LoginForm />
        </View>
      </Provider>
    );
  }
}

export default App;
