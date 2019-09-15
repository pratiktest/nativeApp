import React, { Component } from 'react';
import { Container, Content, Button, Text, Spinner, Input, Form, Item } from 'native-base';

export default class Login extends Component {

  constructor(props){
    super(props);
    this.state= {username:"", password:""}
  }

  setUsername = (username)=> {
    this.setState({username})
  } 

  setPassword = (password) => {
    this.setState({password})
  }


  setCredentials = () => {
    const userNameFromState = this.state.username
    const passwordFromState = this.state.password
    this.props.saveFbCredentials(userNameFromState, passwordFromState)
    this.setState({username:"", password:""})
  }

  render(){
    return(
      <Container style={{flex:1}}>
        <Container style={{flex:1}}/>
        <Container style={{flex:3}}>
          <Content padder contentContainerStyle={{flex:1, alignItems:'center'}}>
            <Button small primary onPress={this.setCredentials}>
            <Text>Login with facebook</Text>
            </Button>
          </Content>
        </Container>
      </Container>
    )
  }
}