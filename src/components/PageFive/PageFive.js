import React, { Component } from 'react';
import { connect } from 'react-redux';


class PageFour extends Component {


  handleSubmit = () => {
  
    this.props.history.push('/');
  }


  render() {
    return (
      <div className="container">
        <h1>Thank You!</h1>
        <button onClick={this.handleSubmit} className="btn">Leave New Feedback</button>
      </div>
    );
  }
}


export default connect()(PageFour);
