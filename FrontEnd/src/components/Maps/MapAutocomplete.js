import React from "react";
/* global google */

export default class Autocomplete extends React.Component {
  constructor(props) {
    super(props);
    this.state={value:props.value?props.value:""}
    this.autocompleteInput = React.createRef();
    this.autocomplete = null;
    this.handlePlaceChanged = this.handlePlaceChanged.bind(this);
  }

  componentDidMount() {
    this.autocomplete = new google.maps.places.Autocomplete(this.autocompleteInput.current,
      { "types": ["geocode"] });

    this.autocomplete.addListener('place_changed', this.handlePlaceChanged);
  }

  handlePlaceChanged() {
    const place = this.autocomplete.getPlace();
    const { geometry, formatted_address } = place;
    this.setState({
      value:  formatted_address
    });
    this.props.onPlaceLoaded(place);
  }

  handleChange = (e) => {
    if (e.target.value == "") {
      this.props.onPlaceLoaded({ formatted_address: "" });
    }
 
    const saveValue = e.target.value;
    this.setState({
      value:  saveValue 
    });
    console.log(saveValue);

  }
 
  render() {
    return (
      <div className="MuiInputBase-root MuiOutlinedInput-root MuiInputBase-formControl" style={this.props.card}    >  
        <input 
          value={this.state.value}
          onChange={this.handleChange}
          style={this.props.input}
          ref={this.autocompleteInput}
          id="autocomplete"
          placeholder="Enter your address"
          type="text"
          className="MuiInputBase-input MuiInput-input"
        ></input>
      </div>

    );
  }
}