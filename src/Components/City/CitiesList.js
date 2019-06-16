import React from 'react';
import './CitiesList.css';
import WeatherModal from '../Weather/WeatherModal'

export default class CitiesList extends React.Component{
    constructor(){
        super();
        this.state = {ModalVisible:false};
    }

    render(){
        return(
            <div>
                <table id='cities'>
                <thead>
                    <tr>
                    <th>Cidade</th>
                    <th>Código do Pais</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.props.cities.map(function(city){
                        return (
                            <tr key={city.Id} onClick={() => this.setState({ModalVisible:true})}>
                            <td>{city.Name}</td>
                            <td>{city.CountryCode}</td>
                            </tr>
                            );
                        })
                    }
                </tbody>
                </table>
                <WeatherModal show={this.state.ModalVisible} onHide={() => this.setState({ModalVisible:true})}/>
            </div>
        );
    }
}