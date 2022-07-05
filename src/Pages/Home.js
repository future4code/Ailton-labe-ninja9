import React, { Component } from 'react'
import styled from 'styled-components'

const Container = styled.div `
  background-color: #5fa8d2;
  height: 95vh;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
`
const Titulo = styled.h1`
  color: white;
  margin-top: 20vh;
`

const DivButton = styled.div `
  display: flex;
  gap: 15px;
`

const ButtonHome = styled.button`
  height: 50px;
  width: 200px;
  background-color: #7ac1ed;
  color: white;
  border: none;
&:hover{
  background-color: #6cb4df;
  color: white;
}`

export default class Home extends Component {
  render() {
    return (
        <Container>
        <Titulo>Home</Titulo>
        <DivButton>
          <ButtonHome onClick={this.props.mudaCadastro}>Cadastre seu serviço</ButtonHome>
          <ButtonHome onClick={this.props.mudaJobs}>Serviços disponíveis</ButtonHome>
        </DivButton>
      </Container>
    )
  }
}
