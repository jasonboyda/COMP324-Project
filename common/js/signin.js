const login = document.getElementById("login");
const password = document.getElementById("password");
const commit = document.getElementById("commit");

commit.addEventListener("click", e => {
    // Get email and pass
    const email = login.value;
    const pass = password.value;
    const auth = firebase.auth();
    console.log(email, pass)
    // Sign in
    const promise = auth.signInWithEmailAndPassword(email, pass);
    promise.catch(e => console.log(e.message));
    })