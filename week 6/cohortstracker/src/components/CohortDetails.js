import React from 'react';
import styles from './CohortDetails.module.css'; // 

const CohortDetails = ({ details }) => {
    // 
    const titleStyle = {
        color: details.status === 'Ongoing' ? 'green' : 'blue'
    };

    return (
        <div className={styles.box}> {/*  */}
            <h3 style={titleStyle}>{details.id} - {details.program}</h3>
            <dl>
                <dt>Started On</dt>
                <dd>{details.started}</dd>

                <dt>Current Status</dt>
                <dd>{details.status}</dd>

                <dt>Coach</dt>
                <dd>{details.coach}</dd>

                <dt>Trainer</dt>
                <dd>{details.trainer}</dd>
            </dl>
        </div>
    );
};

export default CohortDetails;