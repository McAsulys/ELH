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
      const style = {
        backgroundImage: "url("+this.state.activity.picture+")"
      }
        return (
            <div>
              <header>
              <img className="logo" src="images/logo.png" />
              <div className="container flex">
                <div className="menu">
                    <a href="/">Home</a>
                    <a href="/country">Countries</a>
                    <a href="/contact">Countries</a>
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
              </div>
          </header>
              <div className="city_front" style={style}>
                <div>
                  <div className="city_desc">
                    <h1>{this.state.activity.name}</h1>
                    <p>{this.state.activity.description}</p>
                    <a href={this.state.activity.url}>{this.state.activity.url}</a>
                  </div>
                </div>
              </div>
              <footer>
                  <div className="footer_link">
                    <a href="/cgu">Terms and conditions</a>
                    <a href="/map">Site map</a>
                    <a href="/contact">Contact us</a>
                  </div>

                  <div className="socials">
                    <a href="/facebook"><img className="social" src="images/icons/fb.png" /></a>
                    <a href="/Twitter"><img className="social" src="images/icons/twitter-icon.png" /></a>
                    <a href="/Insta"><img className="social" src="images/icons/insta.png" /></a>
                  </div>
                </footer>
            </div>
        );
    }
}
