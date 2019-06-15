import React from 'react'
import './CityForm.css'

export default class CityForm extends React.Component{
    constructor(){
        super();
        this.state = {city:'',country:''};
        this.setCity = this.setCity.bind(this);
        this.setCountry = this.setCountry.bind(this);
    }
    onSubmit(){

    }
    setCity(e){
        this.setState({city:e.city})
    }

    setCountry(e){
        this.setState({country:e.city})
    }
    
    render(){
        return(
            <div id='formDiv'>
                <form onSubmit={this.onSubmit} method='POST'>
                    <label htmlFor="city">City</label> 
                    <input type="text" id="city" name="city" value={this.state.city} onChange={this.setCity}/>
                    <label htmlFor="country">Country</label> 
                    <input type="text" id="country" name="country" value={this.state.country} onChange={this.setCountry}/>
                    <span></span>
                    <button type='submit'>Salvar</button>
                </form>
            </div>
        );
    }

}