import React, { Component } from 'react';
import axios from 'axios';
export default class resultRow extends Component {

    handleDelete = () => {
        axios({
            method: 'DELETE',
            url: `/rating/${this.props.result.id}`,
        }).then((response) => {
            this.props.getResults();
        }).catch((error) => {
            console.log('error making request', error);
            alert('Something went wrong! Check the server.');
        });

    }
    render() {

        return (
            <tr>
                <td>{this.props.result.feeling}</td>
                <td>{this.props.result.understanding} </td>
                <td>{this.props.result.support}</td>
                <td>{this.props.result.comments}</td>
                <td><button onClick={this.handleDelete}>Delete</button></td>
            </tr>
        )
    }
}
