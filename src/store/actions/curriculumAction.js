export const createCurriculum = (curriculum) =>{
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        //Créer un appel async avec la BDD
        const firestore = getFirestore()
        firestore.collection('curriculums').add({
            ...curriculum,
            nom: 'titi',
            prenom: 'tutu',
            proprietaire: 12345,
            dateCreation: new Date()
        }).then(() => {
            dispatch({
                type: 'CREATE_CV',
                curriculum
            })
        }).catch((erreur) => {
            dispatch({
                type: 'CREATE_CV_ERREUR',
                erreur
            })
        })        
    }
}