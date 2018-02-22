import React from 'react';
import {Link} from 'react-router';

import ImagesUploader from 'react-images-uploader';
import 'react-images-uploader/styles.css';
import 'react-images-uploader/font.css';

import {HTTP_SERVER_PORT_IMAGES} from '../server/constants';

let c = [{name: 'Aix-en-Provence', picture: '/images/Aix/aix.jpg'}, {name: 'Boulogne-sur-Mer', picture: '/images/Boulogne/centre.jpg'}];

class Display extends React.Component {
    render () {
        return (
            <div>
                <img width="300" height="300" src={this.props.place.picture} />
                <p><Link to={'/event/'+this.props.place._id}> {this.props.place.name}</Link></p>
                <p>{this.props.place.description}</p>
            </div>
        );
    }
};

export default class City extends React.Component {
    constructor(props) {
        super(props);
        this.state = {city: null, name: "", description: "", url: "", picture: "", nature: "", startDate:"", endDate:""};
        this.loadData();
    }

    loadData() {
        fetch('/cities/' + this.props.params.id)
            .then(res => res.json())
            .then(data => this.setState({city: data}))
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
    
    handleNameChange(e) {
        this.setState({name: e.target.value});
    }
    
    handleDescriptionChange(e) {
        this.setState({description: e.target.value});
    }
    
    handleUrlChange(e) {
        this.setState({url: e.target.value});
    }
    
    handlePictureChange(e) {
        this.setState({picture: e.target.value});
    }
    
    handlePictureChange02(url) {
        this.setState({picture: url});
    }
    
    render() {
        if (this.state.city == null)
            return <p>Loading City</p>;
        
        return (
            <div>
                <img width="400" height="400" src={this.state.city.picture} />
                <br />
                <br />
                <p>{this.state.city.description}</p>
                <br />
                
                <h1>Places</h1>
                {this.state.city.activities.filter(a =>a.nature!='event')
                .map(a => <Display place={a} />)}
                
                <h1>Events</h1>
                {this.state.city.activities.filter(a =>a.nature=='event')
                .map(b => <Display place={b} />)}
                
                <h2>Insert a new place</h2>
                <form onSubmit={(e) => this.addActivity(e)}>
                    <input type="text" value={this.state.name} onChange={(e) => {this.handleNameChange(e)}} placeholder="New activity" /> <br />
                    <input type="text" value={this.state.description} onChange={(e) => {this.handleDescriptionChange(e)}} placeholder="Description" /> <br />
                    <input type="hidden" value={this.state.picture} onChange={(e) => {this.handlePictureChange(e)}} placeholder="Image URL" />
                    <input id="cityPicture" type="hidden" value=""/>
                    <ImagesUploader
                        url={HTTP_SERVER_PORT_IMAGES} optimisticPreviews multiple={false}
                        onLoadEnd={(err, pictureFileName) => {
                            if (err) console.error(err);
                            else this.handlePictureChange02(pictureFileName);
                       }}
                    />
                    <input type="text" value={this.state.url} onChange={(e) => {this.handleUrlChange(e)}} placeholder="Website URL" /> <br />
                    
                    <input type="text" value={this.state.nature} onChange={(e) => {this.handleNatureChange(e)}} placeholder="Nature" /> <br />
                    <input type="text" value={this.state.startDate} onChange={(e) => {this.handleStartDateChange(e)}} placeholder="Start Date" /> <br />
                    <input type="text" value={this.state.endDate} onChange={(e) => {this.handleEndDateChange(e)}} placeholder="End Date" /> <br />
                    
                    <input type="submit" value="Create" />
                </form>
                
                
            </div>
        );
    }
}
