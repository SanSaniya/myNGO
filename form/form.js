const firebaseConfig = {
    apiKey: "AIzaSyAmkV0OySjfkK0hmdGloj4YFZ86E7ithw0",
    authDomain: "helpandcare07.firebaseapp.com",
    databaseURL: "https://helpandcare07-default-rtdb.firebaseio.com",
    projectId: "helpandcare07",
    storageBucket: "helpandcare07.firebasestorage.app",
    messagingSenderId: "904367678241",
    appId: "1:904367678241:web:ba843a5341ddf1864c1460",
    measurementId: "G-WSY1709G5K"
  };
//for initialize firebase
  firebase.initializeApp(firebaseConfig);
  //refrrence
  firebase.database().ref('contactForm')