
import React, { Fragment, Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import UsernameForm from './src/components/UsernameForm';
import axios from 'axios';

class App extends Component {

  constructor() {
    super()
    this.state = {
      currentUsername: '',
      currentScreen: 'WhatIsYourUsernameScreen'
    }
    this.onUsernameSubmitted = this.onUsernameSubmitted.bind(this)
  }

  onUsernameSubmitted = (username) => {
    console.log("running on username submitted");

    // return( fetch('http://localhost:3001/users', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify({ username }),
    // })
      // .then(response => {
      //   this.setState({
      //     currentUsername: username,
      //     currentScreen: 'ChatScreen'
      //   })
      // })
      // .catch(error => console.error('error', error))

      axios.post('http://localhost:3001/users', {
        username: username
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  currentScreen = () => {
    if (this.state.currentScreen === "WhatIsYourUsernameScreen") {
      return <UsernameForm onSubmit={this.onUsernameSubmitted} />
    }
    // if (this.state.currentScreen === 'ChatScreen') {
    //   return <ChatScreen currentUsername={this.state.currentUsername} />
    // }

  }

  render() {
    return (
      < View >
        {this.currentScreen()}
      </View >
    )
  }
}




const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
