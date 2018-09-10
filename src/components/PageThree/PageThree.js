import React, { Component } from 'react';
import { connect } from 'react-redux';

class PageThree extends Component {
  constructor(props){
    super(props)
    this.state = {ratings: []}
}

handleChange = (event) => {
   this.setState({
       ratings: event.target.value
   })
}

handleSubmit = () => {
    console.log('Onto Page Two');
    
    const rating = this.state.ratings
    const action = { type: 'ADD_ITEM', payload: rating }
    this.props.dispatch(action);
    this.props.history.push('/4');

}

render() {
    return (
        <div className="container">
            <div><h1>3 of 4 pages</h1></div>

            <p>How well are you being supported?</p>
            <input onChange={this.handleChange} type="number" placeholder="On a scale of 1 to 5" />
            <button onClick={this.handleSubmit} className="btn">Next</button>
        </div>
            );
        }
    }


export default connect()(PageThree);
