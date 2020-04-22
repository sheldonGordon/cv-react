import React from 'react'
import ResumeCurriculum from './ResumeCurriculum'

const ListCurriculum = ({curriculums}) => {
    return (
        <div className='cv-list section'>
            { curriculums && curriculums.map(curriculum => {
                return(
                    <ResumeCurriculum curriculum={curriculum} key={curriculum.id} />
                )
            })}
        </div>
    )
}

export default ListCurriculum;
