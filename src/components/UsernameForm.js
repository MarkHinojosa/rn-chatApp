import React, { Component } from 'react'
import { Text, View, TextInput } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input } from 'react-native-elements';

export default class UsernameForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
        }
    }

    _onSubmit = (e) => {
        console.log(this.state);
        e.preventDefault();
        this.props.onSubmit(this.state.username);
    }

    _onChange(e) {
        this.setState({ username: e })
    }

    render() {
        return (
            <View>
                <Text> What is your Username?</Text>
                
                <TextInput
                placeholder="Your Full Name"
                    onChangeText={(f) => this._onChange(f)}
                    onSubmitEditing={this._onSubmit}
                />

            </View>
        )
    }
}
