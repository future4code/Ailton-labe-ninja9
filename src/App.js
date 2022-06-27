import React from "react";
import Cadastro from "./Pages/Cadastro";
import Jobs from "./Pages/Jobs";
import Home from "./Pages/Home";

export default class App extends React.Component {
  state = {
    mudaTela: "home"
  }

  onScreen = () => {
    switch (this.state.mudaTela){
      case "home":
        return <Home 
        mudaHome={this.mudaHome}
        mudaCadastro={this.mudaCadastro}
        mudaJobs={this.mudaJobs} /> 
      case "cadastro":
        return <Cadastro
        mudaHome={this.mudaHome}
        mudaCadastro={this.mudaCadastro}
        mudaJobs={this.mudaJobs}/>
      case "jobs":
        return <Jobs 
        mudaHome={this.mudaHome}
        mudaCadastro={this.mudaCadastro}
        mudaJobs={this.mudaJobs}/>
    }
  }

  mudaHome = () => {
    this.setState({mudaTela: "home"})
  }

  mudaCadastro = () => {
    this.setState({mudaTela: "cadastro"})
  }

  mudaJobs = () => {
    this.setState({mudaTela: "jobs"})
  }

  render(){
    return(
      <div>
        {this.onScreen()}
      </div>
    )
  }
}