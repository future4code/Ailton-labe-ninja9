import React, { Component } from "react";
import axios from "axios";
import { axiosConfig, postJob_Url } from "../Constants/url";
import Filters from "./Filters";
import Header from "./Header";

export default class Jobs extends Component {
  state = {
    listaJobs: [],
    buscaJobs: "",
    valorMaximo: +Infinity,
    valorMinimo: -Infinity,
  };
  onChangeOrdenacao = (event) => {
    if (event.target.value === "crescente") {
      this.setState({
        listaJobs: this.state.listaJobs.sort((a, b) => a.price - b.price),
      });
    } else if (event.target.value === "decrescente") {
      this.setState({
        listaJobs: this.state.listaJobs.sort((a, b) => b.price - a.price),
      });
    } else if (event.target.value === "titulo") {
      this.setState({
        listaJobs: this.state.listaJobs.sort((a, b) => {
          let x = a.title.toLowerCase();
          let y = b.title.toLowerCase();

          return x === y ? 0 : x > y ? 1 : -1;
        }),
      });

      if (event.target.value === "prazo") {
        this.setState({
          listaJobs: this.state.listaJobs.sort((a, b) => {
            let x = a.dueDate.getTime();
            let y = b.dueDate.getTime();
            return x == y ? 0 : x > y ? 1 : -1;
          }),
        });
      }
    }
  };
  onChangeBusca = (event) => {
    this.setState({ buscaJobs: event.target.value });
  };
  onChangeValorMinimo = (event) => {
    this.setState({ valorMinimo: Number(event.target.value) || -Infinity });
  };
  onChangeValorMaximo = (event) => {
    this.setState({ valorMaximo: Number(event.target.value) || +Infinity });
  };
  componentDidMount() {
    this.getJobList();
  }
  getJobList = () => {
    axios
      .get(postJob_Url, axiosConfig)
      .then((response) => this.setState({ listaJobs: response.data.jobs }))
      .catch((erro) => console.log(erro.response));
  };
  render() {
    console.log(this.state.valorMaximo);
    const myJobs = this.state.listaJobs
      .filter((returnJobs) => {
        if (returnJobs.title === "") {
          return returnJobs.title;
        } else {
          return returnJobs.title
            .toLowerCase()
            .includes(this.state.buscaJobs.toLowerCase());
        }
      })
      .filter((returnJobs) => {
        return returnJobs.price >= this.state.valorMinimo;
      })
      .filter((returnJobs) => {
        return returnJobs.price <= this.state.valorMaximo;
      })
      .map((job) => {
        return (
          <p key={job.id}>
            {" "}
            Titulo: {job.title} Valor R$: {job.price} Data:{job.dueDate}{" "}
          </p>
        );
      });
    return (
      <div>
        <Filters
          onChangeOrdenacao={this.onChangeOrdenacao}
          onChangeBusca={this.onChangeBusca}
          onChangeMaximo={this.onChangeValorMaximo}
          onChangeMinimo={this.onChangeValorMinimo}
        />
        {myJobs}
        <button onClick={this.props.mudaHome}>Voltar</button>
      </div>
    );
  }
}

export class Jobs2 extends Component {
  state={
    listaJobs: []
  }

  componentDidMount(){
    this.getJobList()
  }
  getJobList = () => {
    axios.get(postJob_Url ,axiosConfig)
    .then((response)=> this.setState({listaJobs:response.data.jobs}))
    .catch((erro)=> console.log(erro.response))
  }
  render() {
  const myJobs = this.state.listaJobs.map((job) =>{
    return <p key={job.id}> Titulo  {job.title} Valor R$: {job.price} Data:{job.dueDate}  </p>
  }) 
  console.log(this.state.listaJobs)
    return (
      <div>{myJobs} </div>
    )
  }
}
