import React from "react";
import Cadastro from "./Pages/Cadastro";
import Jobs from "./Pages/Jobs";
import Home from "./Pages/Home";
import Header from "./Pages/Header";

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
        <Header
        mudaHome={this.mudaHome}
        mudaCadastro={this.mudaCadastro}
        mudaJobs={this.mudaJobs}>  
       </Header>
        {this.onScreen()}
      </div>
    )
  }
}