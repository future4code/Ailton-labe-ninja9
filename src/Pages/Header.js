import React, { Component } from 'react'
import styled from 'styled-components'

const Container = styled.div `
    margin: 8px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export default class Header extends Component {
  render() {
    return (
    <Container>
        <button onClick={this.props.mudaHome}> Home </button>
        <button> Carrinho </button>
    </Container>
    )
  }
}
