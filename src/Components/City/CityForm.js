import React from 'react';
import './CityForm.css';
import {GetWeatherDelegateResult} from '../../ApiConn/WeatherApiConn';
import {SaveCityDelegateResult} from '../../ApiConn/CityApi';

export default class CityForm extends React.Component{
    constructor(){
        super();
        this.state = {Name:'',CountryCode:'',Error:''};
        this.onSubmit = this.onSubmit.bind(this);
        this.callBackValidationFail = this.callBackValidationFail.bind(this);
        this.callBackValidationSuccess = this.callBackValidationSuccess.bind(this);
    }

    onSubmit(e){
        e.preventDefault();  
        GetWeatherDelegateResult({Name:this.state.Name,CountryCode:this.state.CountryCode},
            this.callBackValidationSuccess,
            this.callBackValidationFail
            );
    }

    callBackValidationSuccess(){
        SaveCityDelegateResult({Name:this.state.Name,CountryCode:this.state.CountryCode},this.props.callBackCitySubmit);
    }

    callBackValidationFail(err){
        this.setState({Error:'Cidade e/ou código do pais invalidos! : ' + err})
    }
    
    render(){
        return(
            <div id='formDiv'>
                <form onSubmit={this.onSubmit} method="post">
                    <label htmlFor="Name">Cidade</label> 
                    <input type="text" id="Name" name="Name" value={this.state.Name} onChange={(e) => this.setState({Name:e.target.value})}/>
                    <label htmlFor="CountryCode">Código do Pais</label> 
                    <input type="text" id="CountryCode" name="CountryCode" value={this.state.CountryCode} onChange={(e) => this.setState({CountryCode:e.target.value})}/>
                    <span>{this.state.Error}</span>
                    <span></span>
                    <button type='submit'>Salvar</button>
                </form>
            </div>
        );
    }

}