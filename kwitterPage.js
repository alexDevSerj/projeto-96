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

  function logout(){
    localStorage.removeItem("userName");
      localStorage.removeItem("roomName");
      window.location = "index.html";
  }

  var userName = localStorage.getItem = "userName";
  var roomName = localStorage.getItem = "roomName";

  function send(){
    var msg = document.getElementById("digite_sua_mensagem").value;
    firebase.database().ref(roomName).push({
      name:userName,
      mensage:msg
  })
  document.getElementById("mensagem").value = "";
  }