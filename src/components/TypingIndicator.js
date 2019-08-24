import React, { Component } from 'react'
import { Text, View } from 'react-native'

class TypingIndicator extends Component {

    render() {
        console.log(this.props);
        if (this.props.usersWhoAreTyping.length > 0) {
            return (
                <View>
                    {`${this.props.usersWhoAreTyping
                        .slice(0, 2)
                        .join(' and ')} is typing`}
                </View>
            )
        } else {
            return (
                <View>
                    <Text>Nobody is typing</Text>
                </View>
            )
        }

    }
}

export default TypingIndicator
