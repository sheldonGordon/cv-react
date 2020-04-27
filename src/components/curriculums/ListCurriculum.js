import React from 'react'
import ResumeCurriculum from './ResumeCurriculum'
import { Link } from 'react-router-dom'

const ListCurriculum = ({curriculums}) => {
    return (
        <div className='cv-list section'>
            { curriculums && curriculums.map(curriculum => {
                return(
                    <Link to={'/cv/'+curriculum.id} key={curriculum.id} >
                        <ResumeCurriculum curriculum={curriculum} />
                    </Link>
                )
            })}
        </div>
    )
}

export default ListCurriculum;
