//Captures initial experimentation with firebase Auth, but currently not functioning because sign in page login button returns "Cannot POST to..." 'Error'. 

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
    apiKey: "AIzaSyD597ViTS0_jhlBcRCp-keYMsysgc-swu8",
    authDomain: "teachingaidwebsite.firebaseapp.com",
    projectId: "teachingaidwebsite",
    storageBucket: "teachingaidwebsite.appspot.com",
    messagingSenderId: "957414388024",
    appId: "1:957414388024:web:87600402c176d3d42c11cd",
    measurementId: "G-RJVDYE8HGB"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
    
// Get Elements
const login = document.getElementById('login');
const password = document.getElementById('password');
const commit = document.getElementById('commit');
    
commit.addEventListener('commit', e => {
    // Get email and pass
    const email = login.value;
    const pass = password.value;
    const auth = firebase.auth();
    // Sign in
    const promise = auth.signInWithEmailAndPassword(email, pass);
    promise.catch(e => console.log(e.message));
    })

