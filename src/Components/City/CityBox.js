import React from 'react';
import CitiesList from './CitiesList';
import CityForm from './CityForm';
import {GetCitiesDelegateResult} from '../../ApiConn/CityApi';

export default class CityBox extends React.Component{
    constructor(){
        super();
        this.state = {city:[]};
        this.CallBackCitySubmit = this.CallBackCitySubmit.bind(this);
    }

    componentDidMount() {
        GetCitiesDelegateResult(this.CallBackCitySubmit);
    }

    CallBackCitySubmit(result){
        this.setState({city:result});
    }

    render(){
        return(
            <div>
                <CityForm callBackCitySubmit={this.CallBackCitySubmit}/>
                <br/>
                <CitiesList cities={this.state.city}/>
            </div>
        );
    }
}