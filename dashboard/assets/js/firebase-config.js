// إعدادات Firebase — مشروع kuwait-jhor
const firebaseConfig = {
  apiKey: "AIzaSyC9F3lvWsFabhQXKTBs3ZsHp1417zMfaGE",
  authDomain: "kuwait-jhor.firebaseapp.com",
  databaseURL: "https://kuwait-jhor-default-rtdb.firebaseio.com",
  projectId: "kuwait-jhor",
  storageBucket: "kuwait-jhor.firebasestorage.app",
  messagingSenderId: "528313210694",
  appId: "1:528313210694:web:a856f969bfb9f6a199b747",
  measurementId: "G-LR9EQWCNY9"
};
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
const db = firebase.firestore();
const rtd = firebase.database();
window.db = db;
window.rtd = rtd;
