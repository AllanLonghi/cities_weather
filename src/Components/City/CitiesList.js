import React from 'react';
import './CitiesList.css';
import { Link } from "react-router-dom";

export default class CitiesList extends React.Component{
    render(){
        return(
            <div>
                <table id='cities'>
                <thead>
                    <tr>
                    <th>Cidade</th>
                    <th>Código do Pais</th>
                    <th>Tempo</th>
                    </tr>
                </thead>
                <tbody>
                    {
                    this.props.cities.map(function(city){
                    return (
                        <tr key={city.Id}>
                            <td>{city.Name}</td>
                            <td>{city.CountryCode}</td>
                            <td>
                            <Link to={{
                                pathname: '/weather',
                                state: {
                                    Name:city.Name,
                                    CountryCode:city.CountryCode
                                }
                                }}>Previsão
                            </Link>
                            </td>
                        </tr>
                        );
                    })
                    }
                </tbody>
                </table>
            </div>
        );
    }
}