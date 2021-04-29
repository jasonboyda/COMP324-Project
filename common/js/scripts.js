// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
    apiKey: "AIzaSyD597ViTS0_jhlBcRCp-keYMsysgc-swu8",
    authDomain: "teachingaidwebsite.firebaseapp.com",
    projectId: "teachingaidwebsite",
    storageBucket: "teachingaidwebsite.appspot.com",
    messagingSenderId: "957414388024",
    appId: "1:957414388024:web:87600402c176d3d42c11cd",
    measurementId: "G-RJVDYE8HGB",
    databaseUrl: "https://teachingaidwebsite-default-rtdb.firebaseio.com/"
};

// Initialize Firebase
if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
}

//Get Elements
/* const email = document.getElementById("email");
const pass = document.getElementById("passwordSignUp");
const submit = document.getElementById("signUpButton"); */

/* submit.addEventListener("click", e => {
    //Get email and password
    const emailVal = email.value;
    const passVal = pass.value;
    const promise = firebase.auth().createUserWithEmailAndPassword(emailVal, passVal)
    promise.catch(e => console.log(e.message));
}) */

// Get Elements
/* const login = document.getElementById("login");
const password = document.getElementById("password");
const commit = document.getElementById("commit"); */
    
/* commit.addEventListener("click", e => {
    // Get email and pass
    const email = login.value;
    const pass = password.value;
    const auth = firebase.auth();
    console.log(email, pass)
    // Sign in
    const promise = auth.signInWithEmailAndPassword(email, pass);
    promise.catch(e => console.log(e.message));
    }) */
const loggedInLinks = document.querySelectorAll('.logged-in');
const loggedOutLinks = document.querySelectorAll('.logged-out');
const setupUI = (user) => {
    if (user) {
        //toggle logged-in elements on, logged-out off
        loggedInLinks.forEach(item => item.style.display = 'block');
        loggedOutLinks.forEach(item => item.style.display = 'none');
    }
    else {
        //toggle logged-in elements off, logged-out on
        loggedInLinks.forEach(item => item.style.display = 'none');
        loggedOutLinks.forEach(item => item.style.display = 'block');
    }
}

const auth = firebase.auth();
auth.onAuthStateChanged(user => {
    if (user) {
        setupUI(user);
        //window.location = 'index.html'
    }
    else {
        setupUI();
    }
})

if (document.getElementById("sign-out")) { 
    document.getElementById("sign-out").addEventListener("click", e =>{
        if (firebase.auth().signOut()){
            setupUI();
        }
    })
}