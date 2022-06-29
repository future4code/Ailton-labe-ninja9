import React, { Component } from 'react'
import styled from 'styled-components'

const Container = styled.div `
  background-color: #5fa8d2;
  padding: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const ButtonHeader = styled.button`
  background-color: #5fa8d2;
  color: white;
  border: none;
&:hover{
  background-color: white;
  color:#5fa8d2;
}
`

export default class Header extends Component {
  render() {
    return (
    <Container>
        <ButtonHeader onClick={this.props.mudaHome}> Home </ButtonHeader>
        <ButtonHeader href=''> Carrinho </ButtonHeader>
    </Container>
    )
  }
}
