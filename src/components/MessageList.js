import React, { Component } from 'react'
import { Text, View } from 'react-native'

export class MessageList extends Component {

    constructor() {
        super()
        this.state = {
            messages: ''
        }
      }

    componentDidMount(){
            this.setState({
                messages: this.props.messages
            }, ()=> console.log(this.state.messages))
        }

    render() {
        return (
            <View style={{width: "100%", height: "80%"}}>
                <Text style={{color: "red"}}> {this.props.messages.map(message => message.text )} </Text>
            </View>
        )
    }
}

export default MessageList
