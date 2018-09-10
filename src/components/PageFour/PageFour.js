import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

class PageFour extends Component {
  constructor(props) {
    super(props)
    this.state = { ratings: this.props.reduxState.ratings }
  }

  handleChange = (event) => {
    this.setState({
      ratings: [...this.state.ratings, event.target.value]
    })
  }

  handleSubmit = () => {
    console.log(this.state.ratings);
    this.sendRating();
    this.props.history.push('/5');
  }

  sendRating = () => {
    axios({
      method: 'POST',
      url: '/rating',
      data: this.state.ratings
    }).then((response) => {
      console.log('Succes in sending', response);
    }).catch((error) => {
      console.log('Error with making POST', error);
      alert('An error has occurred.')
    })
  }

  render() {
    return (
      <div className="container">
        <div><h1>4 of 4 pages</h1></div>


        <p>Any Comments you would like to leave?</p>
        <input onBlur={this.handleChange} name="ratings" placeholder="e.g. Chris Black is the Goat" />
        <button onClick={this.handleSubmit} className="btn">Next</button>
      </div>
    );
  }
}

const mapReduxStateToProps = (reduxState) => ({
  reduxState
});
export default connect(mapReduxStateToProps)(PageFour);
