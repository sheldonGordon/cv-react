const initState = {
    curriculums: [
        {id: '1', titre: 'titre 1', description: 'description 1 blablabla'},
        {id: '2', titre: 'titre 2', description: 'description 2 blablabla'},
        {id: '3', titre: 'titre 3', description: 'description 3 blablabla'}
    ]
}

const curriculumReducer = (state = initState, action) => {
    return state
}

export default curriculumReducer