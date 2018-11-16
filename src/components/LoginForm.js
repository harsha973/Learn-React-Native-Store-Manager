import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import { CardSection, Input, Button } from './common';
import { emailChanged } from '../actions';

class LoginForm extends Component {

  onEmailChange(text) {
      this.props.emailChanged(text);
  }

  render() {
    return (
      <View>
        <CardSection>
          <Input
            label='Email'
            onChangeText={this.onEmailChange.bind(this)}
            value={this.props.email}
          />
        </CardSection>

        <CardSection>
          <Input
            secureTextEntry
            label="Password"
          />
        </CardSection>

        <CardSection>
          <Button>Login</Button>
        </CardSection>
      </View>
    );
  }
}

const mapStateToProps = state => {
  return { email: state.auth.email };
};

export default connect(mapStateToProps, { emailChanged })(LoginForm);
