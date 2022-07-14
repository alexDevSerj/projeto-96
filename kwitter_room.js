const firebaseConfig = {
  apiKey: "AIzaSyAdBCa_7ki8h9LYu0X47izXsMsWieNhAjE",
  authDomain: "projeto-94-67ca2.firebaseapp.com",
  databaseURL: "https://projeto-94-67ca2-default-rtdb.firebaseio.com",
  projectId: "projeto-94-67ca2",
  storageBucket: "projeto-94-67ca2.appspot.com",
  messagingSenderId: "702046791208",
  appId: "1:702046791208:web:3265c9ea74d4d1c9e4b71d"
};

firebase.initializeApp(firebaseConfig)

var nome = localStorage.getItem('userName');
document.getElementById("boas_vindas").innerHTML = "bem-vindo(a) " + nome;

function addRoom() {
  sala = document.getElementById("nome_da_sala").value
  localStorage.setItem('nome_da_sala', sala);
  firebase.database().ref("/").child(sala).update({
    purpose: "adicionar nome de sala"
  });
  window.location = "kwitterPage.html"
}

function getData() {
  firebase.database().ref("/").on('value', function (snapshot) {
    document.getElementById("output").innerHTML = "";
    snapshot.forEach(
      function (childSnapshot) {
        childKey = childSnapshot.key;
        roomNames = childKey;
        //Início do código
        console.log(childKey)
        row = "<div class='roomName' id=" + roomNames + " onclick='redirectToRoomName(this.id)' >#" +
        roomNames + "</div><hr>";
      document.getElementById("output").innerHTML += row;
        //Fim do código
      });
  });
}
function redirectToRoomName(name) {
  console.log(name);
  localStorage.setItem("roomName", name);
  window.location = "kwitterPage.html";
}

getData();

function logout(){
  localStorage.removeItem("userName");
    localStorage.removeItem("roomName");
    window.location = "index.html";
}