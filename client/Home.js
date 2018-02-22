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
}
;

class DisplayActivity extends React.Component {
    render() {
        return (
                <div id="city_display">
                    <p><Link to={'/event/' + this.props.a._id}><img width="250" height="250" src={this.props.a.picture} /></Link></p>
                    <p>{this.props.a.name}</p>
                </div>
                );
    }
}
;

export default class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {cities: [], name: "", lat: null, long: null, picture: ""};
        this.loadData();
    }

    loadData() {
        fetch('/cities')
                .then(res => res.json())
                .then(data => this.setState({cities: data}))
                .catch(err => console.log(err));
    }
    
    addActivity(e) {
        e.preventDefault();
        const name = this.state.name;
        const description = this.state.description;
        const url = this.state.url;
        const picture = this.state.picture;
        const nature = this.state.nature;
        const startDate = this.state.startDate;
        const endDate = this.state.endDate;
        const city_id = this.props.params.id;
        
        console.log("Add activity");
        fetch('/newPlace', {
            method: 'POST', headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({name, description, picture, url, nature, endDate, startDate, city_id})
        }).then(res => {
            if (res.ok) {
                res.json().then(id => console.log("Activity added with id " + id));
                this.loadData();
            }
            else
                res.json().then(err => alert("Failed to add activity: " + err.message));
        }).catch(err => alert("Error in sending data to server: " + err.message));
        
        this.setState({name: "", description:"", url:"", picture:"", nature: "", startDate: "", endDate: ""});
    }
    
    render() {
        let cities_display = this.state.cities.slice(0, 3).map(c => {return <DisplayCity a={c} />});
        let castles = ([].concat(...this.state.cities.slice(0, 4).map(c => c.activities)).filter(a => a.nature === "castle")).map(c => <DisplayActivity a={c} />);
        let events = ([].concat(...this.state.cities.slice(0, 3).map(c => c.activities)).filter(a => a.nature === "event")).map(c => <DisplayActivity a={c} />);
        
        return (
                <div>
                    <header>
                        <img className="logo" src="images/logo.png" />
                        
                        <div className="menu">
                            <a href="/*Home*/">Home</a>
                            <a href="/*Countries*/">Countries</a>
                            <a href="/*contact*/">Countries</a>
                        </div>
                        
                        <div className="leftside">
                            <div className="Login">
                                <h3>McAsulys</h3>
                                <a className="button" href="/*lougout link*/">Log out</a>
                            </div>
                            
                            <div className="SearchBar">
                                <form action="" method="GET">
                                    <input className="search" type="text" name="search"></input>
                                    <input className="loupe" type="submit"></input>
                                </form>
                            </div>
                        </div>
                    </header>
                    
                    <div className="Banner">
                        <h1 className="banner_Title">Dicovering our shared history</h1>
                        <p className="scroll">Scroll down</p>
                        <img className="scroll_arrow" href="/*lien de l'image*/" />
                    </div>
                    
                    <div className="Triptique">
                        <h1 className="Triptique_Title">Discover a road to castles</h1>
                        <div id="city_row">
                            {castles}
                        </div>
                    </div>
                    
                    <div className="Triptique">
                        <h1 className="Triptique_Title">What goes around ?</h1>
                        <div id="city_row">
                            {cities_display}
                        </div>
                    </div>
                    
                    <div className="Triptique">
                        <h1 className="Triptique_Title">What is planned ?</h1>
                        <div id="city_row">
                            {events}
                        </div>
                    </div>
                    
                    <h2>Insert a new city</h2>
                    <form onSubmit={(e) => this.addCity(e)}>
                        <input type="text" value={this.state.name} onChange={(e) => {this.handleNameChange(e)}} placeholder="Name of the city" /> <br />
                        <input type="number" value={this.state.lat} onChange={(e) => {this.handleLatChange(e)}} placeholder="Latitude" /> <br />
                        <input type="number" value={this.state.long} onChange={(e) => {this.handleLongChange(e)}} placeholder="Longitude" /> <br />
                        <input type="hidden" value={this.state.picture} onChange={(e) => {this.handlePictureChange(e)}} placeholder="Image URL" />
                        <input id="cityPicture" type="hidden" value=""/>
                        <ImagesUploader
                            url={HTTP_SERVER_PORT_IMAGES} optimisticPreviews multiple={false}
                            onLoadEnd={(err, pictureFileName) => {
                                if (err) console.error(err);
                                else this.handlePictureChange02(pictureFileName);
                           }}
                        />
                
                        <input type="submit" value="Create" />
                    </form>
                    
                    <footer>
                        <div>
                            <a href="/*terms and conditions*/">Terms and conditions</a>
                            <a href="/*site map*/">Site map</a>
                            <a href="/*Contact us*/">Contact us</a>
                        </div>
                        
                        <div>
                            <a href="/*facebook*/"><img src="/*facebook*/" /></a>
                            <a href="/*Twitter*/"><img src="/*Twitter*/" /></a>
                            <a href="/*Insta*/"><img src="/*Insta*/" /></a>
                        </div>
                    </footer>
                </div>
        );
    }
}
