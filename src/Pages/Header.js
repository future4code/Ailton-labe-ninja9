import React, { Component } from 'react'
import styled from 'styled-components'

const Container = styled.div `
  background-color: #7ac1ed;
  height: 5vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const ButtonHeader = styled.button`
  padding: 25px;
  background-color: #7ac1ed;
  color: white;
  border: none;
&:hover{
  background-color: #5fa8d2;
  color: white;
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
