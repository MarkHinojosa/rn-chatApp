import React, { Component } from 'react'
import { Text, View } from 'react-native'

export class MessageList extends Component {
    componentDidMount(){
        console.log(Object.entries(this.props.messages))
    }
    render() {
        return (
            <View style={{width: "100%", height: "80%"}}>
                <Text style={{color: "red"}}> Message List </Text>
            </View>
        )
    }
}

export default MessageList
