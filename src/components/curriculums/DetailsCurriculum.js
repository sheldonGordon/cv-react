import React from 'react';

const DetailsCurriculum = (props) => {
    const id = props.match.params.id
    return (
        <div className='container section cv-details'>
            <div className='card z-depth-0'>
                <div className='card-content'>
                    <span className='card-title'>
                        CV Titre - {id}
                    </span>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam pellentesque porta finibus. Etiam tempor non erat vitae posuere. Aenean sed est dignissim, blandit tellus non, maximus velit. Maecenas non facilisis ligula, ac consectetur ex. Etiam ut venenatis libero. Curabitur quis lorem est. Cras sagittis elementum nisl quis efficitur. Cras dictum turpis eget nulla mattis bibendum. Nulla ac nulla et mauris ultricies semper eget ac lectus. 
                    </p>
                </div>
                <div className='card-action gret ligthen-4 grey-text'>
                    <div>Ajouté le 12 Mars 2020</div>
                </div>
            </div>
        </div>
    );
};

export default DetailsCurriculum;