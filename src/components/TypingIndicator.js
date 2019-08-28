import React, { Component } from 'react'
import { Text, View } from 'react-native'

class TypingIndicator extends Component {

    whatToReturn = () => {
        if (this.props.usersWhoAreTyping.length > 0) {
            return (
                <View>
                    <Text style={{textAlign: 'center'}}>
                        {`${this.props.usersWhoAreTyping
                            .slice(0, 2)
                            .join(' and ')} is typing`}
                    </Text>
                </View>
            )
        } else {
            return (
                <View>
                    {/* <Text>Nobody is typing</Text> */}
                </View>
            )
        }
    }

    render() {
        return (
            <View style={{ height: "5%", justifyContent: 'center', alignContent: 'center' }}>
                {this.whatToReturn()}
            </View>
        )
    }
}

export default TypingIndicator
