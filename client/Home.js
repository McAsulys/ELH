import React from 'react';
import {Link} from 'react-router';

import ImagesUploader from 'react-images-uploader';
import 'react-images-uploader/styles.css';
import 'react-images-uploader/font.css';

import {HTTP_SERVER_PORT_IMAGES} from '../server/constants';


class DisplayCity extends React.Component {
    render() {
        return (
            <div>
                <br/>
                <img width="250" height="250" src={this.props.city.picture} />
                <p><Link to={'/city/' + this.props.city._id}> {this.props.city.name}</Link></p>
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

    render() {
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
                    {/*if logged*/}
                    <h3>McAsulys</h3>
                    <a className="button" href="/*lougout link*/">Log out</a>
                    {/*if not logged*/}
                    {/*<a className="button" href="">Login</a><a className="button" href="">Signup</a>*/}
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
                {this.state.cities.map((c, i) => <DisplayCity city={c}/>)}
                /*Cstles here*/
              </div>
              <div className="Triptique">
                <h1 className="Triptique_Title">What goes around ?</h1>
                /*city here*/
              </div>
              <div className="Triptique">
                <h1 className="Triptique_Title">What is planned ?</h1>
                /*activity here*/
              </div>
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
