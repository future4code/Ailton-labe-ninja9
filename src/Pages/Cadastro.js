import React, { Component } from 'react'
import axios from "axios";
import { axiosConfig, postJob_Url } from "../Constants/url";
import styled from 'styled-components';

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

const Input = styled.input`
  width: 20vw;
  background-color: #5fa8d2;
  border: none;
  border-bottom: 1px solid white;
  ::placeholder, 
  ::-webkit-input-placeholder{
    color: white;
  }
  :-ms-input-placeholder{
    color:white;
  }
`
const InputDate = styled.input`
  background-color: #5fa8d2;
  color: white;
  border: 1px solid white;

`

const Select = styled.select`
  width: 180px;
  background-color: #5fa8d2;
  border: 1px solid white;
  border-radius: 3px;
  color:white;
`

const ButtonCadastro = styled.button`
  margin-top: 12px;
  height: 40px;
  width: 120px;
  background-color: #7ac1ed;
  color: white;
  border: none;
&:hover{
  background-color: #6cb4df;
  color: white;
}`

export default class Cadastro extends Component {
  
state = {
  titlejob: "",
  descriptionjob: "",
  pricejob: "",
  paymentMethodsjob: [""],
  dueDatejob: "",
};
inputTitle = (event) => {
  this.setState({ titlejob: event.target.value });
};
inputDescription = (event) => {
  this.setState({ descriptionjob: event.target.value });
};
inputPrice = (event) => {
  this.setState({ pricejob: event.target.value });
};
inputPaymentMethods = (event) => {
  this.setState({ paymentMethodsjob: event.target.value });
};
inputDueDate = (event) => {
  this.setState({ dueDatejob: event.target.value });
};
creatorJob = () => {
// state={
//   titlejob:"",
//   descriptionjob:"",
//   pricejob:"",
//   paymentMethodsjob:[],
//   dueDatejob:""
// }
}
inputTitle = (event) =>{
  this.setState({titlejob:event.target.value});
}
inputDescription = (event) =>{
  this.setState({descriptionjob:event.target.value});
}
inputPrice = (event) =>{
  this.setState({pricejob:event.target.value});
}
inputPaymentMethods = (event) =>{
  this.setState({paymentMethodsjob:event.target.value});
}
inputDueDate = (event) =>{
  this.setState({dueDatejob:event.target.value});
}
creatorJob =()=>{
  
  const body = {
    title: this.state.titlejob,
    description: this.state.descriptionjob,
    price: parseInt(this.state.pricejob),
    paymentMethods: [this.state.paymentMethodsjob],
    dueDate: this.state.dueDatejob,
  };
  axios
    .post(postJob_Url, body, axiosConfig)
    .then((response) => {
      alert(response.data.message);
      this.setState({ titlejob: "" });
      this.setState({ descriptionjob: "" });
      this.setState({ pricejob: "" });
      this.setState({ dueDatejob: "" });
    })
    .catch((error) => {
      alert(error.message);
    });
};

  render() {
    return (
      <Container>
        <Titulo>Cadastre o seu serviço </Titulo>
        {/* {this.state.titlejob}{this.state.descriptionjob}{this.state.pricejob}{this.state.paymentMethodsjob}{this.state.dueDatejob} */}
        <div>
          <Input
           value={this.state.titlejob}
           placeholder="Título do trabalho"
           onChange={this.inputTitle} />
        </div>
        <div>
          <Input
            value={this.state.descriptionjob}
            placeholder="Descrição do trabalho"
            onChange={this.inputDescription}
          />
        </div>
        <div>
          <Input
            type="number"
            value={this.state.pricejob}
            onChange={this.inputPrice}
            placeholder="Preço"
          />
        </div>
        <div>
          {/* <select
            name="pagamento"
            // value={this.state.paymentMethodsjob}
            onChange={this.inputPaymentMethods}
          /> */}
        </div>
        <div>        
        <Select name="pagamento"
          
          onChange={this.inputPaymentMethods}  >
            <option value="">Forma de Pagamento</option>
            <option value="Cartão de Credito">Cartão de Crédito</option>
            <option value="Cartão de Déditocs">Cartão de Dédito</option>
            <option value="Pix">Pix</option>
            <option value="PayPal">PayPal</option>
            <option value="Boleto">Boleto</option>
          </Select>
        </div>
        <div>
          <InputDate
            type="date"
            value={this.state.dueDatejob}
            onChange={this.inputDueDate}
          />
        </div>
        <div>
          <ButtonCadastro onClick={this.creatorJob}>Cadastar</ButtonCadastro>
          {/* <button onClick={this.props.mudaHome}>Home</button> */}
        </div>
      </Container>
    )
  }
}
