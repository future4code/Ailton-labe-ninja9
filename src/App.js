import React from "react";
import Cadastro from "./Pages/Cadastro";
import Jobs from "./Pages/Jobs";
import Home from "./Pages/Home";
import Header from "./Pages/Header";
import PageDetails from"./Pages/PageDetails"

export default class App extends React.Component {
  state = {
    mudaTela: "home",
    clickedJob:""
  }

  onScreen = () => {
    switch (this.state.mudaTela){
      case "home":
        return <Home 
        mudaHome={this.mudaHome}
        mudaCadastro={this.mudaCadastro}
        mudaJobs={this.mudaJobs}
        mudaPageDatails={this.mudaPageDatails} /> 
      case "cadastro":
        return <Cadastro
        mudaHome={this.mudaHome}
        mudaCadastro={this.mudaCadastro}
        mudaJobs={this.mudaJobs}
        mudaPageDatails={this.mudaPageDatails}/>
      case "jobs":
        return <Jobs 
        mudaHome={this.mudaHome}
        mudaCadastro={this.mudaCadastro}
        mudaJobs={this.mudaJobs}
        mudaPageDatails={this.mudaPageDatails}/>
      case "details":
        return <PageDetails 
        mudaHome={this.mudaHome}
        mudaCadastro={this.mudaCadastro}
        mudaJobs={this.mudaJobs}
        mudaPageDatails={this.mudaPageDatails}
        id={this.state.clickedJob}/>
    }
  }
  mudaPageDatails = (id) => {
    this.setState({mudaTela:"details", clickedJob: id })
  }
  mudaHome = () => {
    this.setState({mudaTela: "home"})
  }

  mudaCadastro = () => {
    this.setState({mudaTela: "cadastro"})
  }

  mudaJobs = () => {
    this.setState({mudaTela: "jobs",clickedJob:"" })
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