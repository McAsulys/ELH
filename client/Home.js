import React from 'react';
import {Link} from 'react-router';

import ImagesUploader from 'react-images-uploader';
import 'react-images-uploader/styles.css';
import 'react-images-uploader/font.css';

import {HTTP_SERVER_PORT_IMAGES} from '../server/constants';

class DisplayCity extends React.Component {

    render() {
      const style = {
        backgroundImage: "url("+this.props.a.picture+")"
      };
      console.log(this.props.a.picture);
        return (
                <div className="city_display">
                      <Link to={'/city/' + this.props.a._id}>
                        <div className="tryptique_image" style={style}>
                          <div className="overlay_orange">
                            <div>
                              <p className="city_title-link">{this.props.a.name}</p>
                            </div>
                          </div>
                        </div>
                      </Link>
                </div>
                );
    }
}
;

class DisplayActivity extends React.Component {
    render() {
      const style = {
        backgroundImage: "url("+this.props.a.picture+")"
      };
        return (
                <div className="city_display">
                    <Link to={'/event/' + this.props.a._id}>
                      <div className="tryptique_image" style={style}>
                        <div className="overlay_orange">
                          <div>
                            <p className="city_title-link">{this.props.a.name}</p>
                          </div>
                        </div>
                      </div>
                    </Link>
                </div>
                );
    }
}
;

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
        let cities_display = this.state.cities.slice(0, 3).map(c => {
            return <DisplayCity a={c} />
                    });
        let castles = ([].concat(...this.state.cities.slice(0, 4).map(c => c.activities)).filter(a => a.nature === "castle")).map(c => <DisplayActivity a={c} />);
        let events = ([].concat(...this.state.cities.slice(0, 3).map(c => c.activities)).filter(a => a.nature === "event")).map(c => <DisplayActivity a={c} />);

        console.log("citie22"+cities_display);

        return (
                <div>
                    <header>
                        <img className="logo" src="images/logo.png" />
                        <div className="container flex">
                          <div className="menu">
                              <a href="/">Home</a>
                              <a href="/country">Countries</a>
                              <a href="/contact">Contact</a>
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

                    <div className="Banner">
                      <h1 className="banner_Title">Dicovering<br /> our shared history</h1>
                      <div className="scroller">
                        <p className="scroll">Scroll down</p>
                        <img className="scroll_arrow" src="../images/icons/scrolldown.png" />
                      </div>
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
                        <h1 className="Triptique_Title">Incomming events</h1>
                        <div id="city_row">
                            {events}
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
