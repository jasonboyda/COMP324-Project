//Get Elements
const email = document.getElementById("email");
const pass = document.getElementById("passwordSignUp");
const submit = document.getElementById("signUpButton");

submit.addEventListener("click", e => {
    //Get email and password
    const emailVal = email.value;
    const passVal = pass.value;
    const promise = firebase.auth().createUserWithEmailAndPassword(emailVal, passVal)
    promise.catch(e => console.log(e.message));
})

//Gets user information from sign up page
const name1 = document.getElementById("name");
const age = document.getElementById("age");
const expLvl = "";
if (document.getElementById('novice').checked) {
    expLvl = document.getElementById('novice').value;
  }
if (document.getElementById('intermediate').checked) {
    expLvl = document.getElementById('intermediate').value;
}
if (document.getElementById('advanced').checked) {
    expLvl = document.getElementById('advanced').value;
}
//gets the checked areas of interest
var checkboxes = document.getElementsByName('area');
var vals = "";
for (var i=0, n=checkboxes.length;i<n;i++) {
    if (checkboxes[i].checked) {
        vals += ", "+checkboxes[i].value;
    }
}

/*
function getInfo() {
    var name = document.getElementById("name").value;
    var age = document.getElementById("age").value;
    var expLvl = null;
    //Sorry this part is a little bit cluttered, will streamline later
    if (document.getElementById('novice').checked) {
        expLvl = document.getElementById('novice').value;
      }
    if (document.getElementById('intermediate').checked) {
        expLvl = document.getElementById('intermediate').value;
    }
    if (document.getElementById('advanced').checked) {
        expLvl = document.getElementById('advanced').value;
    }
    //gets the checked areas of interest
    var checkboxes = document.getElementsByName('area');
    var vals = "";
    for (var i=0, n=checkboxes.length;i<n;i++) {
        if (checkboxes[i].checked) {
            vals += ", "+checkboxes[i].value;
        }
    }
    //gets username
    var username = document.getElementById("username").value;
    //need to figure out how to save the password while protecting user privacy
    //gets email
    var email = document.getElementById("email").value;
}
*/
function userProfile() {
    var body = document.createElement('p');
    body.innerHTML = [name1, age, expLvl, vals, email];
    document.body.appendChild(body);
}
