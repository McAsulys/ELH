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

class Comment extends React.Component {
    render () {
        return (
            <div >
                <p>{(this.props.comment.user || {}).email}</p>
                <p>{this.props.comment.text}</p>
                <br />
            </div>
        );
    }
};

export default class Activity extends React.Component {
    constructor(props) {
        super(props);
        this.state = {activity: null, comment: ""};
        this.loadData();
    }

    loadData() {
        fetch('/activity/' + this.props.params.id)
            .then(res => res.json())
            .then(data => this.setState({activity: data}))
            .catch(err => console.log(err));
    }
    
    addComment(e) {
        e.preventDefault();
        const comment = this.state.comment;
        const activity_id = this.props.params.id;
        
        console.log("Adding Comment", comment, activity_id);
        fetch('/newComment', {
            method: 'POST', headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({comment, activity_id})
        }).then(res => {
            if (res.ok) {
                this.loadData();
                res.json().then(id => console.log("Comment added with id " + id));
            }
            else
                res.json().then(err => alert("Failed to add comment: " + err.message));
        }).catch(err => alert("Error in sending data to server: " + err.message));
        
        this.setState({comment: ""});
    }
    
    handleCommentChange(e) {
        this.setState({comment: e.target.value});
    }

    render() {

        if (this.state.activity === null)
            return <p>Loading Activity</p>
        
        console.log("Commence: ", this.state.activity.comments);
        let x = this.state.activity.comments.map(c => <Comment comment={c}/>);
        console.log("X: ", x);
        
       
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
                <h2>Add a comment</h2>
                <form onSubmit={(e) => this.addComment(e)}>
                    <textarea cols="50" rows="10" value={this.state.comment} onChange={(e) => {this.handleCommentChange(e)}}></textarea><br />
                    <input type="submit" value="Add" />
                </form>
                
                
              </div>
              {this.state.activity.comments.map(c => <Comment comment={c}/>)}
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
    };
};
