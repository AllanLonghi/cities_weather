import React from 'react';
import {GetWeatherDelegateResult} from '../../ApiConn/WeatherApiConn';
import './WeatherCards.css';
import { withRouter } from 'react-router-dom'

class WeatherModal extends React.Component{
    constructor(props){
        super(props);
        this.Error = {Message:'',cod:''};
        this.callBackSuccess = this.callBackSuccess.bind(this);
        this.callBackFail = this.callBackFail.bind(this);
        this.componentDidMount = this.componentDidMount.bind(this);
    }

    componentDidMount(){
      GetWeatherDelegateResult(this.props.location.state,this.callBackSuccess,this.callBackFail);
    }
    callBackSuccess(result){
      this.setState({weather:this.GetWeatherPerDay(result)})
    }

    callBackFail(error){
      this.Error = error.responseJSON;
      this.forceUpdate();
    }

    FormatDate(date){
      var data= new Date(date)
      var dia=data.getDate();
      var mes=data.getMonth();
      var ano=data.getFullYear();
      return  dia + '/' + (mes++) + '/' + ano;
    }

    GetWeatherPerDay(weather){
      var group = [];
      weather.list.map(function(element) {
        var eDate = new Date(element.dt_txt).getDay();
        if(!group[eDate]){
          group[eDate] = element;
        }   
      });
      return {list:group,city:weather.city};
    }

    capitalizeFirstLetter(string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
    }

  render() {
      if (this.state) {
        return (
          <div align="center">
          <br/>
          <span className="cityName">{this.state.weather.city.name} - {this.state.weather.city.country} </span>
          <br/>
          <br/>
          <div className="row">
            {
                this.state.weather.list.map(function(day){
                  return(
                  <div className="column" key={day.dt}>
                      <div className="card">
                        <span className="date">{this.FormatDate(day.dt_txt)}</span>
                        <span className="temp_max">Max: {day.main.temp_max}&deg;</span>
                        <span className="temp_min">Min: {day.main.temp_min}&deg;</span>
                        <span className="conditions">{this.capitalizeFirstLetter(day.weather[0].description)}</span>
                        <span className="wind">Vento: {day.wind.speed} KMH</span>
                      </div>
                  </div>
                  );
                }.bind(this))
              }
          </div>
          </div>
        );
    }else{
      return(<div><span className="cityName">Não foi possível carregar dados: {this.Error.message}</span></div>);
    }
  }
}
export default withRouter(WeatherModal)