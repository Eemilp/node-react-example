/******** DO NOT DELETE THESE LINES ********/

import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import moment from  'moment'

import './assets/stylesheets/style.css'

const baseURL = "http://95.216.143.29";

/****** ADD YOUR CODE AFTER THIS LINE ******/

const getChats = async () => {
  try {
    const url = `${baseURL}/api/chats`
    const response = await fetch(url);
    return response.json()
  } catch (error) {
    console.error(error);
  }
  return { greeting :"Could not get chats from backend"};
};


const Chats = (props) => {
  console.log(props.chats)
  const ChatList = props.chats.map(c => <li><b>Temperature:</b> {Math.round(parseFloat(c.message))}°C Time: moment.{c.createdAt}</li>);
  return <ul>{ChatList}</ul>; 
};

class App extends Component {
  state = { chats: [] }

  async componentWillMount() {
    const response = await getChats();
    this.setState({ chats: response.results });
  }

  render() {
    return <Chats chats={this.state.chats} />;
  }
}

/****** DO NOT DELETE AFTER THIS LINE ******/

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
