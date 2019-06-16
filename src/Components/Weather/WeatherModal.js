import React from 'react';
import {GetWeatherDelegateResult} from '../../ApiConn/WeatherApiConn';
import ReactDOM from "react-dom";

export default class WeatherModal extends React.Component{
    constructor(){
        super();
        this.state = {weather:[]};
        this.callBackRowClicked = this.callBackRowClicked.bind(this);
        this.callBackSuccess = this.callBackSuccess.bind(this);
    }

    callBackRowClicked(city){
        this.GetWeatherDelegateResult(city,this.callBackSuccess);
    }

    callBackSuccess(result){
        this.setState({weather:result});
    }

    render() {
        return (
          <Modal {...this.props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
            <Modal.Header closeButton>
              <Modal.Title id="contained-modal-title-vcenter">
                Clima nos próximos dias em {this.state.weather.city.name}
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <h4>Centered Modal</h4>
              <p>
                Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
                dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
                ac consectetur ac, vestibulum at eros.
              </p>
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={this.props.onHide}>Close</Button>
            </Modal.Footer>
          </Modal>
        );
      }
}