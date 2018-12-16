import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import firebase from '@firebase/app';
import reducers from './reducers';
import Router from './Router';

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
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

export default App;
