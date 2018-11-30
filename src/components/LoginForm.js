import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import {
   CardSection, Input, Button, Spinner
  } from './common';
import { emailChanged, passwordChanged, loginUser } from '../actions';

class LoginForm extends Component {

  onEmailChange(text) {
      this.props.emailChanged(text);
  }

  onPasswordChange(text) {
    this.props.passwordChanged(text);
  }

  onPress() {
    const { email, password } = this.props;
    this.props.loginUser({ email, password });
  }

  renderError() {
    if (this.props.error) {
      return (
        <View style={{ backgroundColor: 'white' }}>
          <Text style={styles.errorTextStyle}>
            {this.props.error}
          </Text>
        </View>
      );
    }
  }

  renderLoginButton() {
    if (this.props.loading) {
      return (<Spinner size='large' />);
    }

    return (
        <Button onPress={this.onPress.bind(this)} >
          Login
       </Button>
    );
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
            value={this.props.password}
            onChangeText={this.onPasswordChange.bind(this)}
          />
        </CardSection>

        {this.renderError()}
        <CardSection>
          {this.renderLoginButton()}
        </CardSection>
      </View>
    );
  }
}

const mapStateToProps = state => ({
    email: state.auth.email,
    password: state.auth.password,
    user: state.auth.user,
    error: state.auth.error,
    loading: state.auth.loading
  });

export default connect(mapStateToProps, { emailChanged, passwordChanged, loginUser })(LoginForm);

const styles = {
  errorTextStyle: {
    color: 'red',
    fontSize: 20,
    alignSelf: 'center'
  }
};
