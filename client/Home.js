import React from 'react';
import {Link} from 'react-router';

import ImagesUploader from 'react-images-uploader';
import 'react-images-uploader/styles.css';
import 'react-images-uploader/font.css';

import {HTTP_SERVER_PORT_IMAGES} from '../server/constants';

class DisplayCity extends React.Component {
    render() {
        return (
            <div id="city_display">
                <p><Link to={'/city/' + this.props.a._id}><img width="250" height="250" src={this.props.a.picture} /></Link></p>
                <p>{this.props.a.name}</p>
            </div>
        );
    }
};

class DisplayActivity extends React.Component {
    render() {
        return (
            <div id="city_display">
                <p><Link to={'/event/' + this.props.a._id}><img width="250" height="250" src={this.props.a.picture} /></Link></p>
                <p>{this.props.a.name}</p>
            </div>
        );
    }
};

export default class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {cities: [], name: "", lat: null, long: null};
        this.loadData();
    }

    loadData() {
        fetch('/cities')
                .then(res => res.json())
                .then(data => this.setState({cities: data}))
                .catch(err => console.log(err));
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

    render() {
        let cities_display = this.state.cities.slice(0, 3).map(c => {return <DisplayCity a={c} />});
        let castles = ([].concat(...this.state.cities.slice(0,4).map(c => c.activities)).filter(a => a.nature === "castle")).map(c => <DisplayActivity a={c} />);
        let events = ([].concat(...this.state.cities.slice(0,3).map(c => c.activities)).filter(a => a.nature === "event")).map(c => <DisplayActivity a={c} />);
        
        
        return (
            <div>
                <h1>My Cities... The places to be!</h1>
                <p> You can find in this website many cities with beautiful places, events (festivals, concerts and so on).
                    Please, join us, and you will have the possibilities to participate to this new social network. <br />
                    Enjoy!!
                </p>
                
                <div id="city_row">
                    {cities_display}
                </div>
                
                <div id="city_row">
                    {castles}
                </div>
                
                <div id="city_row">
                    {events}
                </div>
                
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
