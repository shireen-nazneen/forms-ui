import React from 'react'
import './App.css';

function Forms() {
  return (
    <div>
      <header>
        <h1 className="hedding">Get  in touch </h1>
        <p className="content">fil  the contact form below and we will reach back to you  shortly</p></header>
      <div className="container">
        <form className="form">
          <div>
            <label className="lable">Name</label>
            <br></br>
            <input className="input" type="name" placeholder="name"></input>
          </div>
          <div>
            <label className="lable">contact</label>
            <br></br>
            <input className="inputcantact" type="contact" placeholder="conact"></input>
          </div>
          <div>
            <label className="lable">Desuganition</label>
            <input className="input" type="Desuganition" placeholder="Desuganition"></input>
            <br></br>
          </div>
          <div>
            <label className="lable">massage</label>
            <br></br>
            <input className="inputmsg" placeholder="massage"></input>
            <br></br>
          </div>
          <div className="submit2">
            <button className="submit">Submit</button>
          </div>
        </form>
      </div>
    </div>
  )
}
export default Forms;
