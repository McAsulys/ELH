import React from 'react';
import {Link} from 'react-router';

import ImagesUploader from 'react-images-uploader';
import 'react-images-uploader/styles.css';
import 'react-images-uploader/font.css';

import {HTTP_SERVER_PORT_IMAGES} from '../server/constants';

class DisplayImage extends React.Component {
    render () {
        return (
            <div>
                <p>{this.props.a.name}</p>
            </div>
        );
    }
};

export default class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {activity: ""};
        this.loadData();
    }

    loadData() {
        fetch('/activity/' + this.props.params.id)
            .then(res => res.json())
            .then(data => this.setState({activity: data}))
            .catch(err => console.log(err)); 
    }

    render() {
        return (
            <div>
                <h1>Place: {this.state.activity.name}</h1>
                <img width="400" height="400" src={this.state.activity.picture} />
                <p>{this.state.activity.description}</p>
                <p>Website: </p><a href={this.state.activity.url}>{this.state.activity.url}</a>
            </div>
        );
    }
}
