import React from 'react';
import { Link } from 'react-router-dom';
import trainersMock from './trainersmock';

const TrainersList = () => { // 
    return (
        <div>
            <h2>Trainers List</h2> {/* [cite: 201] */}
            <ul>
                {trainersMock.map(trainer => (
                    <li key={trainer.trainerId}>
                        {/* [cite: 215] */}
                        <Link to={`/trainers/${trainer.trainerId}`}>{trainer.name}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TrainersList;