import React, { Component } from 'react'
import { Text, View } from 'react-native'

class TypingIndicator extends Component {

    render() {
        if (this.props.usersWhoAreTyping.length > 0) {
            return (
                <View>
                    <Text>
                        {`${this.props.usersWhoAreTyping
                            .slice(0, 2)
                            .join(' and ')} is typing`}
                    </Text>
                </View>
            )
        } 
    }
}

export default TypingIndicator
