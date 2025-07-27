import React from 'react';
import { useParams } from 'react-router-dom'; // [cite: 213]
import trainersMock from './trainersmock';

const TrainerDetails = () => { // 
    const { id } = useParams(); // [cite: 213]
    const trainer = trainersMock.find(t => t.trainerId === id); // [cite: 214]

    if (!trainer) {
        return <h2>Trainer not found.</h2>;
    }

    return (
        <div>
            <h2>Trainers Details</h2> {/* [cite: 217] */}
            <h3>{trainer.name} ({trainer.technology})</h3>
            <p>{trainer.email}</p>
            <p>{trainer.phone}</p>
            <h4>Skills:</h4>
            <ul>
                {trainer.skills.map(skill => (
                    <li key={skill}>{skill}</li>
                ))}
            </ul>
        </div>
    );
};

export default TrainerDetails;