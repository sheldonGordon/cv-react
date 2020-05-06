import React from 'react';
import moment from 'moment/min/moment-with-locales'


const ResumeCurriculum = ({curriculum}) => {
    moment.locale('fr')
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
                    Ajouter par {curriculum.nom} {curriculum.prenom}
                </p>
                <p className='grey-text'>
                    {moment(curriculum.dateCreation.toDate()).format('LL')}
                </p>
            </div>
        </div>
    );
};

export default ResumeCurriculum;