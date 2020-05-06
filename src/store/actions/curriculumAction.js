export const createCurriculum = (curriculum) =>{
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        //Créer un appel async avec la BDD
        const firestore = getFirestore()
        const profile = getState().firebase.profile
        const proprietaire = getState().firebase.auth.uid
        firestore.collection('curriculums').add({
            ...curriculum,
            nom: profile.nom,
            prenom: profile.prenom,
            proprietaire: proprietaire,
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