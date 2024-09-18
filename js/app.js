 // Import the functions you need from the SDKs you need
 import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-app.js";
 import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-analytics.js";
 // TODO: Add SDKs for Firebase products that you want to use
 // https://firebase.google.com/docs/web/setup#available-libraries

 // Your web app's Firebase configuration
 // For Firebase JS SDK v7.20.0 and later, measurementId is optional
 const firebaseConfig = {
   apiKey: "AIzaSyD4Cgs5V_eiZBkl97Gn1q9ywGD9xskz2EM",
   authDomain: "hackathon-a6232.firebaseapp.com",
   projectId: "hackathon-a6232",
   storageBucket: "hackathon-a6232.appspot.com",
   messagingSenderId: "234751755604",
   appId: "1:234751755604:web:51202bf504ab124dc434c1",
   measurementId: "G-ERTJF7EVKB"
 };

 // Initialize Firebase
 const app = initializeApp(firebaseConfig);
 const analytics = getAnalytics(app);