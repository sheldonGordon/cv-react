import React from 'react';

const ResumeCurriculum = ({curriculum}) => {
    return (
        <div className='card z-depth-0 cv-detail'>
            <div className='card-content grey-text text-darken-3'>
                <span className='card-title'>
                    {curriculum.titre}
                </span>
                <p>
                    {curriculum.description}
                </p>
                <p className='grey-text'>
                    12 Mars 2020
                </p>
            </div>
        </div>
    );
};

export default ResumeCurriculum;