import React, { Component } from 'react'
import { Text, View } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input } from 'react-native-elements';


export default class WhatIsYourUsernameScreen extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
        }
        this.onSubmit = this.onSubmit.bind(this)
        this.onChange = this.onChange.bind(this)
    }

    onSubmit(e) {
        e.preventDefault()
        this.props.onSubmit(this.state.username)
    }

    onChange(e) {
        this.setState({ username: e.target.value })
    }

    render() {
        return (
            <View>
                <Text> What is your Username?</Text>
                <Input
                    placeholder='BASIC INPUT'
                />

            </View>
        )
    }
}
