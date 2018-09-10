import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import ResultRows from '../resultRow/resultRow.js';

class ResultBody extends Component {
    constructor(props) {
        super(props);
        this.state = {
            result: [],
        }
    }
    //run initial data requests here
    componentDidMount() {
        this.getResults();
    }
    //Make an array to get Orders from the database
    getResults = () => {
        axios({
            method: 'GET',
            url: '/rating',
        }).then((response) => {
            console.log(response.data);
            this.setState({
                result: response.data.rows
            })
        }).catch((error) => {
            alert('Orders couldn\'t be obtained');
        })
    }
    render() {
        return (
            <tbody>
                {this.state.result.map((result, i) => {
                    return (
                <ResultRows key={i} result={result} getResults={this.getResults}/>
                );
            })}
            </tbody>

        )
    }
}


export default connect()(ResultBody);
