import React from 'react';
import CitiesList from './CitiesList';
import CityForm from './CityForm';
import './CityBox.css';
import {GetCitiesDelegateResult} from '../../ApiConn/CityApi';

export default class CityBox extends React.Component{
    constructor(){
        super();
        this.state = {city:[],Error:''};
        this.CallBackCitySubmit = this.CallBackCitySubmit.bind(this);
        this.CallBackSubmitError = this.CallBackSubmitError.bind(this);
    }

    CallBackSubmitError(err){
        this.setState({Error:'Sem conexão com API de cidades.'});
    }

    CallBackCitySubmit(result){
        this.setState({city:result,Error:''});
    }

    componentDidMount() {
        GetCitiesDelegateResult(this.CallBackCitySubmit,this.CallBackSubmitError);
    }

    render(){
        return(
            <div>
                <CityForm callBackCitySubmit={this.CallBackCitySubmit} />
                <br/>
                <CitiesList cities={this.state.city}/>
                <br/>
                <span>{this.state.Error}</span>
            </div>
        );
    }
}