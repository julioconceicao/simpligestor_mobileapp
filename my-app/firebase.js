import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

let firebaseConfig = {
    apiKey: "AIzaSyDXUf2_SU1p9x67Q0QpKJ97SURvagk4n2M",
    authDomain: "simpligestor-mobile.firebaseapp.com",
    projectId: "simpligestor-mobile",
    storageBucket: "simpligestor-mobile.appspot.com",
    messagingSenderId: "141327732333",
    appId: "1:141327732333:web:11cce728d7e500c907f964"
};

if (!firebase.apps.length) {
    console.log('Conectando... ${firebase.apps.length}')
    firebase.initializeApp(firebaseConfig)
    console.log('Conectado: ${firebase.apps.length}')
}

export default firebase;