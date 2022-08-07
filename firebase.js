// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.2/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAk5qco5krJJZzS7vIt65qXkmGHXP7Ljuk",
  authDomain: "contact-form-e33ca.firebaseapp.com",
  projectId: "contact-form-e33ca",
  storageBucket: "contact-form-e33ca.appspot.com",
  messagingSenderId: "265815669269",
  appId: "1:265815669269:web:81b082d0659083977c2c1c"
};

// firebase.initializeApp();

// Initialize Firebase
const app = initializeApp(firebaseConfig);



document.getElementById('contact-form').addEventListener('submit', (e) => {
    e.preventDefault();


    let name = getInputVal('name');
    let email = getInputVal('email');
    let phone = getInputVal('phone');
    let message = getInputVal('message');

    
    console.log(name);
});


// function to get input val

let getInputVal = (id) => {
    return document.getElementById(id).value;
}