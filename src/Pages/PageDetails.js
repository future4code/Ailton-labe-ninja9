import React, { Component } from "react";
import axios from "axios";
import { axiosConfig,postJob_Url } from "../Constants/url";


export default class PageDetails extends Component {
    state = {
        jobDetails:[]
        
    }

    componentDidMount(){
        this.getjobDetails()
    }
    getjobDetails = () => {
        axios.get(`${postJob_Url}/${this.props.id}`,axiosConfig)
        .then ((response) => this.setState({ jobDetails: response.data.description }))
        .catch((erro) => console.log(erro))
    }
    render(){
            console.log(this.state.jobDetails)

        
       
        return(
            <div>
               <p> {this.state.jobDetails} <button onClick={this.props.mudaJobs}>Voltar</button></p>
            </div>
        )
    
    }
}