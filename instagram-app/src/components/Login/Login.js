import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';


class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          username: '',
          password: ''
        };
      }
    
      handleInputChanges = e => {
        this.setState({ [e.target.name]: e.target.value });
      };
    
      handleLogin = e => {
        const user = this.state.username;
        localStorage.setItem('user', user);
        window.location.reload();
      };
    
    render() {
        return (
          <Form inline onSubmit={this.hangleLogin}>
            <FormGroup>
              <Label for="username" hidden>Username</Label>
              <Input type="text" name="username" id="username" placeholder="Username" value={this.state.username} onChange={this.handleInputChanges} />
            </FormGroup>
            {' '}
            <FormGroup>
              <Label for="examplePassword" hidden>Password</Label>
              <Input type="password" name="password" id="examplePassword" placeholder="Password" value={this.state.password} onChange={this.handleInputChanges} />
            </FormGroup>
            {' '}
            <Button>Submit</Button>
          </Form>
        );
      }
}