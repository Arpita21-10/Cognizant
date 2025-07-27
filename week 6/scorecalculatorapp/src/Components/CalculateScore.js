import React from 'react';
import '../Stylesheets/mystyle.css';

const CalculateScore = (props) => {
    const percentage = (props.Total / 500) * 100;

    return (
        <div className='score-card'>
            <h1>{props.Name}</h1>
            <p>School: {props.School}</p>
            <p>Total Marks: {props.Total}</p>
            <p>Goal: {props.goal}</p>
            <p><strong>Percentage: {percentage}%</strong></p>
        </div>
    );
};

export default CalculateScore;