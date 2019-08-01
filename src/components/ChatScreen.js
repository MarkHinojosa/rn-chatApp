import React, { Component } from 'react'
import { Text, View } from 'react-native'
import Chatkit from '@pusher/chatkit-client';
import WhosOnlineList from './WhosOnlineList';
import MessageList from './MessageList';
import TypingIndicator from './TypingIndicator';
import SendMessageForm from './SendMessageForm';

export default class ChatScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentUser: {},
            currentRoom: {},
            messages: [],
            usersWhoAreTyping: [],
        }
        // this.sendMessage = this.sendMessage.bind(this)
        // this.sendTypingEvent = this.sendTypingEvent.bind(this)
    }

    componentDidMount() {

        const chatManager = new Chatkit.ChatManager({
            instanceLocator: 'v1:us1:a8cbb16b-0c43-46f6-851b-976d04bb843b',
            userId: this.props.currentUsername,
            tokenProvider: new Chatkit.TokenProvider({
                url: 'http://10.0.3.2:3001/authenticate'
            })
        })

        chatManager
            .connect()
            .then(currentUser => {
                this.setState({ currentUser })
                return currentUser.subscribeToRoom({
                    roomId: '19893490',
                    messageLimit: 100,
                    hooks: {
                        onMessage: message => {
                            this.setState({
                                messages: [...this.state.messages, message],
                            })
                        },
                        onUserStartedTyping: user => {
                            console.log(user);
                            this.setState({
                                usersWhoAreTyping: [...this.state.usersWhoAreTyping, user.name],
                            }, () => console.log(this.state.usersWhoAreTyping))
                        },
                        onUserStoppedTyping: user => {
                            this.setState({
                                usersWhoAreTyping: this.state.usersWhoAreTyping.filter(
                                    username => username !== user.name
                                ),
                            })
                        },
                    },
                })
            })
            .then(currentRoom => {
                this.setState({ currentRoom }, () => console.log(this.state.currentRoom, "current room"))
            })
            .catch(error => console.error('error', error))
    }

    // sendMessage(text) {
    //     this.state.currentUser.sendMessage({
    //         text,
    //         roomId: this.state.currentRoom.id
    //     })
    // }

    // sendTypingEvent = () => {
    //     console.log(this.state.currentRoom.id)
    //     this.state.currentUser
    //         .isTypingIn({ roomId: this.state.currentRoom.id })
    //         .catch(error => console.error('error', error))
    // }

    render() {
        return (
            <View>
                <View style={{ width: "100%", height: '100%', borderWidth: 3, borderColor: "black", flexDirection: 'row' }}>
                    <WhosOnlineList
                        users={this.state.currentRoom.users}
                    />
                    <View style={{ flexDirection: 'column' }}>
                        <MessageList
                         messages={this.state.messages}/>
                        <TypingIndicator />
                        <SendMessageForm />
                    </View>
                </View>
            </View>
        )
    }
}
