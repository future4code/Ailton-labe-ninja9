import React, { Component } from 'react'
import styled from 'styled-components'

const Container = styled.div `
  background-color: #5fa8d2;
  padding: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export default class Header extends Component {
  render() {
    return (
    <Container>
        <a href='{this.props.mudaHome}'> Home </a>
        <a href=''> Carrinho </a>
    </Container>
    )
  }
}
