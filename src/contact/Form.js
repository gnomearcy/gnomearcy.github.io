import React, { Component } from 'react'
import style from './contact_style'
import data from './data'
import mq from '../style/media_queries'
import Media from 'react-media'
import Radium from 'radium'

const name_key = "contact_name";
const email_key = "contact_email";
const message_key = "contact_message";

class Form extends Component{

  constructor(props){
      super(props);
      this.sendMessage = this.sendMessage.bind(this);
  }

  sendMessage(){
    let name =  document.getElementById(name_key);
    let email = document.getElementById(email_key);
    let message = document.getElementById(message_key);
  }

  markup(key_suffix,
        form_style,
        name_style,
        email_style,
        message_style,
        send_style)
  {
    return (<div
      id={`contact_form_${key_suffix}`}
      style={form_style}>
        <input
          id="name"
          key={`name_${key_suffix}`}
          placeholder={data.form.name_hint}
          style={name_style}/>

        <input
          id="email"
          key={`email_${key_suffix}`}
          placeholder={data.form.email_hint}
          style={email_style}/>

        <textarea
          id="message"
          key={`message_${key_suffix}`}
          placeholder={data.form.message_hint}
          style={message_style}/>

        <div
          id="send_button"
          key={`send_button_${key_suffix}`}
          style={send_style}
          onClick={this.sendMessage}>
            {data.form.send_hint}
        </div>
    </div>)
  }

  render()
  {
    return(
      <div>
        <Media query={mq.mobile_query}>
          {this.markup(
            "mobile",
            style.form.mobile,
            style.form.name.mobile,
            style.form.email.mobile,
            style.form.message.mobile,
            style.form.send.mobile
          )}
        </Media>
        <Media query={mq.desktop_query}>
        {this.markup(
          "desktop",
          style.form.desktop,
          style.form.name.desktop,
          style.form.email.desktop,
          style.form.message.desktop,
          style.form.send.desktop
        )}
        </Media>
      </div>
    )
  }
}

export default Radium(Form)
