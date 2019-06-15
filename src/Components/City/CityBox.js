import React from 'react';
import CitiesList from './CitiesList';
import CityForm from './CityForm';

export default class CityBox extends React.Component{
    render(){
        return(
            <div>
                <CityForm/>
                <br/>
                <CitiesList/>
            </div>
        );
    }
}