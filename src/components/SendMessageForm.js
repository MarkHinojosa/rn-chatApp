import React, { Component } from 'react'
import { Text, View, TextInput } from 'react-native'

export class SendMessageForm extends Component {
    constructor(){
        super()
        this.state={
            message: ''
        }
    }

    _onChange = (t) => {
        this.props.onChange()
        this.setState({message: t}, console.log(this.state));
    }

    _onSubmit = (e) => {
        e.preventDefault();
        this.props.onSubmit(this.state.message);
    }

    render() {
        return (
            <View stle={{borderColor: 'black', borderWidth: 3, width: '80%'}}>
                <TextInput
                onChangeText={(t) => this._onChange(t)}
                onSubmitEditing={this._onSubmit}
                style={{
                    borderColor: 'gray',
                    borderWidth: 3,
                    width: '100%'
                }}
                />
            </View>
        )
    }
}

export default SendMessageForm
