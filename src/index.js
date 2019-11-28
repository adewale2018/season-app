import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = { lat: null, errorMessage: '' };

    window.navigator.geolocation.getCurrentPosition(
      position => {
        this.setState({ lat: position.coords.latitude });
      },
      err => {
          this.setState({ errorMessage: err.message})
      }
    );
  }
  render() {
    if(this.state.errorMessage && !this.state.lat) {
      return <div><h2>Error: {this.state.errorMessage}</h2></div>
    }
    if(!this.state.errorMessage && this.state.lat) {
       return <div><h2>Latitude: {this.state.lat}</h2></div>
    }
    return <div><h2>Loading...</h2></div>
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
