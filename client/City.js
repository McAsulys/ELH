import React from 'react';
        import {Link} from 'react-router';
        import ImagesUploader from 'react-images-uploader';
        import 'react-images-uploader/styles.css';
        import 'react-images-uploader/font.css';
        import {HTTP_SERVER_PORT_IMAGES} from '../server/constants';
        let c = [{name: 'Aix-en-Provence', picture: '/images/Aix/aix.jpg'}, {name: 'Boulogne-sur-Mer', picture: '/images/Boulogne/centre.jpg'}];
        class Display extends React.Component {
        render () {
        const style = {
        backgroundImage: "url(" + this.props.place.picture + ")"
        };
        return (
<div>

    
    

    <div className="displayOnPage">
        <Link to={'/event/' + this.props.place._id}>
        <div className="activitylist_image" style={style}></div>
        <div className="activityList_left">
            <h1>{this.props.place.name}</h1>
            <p className="dOP_desc">{this.props.place.description} 
            </p>
        </div>
        </Link>
    </div>

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
                this.setState({name: "", lat: null, long:null});
                }

        handleActivityChange(e) {
        this.setState({activity: e.target.value});
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

        handleStartDateChange(e) {
        this.setState({startDate: e.target.value});
                }

        handleEndDateChange(e) {
        this.setState({endDate: e.target.value});
                }

        render() {
        if (this.state.city == null)
                return <p>Loading City</p>;
                
                const style = {
                backgroundImage: "url(" + this.state.city.picture + ")"
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
                <h1>{this.state.city.name}</h1>
                <p>{this.state.city.description}</p>
            </div>
        </div>
    </div>
    <div className="activityList">
        {this.state.city.activities.filter(a => a.nature != 'event')
                .map(a => <Display place={a} />)}

        <h1>Events</h1>
        {this.state.city.activities.filter(a => a.nature === 'event')
                .map(b => <Display place={b} />)}

        
    </div>

    <div className="haveUbeen">
        <p>Have you been in {this.state.city.name} ?<br />
            Contribute by filling in this :</p>
        <a href="/addActivity">Add Activity</a>
    </div>

    <form onSubmit={(e) => this.addActivity(e)}>
        <input type="text" value={this.state.activity} onChange={(e) => {this.handleActivityChange(e)}} placeholder="New activity" /> <br />

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
