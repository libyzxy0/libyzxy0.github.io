const firebaseConfig = {
    apiKey: "AIzaSyCq03_8FbfJ4lxIt2xXFl6qv_Pi5ye2zMo",
    authDomain: "db-libyzxy0.firebaseapp.com",
    databaseURL: "https://db-libyzxy0-default-rtdb.firebaseio.com",
    projectId: "db-libyzxy0",
    storageBucket: "db-libyzxy0.appspot.com",
    messagingSenderId: "973761674188",
    appId: "1:973761674188:web:2f68abf41112590d1cfb69",
    measurementId: "G-NH14QK2P9W"
  };

firebase.initializeApp(firebaseConfig);

//Vatriables
let dataDir = "db-libyzxy0/libyzxy0.github.io"
let formID = "sendForm"


var msgDB = firebase.database().ref(dataDir);

document.getElementById(formID).addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  var email = getIDS("email");
  var about = getIDS("about");
  var msg = getIDS("msg");
  
  saveData(email, about, msg);
  
  document.getElementById(formID).reset();
}

var saveData = (email, about, msg) => {
  var msgData = msgDB.push();

  msgData.set({
    email: email,
    about: about,
    msg: msg,
  });
};

var getIDS = (id) => {
  return document.getElementById(id).value;
};
