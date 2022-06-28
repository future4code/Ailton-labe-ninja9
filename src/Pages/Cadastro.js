import React, { Component } from 'react'
import axios from "axios"
import {axiosConfig, postJob_Url} from "../Constants/url"

export default class Cadastro extends Component {
  state={
    titlejob:"",
    descriptionjob:"",
    pricejob:"",
    paymentMethodsjob:[""],
    dueDatejob:""
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
      description:this.state.descriptionjob,
      price: parseInt(this.state.pricejob),
      paymentMethods:[this.state.paymentMethodsjob],
      dueDate:this.state.dueDatejob
    }
    axios.post(postJob_Url,body,axiosConfig)
    .then((response) => {
      alert(response.data.message);
      this.setState({titlejob:""})
      this.setState({descriptionjob:""})
      this.setState({pricejob:""})
      this.setState({dueDatejob:""})
    })
    .catch((error) => {
      alert(error.message);
    });
  }
  render() {
    return (
      <div>
        <h1>Cadastre o seu serviço </h1>
        {/* {this.state.titlejob}{this.state.descriptionjob}{this.state.pricejob}{this.state.paymentMethodsjob}{this.state.dueDatejob} */}
        <div>        
        <input value={this.state.titlejob} onChange={this.inputTitle}/>
        </div>
        <div>        
        <input value={this.state.descriptionjob} onChange={this.inputDescription}/>
        </div>
        <div>        
        <input type="number" value={this.state.pricejob} onChange={this.inputPrice}/>
        </div>
        <div>        
        <select name="pagamento"
          value={this.state.paymentMethodsjob}
          onChange={this.inputPaymentMethods}  >
            <option value="">Forma de Pagamento</option>
          <option value="Cartão de Credito">Cartão de Crédito</option>
          <option value="Cartão de Déditocs">Cartão de Dédito</option>
          <option value="Pix">Pix</option>
          <option value="PayPal">PayPal</option>
          <option value="Boleto">Boleto</option>
        </select>
        </div>
        <div>        
        <input type="date" value={this.state.dueDatejob} onChange={this.inputDueDate}/>
        </div>
        <div>        
        <button onClick={this.creatorJob}>Cadastar</button>
        </div>
      </div>
    )
  }
}
