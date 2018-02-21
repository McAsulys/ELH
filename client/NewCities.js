import React from 'react';
import {Link} from 'react-router';

import ImagesUploader from 'react-images-uploader';
import 'react-images-uploader/styles.css';
import 'react-images-uploader/font.css';

import {HTTP_SERVER_PORT_IMAGES} from '../server/constants';

export default class NewCity {
  constructor(props) {
    super(props);
  }

  addCity(e) {
      e.preventDefault();
      const cityName = this.state.name;
      const cityLatitude = this.state.lat;
      const cityLongitude = this.state.long;

      fetch('/newCity', {
          method: 'POST', headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({cityName, cityLatitude, cityLongitude})
      }).then(res => {
          if (res.ok) {
              res.json().then(id => console.log("City added with id " + id));
              this.loadData();
          }
          else
              res.json().then(err => alert("Failed to add city: " + err.message));
      }).catch(err => alert("Error in sending data to server: " + err.message));

      this.setState({name: "", lat: null, long:null});
  }

  handleNameChange(e) {
      this.setState({name: e.target.value});
  }

  handleLatChange(e) {
      this.setState({lat: e.target.value});
  }

  handleLongChange(e) {
      this.setState({long: e.target.value});
  }

  
  render(){

    return(
      <div>
        <h2>Insert a new city</h2>
        <form onSubmit={(e) => this.addCity(e)}>
            <input type="text" value={this.state.name} onChange={(e) => {this.handleNameChange(e)}} placeholder="Name of the city" /> <br />
            <input type="number" value={this.state.lat} onChange={(e) => {this.handleLatChange(e)}} placeholder="Latitude" /> <br />
            <input type="number" value={this.state.long} onChange={(e) => {this.handleLongChange(e)}} placeholder="Longitude" /> <br />

            <input type="submit" value="Create" />
        </form>
      </div>
    );
  }
}
