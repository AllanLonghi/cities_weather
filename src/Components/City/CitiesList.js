import React from 'react';
import './CitiesList.css';

export default class CitiesList extends React.Component{
    constructor(){
        super();
        this.state = {cities:[]};
    }
    
    componentWillMount() {
        this.setState({cities:[{id:"1",city:"Curitibanos",country:'Brasil'},{id:"1",city:"Curitibanos",country:'Brasil'}]});
    }
    
    render(){
        return(
            <div>
                <table id='cities'>
                <thead>
                    <tr>
                    <th>Cidade</th>
                    <th>Pais</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.state.cities.map(function(city){
                        return (
                            <tr key={city.id}>
                            <td>{city.city}</td>
                            <td>{city.country}</td>
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