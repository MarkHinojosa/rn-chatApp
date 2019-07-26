import React, { Component } from 'react'
import { Text, View, TextInput } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input } from 'react-native-elements';

export default class UsernameForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: 'x',
        }
    }

    _onSubmit = (e) => {
        console.log(this.state, "submitting username")
        // e.preventDefault()
        this.props.onSubmit(this.state.username)
    }

    _onChange(e) {
        this.setState({ username: e }, () => console.log(this.state))
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
