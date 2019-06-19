import { Widget, addResponseMessage, addUserMessage, addLinkSnippet, renderCustomComponent} from 'react-chat-widget';
import 'react-chat-widget/lib/styles.css';
import React from 'react';
import logo from "./Profile Pic.jpg";
import {MdPlayArrow} from "react-icons/md";
import Button from 'react-bootstrap/Button';


import './App.css';


const API_URL = "https://alex-bot-api.herokuapp.com/";

function autoChat(props) {
  return <div className="rcw-response">
    <div className="rcw-message-text">
      <p>Oh, yes, you can also watch two bots (someone else and me) talk to each other</p>
      <p><Button variant="outline-dark" size="sm" onClick={()=>{
        props.handleAutoChat();
      }}>Try it Now<MdPlayArrow/></Button><br></br><small>(or type "AUTOCHAT")</small>
      </p>
      
    </div>  
  </div>
}

class App extends React.Component {
  constructor() {
    super();
    
    this.state = {
      isAutoChat: false,
    };
    
    this.handleNewUserMessage = this.handleNewUserMessage.bind(this);
    this.handleAutoChat = this.handleAutoChat.bind(this);
  }
  
  componentDidMount() {
    fetch(API_URL).then(function() {
      console.log("Initialized");
    });

    // start in full screen
    const button = document.getElementsByClassName("rcw-launcher")[0];
    button.click();
    
    // credit
    addResponseMessage("Hi! I'm Alex Bot, a chat bot made to imitate the way my maker talks in real chat.\n\nYou can start chatting with me here, and feel free to check out my source code!")
    addLinkSnippet({
      title: 'My source code',
      link: 'https://github.com/alexding123/alexbot',
    });
    renderCustomComponent(autoChat, {handleAutoChat:this.handleAutoChat}, true);
  }

  handleAutoChat() {
    if (this.state.isAutoChat) {
      return;
    }
    addResponseMessage("```The following is AutoChat```\n```Send \"STOP\" to stop this at any time```");
    function alexChat(text) {
      if (!this.state.isAutoChat) {
        return;
      }
      fetch(API_URL+"ChatAlex", {
        method: "POST",
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({msg: text})
      }).then(function(response) {
        return response.json();
      }).then(function(data) {
        addResponseMessage("```"+data.data+"```");
        setTimeout(() => otherChat(data.data),
        1000);
      });
    }

    function otherChat(text) {
      if (!this.state.isAutoChat) {
        return;
      }
      fetch(API_URL+"ChatOther", {
        method: "POST",
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({msg: text})
      }).then(function(response) {
        return response.json();
      }).then(function(data) {
        addUserMessage("```"+data.data+"```");
        setTimeout(() => alexChat(data.data),
        1000);
        
      });
    }
    // eslint-disable-next-line
    alexChat = alexChat.bind(this);
    // eslint-disable-next-line
    otherChat = otherChat.bind(this);

    this.setState({
      isAutoChat: true,
    }, 
    () => alexChat('hi'));
  }

  stopAutoChat() {
    this.setState({
      isAutoChat: false,
    });

    addResponseMessage("```STOP signal received```\n```AutoChat terminated```")
  }

  handleNewUserMessage(userMsg) {
    if (userMsg === "STOP" && this.state.isAutoChat) {
      this.stopAutoChat();
      return;
    } else if (userMsg === "AUTOCHAT" && !this.state.isAutoChat) {
      this.handleAutoChat();
      return;
    }
    fetch(API_URL+"ChatAlex", {
      method: "POST",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({msg: userMsg})
    }).then(function(response) {
      return response.json();
    }).then(function(data) {
      addResponseMessage(data.data);
    });
  }

 
  render() {
    return (<div className="app">
       <Widget
        title="Alex Bot"
        subtitle="Having a nice day coding"
        handleNewUserMessage={this.handleNewUserMessage}
        profileAvatar={logo}
        showCloseButton={false}
      />
    </div>)
  }
}

export default App;
