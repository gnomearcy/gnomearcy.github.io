import React, { Component } from 'react'
import Radium from 'radium'
import Media from 'react-media'

import form from './style'
import mq from '../../style/media_queries'
import grid from '../../style/grid'
import data from '../data'
import style from './style'
import {name_errors, email_errors, message_errors} from './error_messages'

import RequiredFieldMessage from './RequiredFieldMessage'

const error_keys = {
  name: "key_invalid_name",
  email: "key_invalid_email",
  message: "key_invalid_message"
}

class Form extends Component{

  constructor(props){
    super(props);
    this.sendMessage = this.sendMessage.bind(this);

    this.state = {
      [error_keys.name]: undefined,
      [error_keys.email]: undefined,
      [error_keys.message]: undefined
    }
  }

  sendMessage() {

    // ===== value gathering =====
    let name = this.name.value.trim()
    let email = this.email.value.trim()
    let message = this.message.value.trim()
    let newState = {}

    // ===== value validation =====
    if(name.length === 0){
      newState[error_keys.name] = name_errors.empty
    }

    if(email.length === 0){
      newState[error_keys.email] = email_errors.empty
    } else {

      RegExp.quote = function(str) {
          return (str+'').replace(/[.?*+^$[\]\\(){}|-]/g, "\\$&");
      };

      var regex_literal = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/
      var re = new RegExp(regex_literal);
      if(re.test(email) == false){
        newState[error_keys.email] = email_errors.invalid
      }
    }

    if(message.length === 0){
      newState[error_keys.message] = message_errors.empty
    }


    // ===== validation result handling =====
    // Check if any errors have been spotted
    let isEmpty = true;
    for(var key in newState){
      if(newState.hasOwnProperty(key)){
        isEmpty = false;
        break;
      }
    }


    if(isEmpty){
      console.log("Sending message - everything is fine");
      const subject = "Portofolio message"
      const body = `
        From ${name.trim().length > 0 ? name : "unknown"}
        at (${email.trim().length > 0 ? email : "unknown"}):
        ${message.length > 0 ? message : "empty message"}
      `;

      let template = `
        mailto:tmartincic314@gmail.com?subject=${subject}
        &body=${body}
      `
      window.open(template);
    }
    else{
      console.log("Sending message - rendering error states");
      // Re-render the UI with new error messages
      console.log(newState);
      this.setState({
        [error_keys.name]: newState[error_keys.name],
        [error_keys.email]: newState[error_keys.email],
        [error_keys.message]: newState[error_keys.message]
      })
    }
  }

  render()
  {
    console.log(this.state);
    return (
      <div
        id="contact_form"
        style={style.form}>

        <div
          id="name_wrapper"
          key="name_wrapper"
          style={style.name.container}>
            <input
              ref={name => this.name = name}
              key="name_input"
              style={style.name.input}
              placeholder={data.form.name_hint}/>
            <RequiredFieldMessage message={this.state[error_keys.name]}/>
        </div>

        <div
          id="email_wrapper"
          key="email_wrapper"
          style={style.email.container}>
            <input
              ref={email => this.email = email}
              key="email_input"
              style={style.email.input}
              placeholder={data.form.name_hint}/>
            <RequiredFieldMessage message={this.state[error_keys.email]}/>
        </div>

        <div
          id="message_wrapper"
          style={style.message.container}>
            <textarea
              ref={message => this.message = message}
              key="message_input"
              placeholder={data.form.message_hint}
              style={style.message.input}/>
            <RequiredFieldMessage message={this.state[error_keys.message]}/>
        </div>

        <div
          id="send_button"
          key="send_button"
          style={style.button}
          onClick={this.sendMessage}>
            {data.form.send_hint}
        </div>
      </div>
    )
  }
}

export default Radium(Form)
