import React, { Component } from 'react';
import ResultBody from '../ResultBody/ResultBody.js'

class Results extends Component {
    render() {
        return (
            <table align="center" className="table-container">
                <thead>
                    <tr>
                        <th>Feeling</th>
                        <th>Comprehension</th>
                        <th>Support</th>
                        <th>Comments</th>
                        <th>Delete</th>
                    </tr>
                </thead>
               <ResultBody/>
            </table>
        )
    }
}
export default Results;
