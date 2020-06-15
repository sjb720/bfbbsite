import React from 'react';

export default class Index extends React.Component {

   constructor(props) {
       super(props)
       this.state ={
           name: "stephen"
       }
   }

  render() {
    return (
      <div>
        <h2>My name is {this.state.name}</h2>
      </div>
    )
  }
}