const functions = require('firebase-functions')
const admin = require('firebase-admin')
admin.initializeApp(functions.config().firebase)

exports.helloWorld = functions.region('europe-west1').https.onRequest((request, response) => {
    response.send("Hello, biatch!")
});

const createNotification = (notification => {
    return admin
        .firestore()
        .collection('notifications')
        .add(notification)
        .then(doc => console.log('notification ajouter', doc))
})
exports.curriculumCreated = functions
    .region('europe-west1')
    .firestore
    .document('curriculums/{cvId}')
    .onCreate(doc => {

    const cv = doc.data()
    const notification = {
        content: 'Ajoute d\'un nouveau cv',
        user: `${cv.nom} ${cv.prenom}`,
        time: admin.firestore.FieldValue.serverTimestamp()
    }

    return createNotification(notification)
})

exports.userJoined = functions.region('europe-west1').auth.user()
    .onCreate(user =>{
        return admin.firestore().collection('users')
            .doc(user.uid).get().then(doc =>{
                const newUser = doc.data()
                const notification = {
                    content: 'Ajoute d\'un nouvelle utilisateur',
                    user: `${newUser.nom} ${newUser.prenom}`,
                    time: admin.firestore.FieldValue.serverTimestamp()
                }
                return createNotification(notification)
            })
})