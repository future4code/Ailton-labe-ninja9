import React, { Component } from 'react'

export default class Home extends Component {
  render() {
    return (
        <div>
        <p>Home</p>
        <button onClick={this.props.mudaCadastro}>Tela cadastro</button>
        <button onClick={this.props.mudaJobs}>Tela jobs</button>
      </div>
    )
  }
}
