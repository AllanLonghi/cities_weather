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
        this.callBackCitySubmitFail = this.callBackCitySubmitFail.bind(this);
    }

    onSubmit(e){
        e.preventDefault();  
        GetWeatherDelegateResult({Name:this.state.Name,CountryCode:this.state.CountryCode},
            this.callBackValidationSuccess,
            this.callBackValidationFail
            );
    }

    callBackValidationSuccess(){
        this.setState({Error:''});
        SaveCityDelegateResult({Name:this.state.Name,CountryCode:this.state.CountryCode},this.props.callBackCitySubmit,this.callBackCitySubmitFail);
    }

    callBackCitySubmitFail(){
        this.setState({Error:'Não foi possivel salvar cidade.'});
    }

    callBackValidationFail(err){
        this.setState({Error:'Não foi possível cadastrar cidade: ' + err.responseJSON.message})
    }
    
    render(){
        return(
            <div id='formDiv'>
                <form onSubmit={this.onSubmit} method="post">
                    <label htmlFor="Name">Cidade</label> 
                    <input type="text" id="Name" name="Name" value={this.state.Name} onChange={(e) => this.setState({Name:e.target.value})}/>
                    <label htmlFor="CountryCode">Código ISO do Pais</label> 
                    <input placeholder="ex: BRA ou BR" type="text" id="CountryCode" name="CountryCode" value={this.state.CountryCode} onChange={(e) => this.setState({CountryCode:e.target.value})}/>
                    <span></span>
                    <button type='submit'>Salvar</button>
                    <br/>
                    <span className="err"> {this.state.Error} </span>
                </form>
            </div>
        );
    }

}