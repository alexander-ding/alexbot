import {Launcher} from 'react-chat-window';
import React from 'react';

export default class Chat extends React.Component {
    constructor() {
      super();
      this.state = {
        messageList: []
      };
    }
    
    componentDidMount() {
      fetch("https://alex-bot-api.herokuapp.com/").then(function() {
        console.log("Initialized");
      });
    }
    _onMessageWasSent(_sendMessage) {
      return function(message) {
        this.setState({
          messageList: [...this.state.messageList, message]
        });
        fetch("https://alex-bot-api.herokuapp.com/Chat", {
          method: "POST",
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({msg: message.data.text})
        }).then(function(response) {
          return response.json();
        }).then(function(data) {
          _sendMessage(data.data);
        });
      }
    };
    
    _onFilesSelected(fileList) {
      this._sendMessage("Sorry! I don't take files.");
    }
    _sendMessage(text) {
      this.setState({
        messageList: [...this.state.messageList, {
          author: 'them',
          type: 'text',
          data: { text }
        }]
      })
    }
   
    render() {
      return (<div>
        <Launcher
          agentProfile={{
            teamName: 'Alex (Bot)',
            imageUrl: 'https://i.imgur.com/OoTr0Jm.jpg'
          }}
          onMessageWasSent={this._onMessageWasSent(this._sendMessage.bind(this)).bind(this)}
          onFilesSelected={this._onFilesSelected.bind(this)}
          messageList={this.state.messageList}
          showEmoji={false}
          isOpen
        />
      </div>)
    }
  }