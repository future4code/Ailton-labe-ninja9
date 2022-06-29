import React, { Component } from 'react'
import axios from 'axios'
import { axiosConfig, postJob_Url } from '../Constants/url'

export default class Jobs extends Component {
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
